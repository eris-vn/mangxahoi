import prisma from "@/libs/prisma";
import { Hono } from "hono";
import * as bcrypt from "bcryptjs";
import * as path from 'path';
import * as fs from 'fs'
import * as handlebars from 'handlebars'
import * as nodemailer from 'nodemailer'
import moment from 'moment'
import { CryptoHasher } from "bun";
import { decode, sign, verify } from "hono/jwt";
import { setCookie } from "hono/cookie";
import { OAuth2Client } from "google-auth-library";
const authController = new Hono();

const templatePath = path.join(__dirname, '../email/templates/register.hbs');
const source = fs.readFileSync(templatePath, 'utf-8');
const template = handlebars.compile(source);
function getOauth2Client() {
  const oAuth2Client = new OAuth2Client(
    '81902586117-qin78jipkm7eu8e41tqtqtiv5vu0tdv0.apps.googleusercontent.com',
    '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',
    'http://localhost:3000'
  );

  return oAuth2Client;
}
async function createAccessToken(user :any){
  const secret = Bun.env.SECRET_KEY;
  if (!secret) {
    throw new Error("SECRET_KEY is not defined");
  }
  const payloadAccessToken = {
    sub: user.id,
    exp: Math.floor(Date.now() / 1000) + 60 * 60, // Token expires in 1 hourse
  };
  const accessToken = await sign(payloadAccessToken, secret);
  return accessToken
}
async function createRefreshToken(user :any){
  const secret = Bun.env.SECRET_KEY;
  if (!secret) {
    throw new Error("SECRET_KEY is not defined");
  }
  const payloadRefreshToken = {
    sub: user.id,
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 10, // Token expires in 10 day
  };
  const refreshToken = await sign(payloadRefreshToken, secret);
  return refreshToken
}

authController.post("/login", async (c) => {
  try {
    const data = await c.req.json();

    const user = await prisma.users.findFirst({
      where: {
        email: data.email,
      },
    });
    if (user) {
      const decodePassword = await bcrypt.compare(data.password, user.password);
      if (!decodePassword) {
        return c.json({ message: "Mật Khẩu không chính xác" }, 401);
      }
      const secret = Bun.env.SECRET_KEY;
      if (!secret) {
        throw new Error("SECRET_KEY is not defined");
      }
      const payloadAccessToken = {
        sub: user.id,
        exp: Math.floor(Date.now() / 1000) + 60 * 60, // Token expires in 1 hourse
      };
      const accessToken = await sign(payloadAccessToken, secret);
      const payloadRefreshToken = {
        sub: user.id,
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 10, // Token expires in 10 day
      };
      const refreshToken = await sign(payloadRefreshToken, secret);
      setCookie(c, "refreshToken", refreshToken, {
        secure: true,
        httpOnly: true,
        maxAge: 1000,
        expires: new Date(Date.now() + 60 * 60 * 24 * 10 * 1000),
        sameSite: "Strict",
      });
      return c.json({ accessToken, meassage: " Đăng nhập thành công" }, 200);
    } else {
      return c.json({ message: "Sai tên đăng nhập", user: user }, 401);
    }
  } catch (error) {
    return c.json({ message: "Internal Server Error" }, 500);
  }
});

authController.post("/register", async (c) => {
  try {
    const data = await c.req.json();

    const checkEmail = await prisma.users.findUnique({
      where: {
        email: data.email,
      },
    });
    if (checkEmail) {
      return c.json({ message: "Email đã được đăng Kí" }, 409);
    }
    const encodePassword = await bcrypt.hash(data.password, 10);
    const newUser = await prisma.users.create({
      data: {
        name: data.name,
        email: data.email,
        password: encodePassword,
        gender: data.gender,
        profilePicture: data.profilePicture || null,
        bio: data.bio || null,
      },
    });
    return c.json(
      { message: "Đăng ký tài khoản thành công", user: newUser },
      200
    );
  } catch (error) {
    return c.json({ message: "Internal Server Error" }, 500);
  }
});

authController.get("/me", async (c) => {
  try {
    const token = c.req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return c.json({ message: "Không tìm có token" }, 404);
    }
    const secret = Bun.env.SECRET_KEY;
    if (!secret) {
      throw new Error("SECRET_KEY is not defined");
    }
    const data = await verify(token, secret);
    if (!data) {
      c.req;
    }
    const user = await prisma.users.findFirst({
      where: {
        id: data.sub as string | object,
      },
    });
    return c.json({ user }, 200);
  } catch (error) {
    return c.json({ message: "Token đã hết hạn." }, 401);
  }
});
authController.post('/verify/code', async (c) => {
  try {
    // Lấy mã code từ body
    const { code } = await c.req.json();
    // Kiểm tra xem code có phải là string không
    if (typeof code !== 'string') {
      return c.json({ error: 'Invalid code format' }, 400);
    }

    // Tạo OAuth2 client mới
    const client = getOauth2Client();
    
    // Verify code và lấy token từ code
    const { tokens } = await client.getToken(code); // Đảm bảo dùng await để giải quyết promise
    // Đặt credentials cho client
    client.setCredentials(tokens);
    const { id_token } = tokens;

    if (typeof id_token !== 'string') {
      return c.json({ error: 'Invalid code format' }, 400);
    }
    const decoded = decode(id_token);
    const { email, name, picture } = decoded.payload; 
    if (!email) {
      return c.json({ error: 'Email not found in token' }, 400);
    }
    console.log(email);
    
    const checkEmail = await prisma.users.findUnique({
      where: {
        email: email as string, // Đảm bảo email là string
      },
    });
    if(!checkEmail){
      const user = await prisma.users.create({
        data: {
        email: email as string, 
        name: name as string,
        password: '',
        gender: '',
        profilePicture: picture as string,
        bio: ''
        },
      });
      const accessToken= await createAccessToken(user);
      const refreshToken =await createRefreshToken(user);
      setCookie(c, "refreshToken", refreshToken, {
        secure: true,
        httpOnly: true,
        maxAge: 1000,
        expires: new Date(Date.now() + 60 * 60 * 24 * 10 * 1000),
        sameSite: "Strict",
      });
      return c.json({ user, accessToken },200);
    }
    else{
      const accessToken= await createAccessToken(checkEmail);
      const refreshToken =await createRefreshToken(checkEmail);
      setCookie(c, "refreshToken", refreshToken, {
        secure: true,
        httpOnly: true,
        maxAge: 1000,
        expires: new Date(Date.now() + 60 * 60 * 24 * 10 * 1000),
        sameSite: "Strict",
      });
      return c.json({ user:checkEmail, accessToken, message:"đã có mail" },200);
    }

    
  } catch (error) {
    console.error(error);
    return c.json({ error: error || 'Internal Server Error' }, 401);
  }
});
authController.post('/sendEmail', async (c)=>{
  try {
    const body = await c.req.json();
    
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const hasher = new CryptoHasher("sha256");
    hasher.update(code);
   
    const expired_at = moment().add(120, 'seconds').toDate();
    console.log(expired_at);
    const verificationCodes = await prisma.verificationCodes.create({
      data:{
        email: body.email as string,
        code : hasher.digest("hex"),
        expired_at: expired_at
      }
    });
   
  if(verificationCodes){
    const otp = code;
			// Gửi email xác nhận
			const htmlContent = template({ otp });
				// Cấu hình transporter
			const transporter = nodemailer.createTransport({
				host: 'smtp.example.com',
				service: 'Gmail',
				auth: {
					user: Bun.env.EMAIL_USER,
					pass: Bun.env.EMAIL_PASS
				}
			});

				// Gửi email
			await transporter.sendMail({
				from: '"Acme" <onboarding@resend.dev>',
				to: verificationCodes.email,
				subject: 'Xác nhận đăng ký tài khoản',
				html: htmlContent
			});
			return c.json({
			  status: 200,
			  message: "gửi mail thành công",
			  user: verificationCodes
			});
  }
  } catch (error) {
    return c.json({ error: "lỗi server" }, 500);
  }
})

export default authController;
