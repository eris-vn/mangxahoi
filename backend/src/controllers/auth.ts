import { Hono } from "hono";
import prisma from "@/libs/prisma";
import * as bcrypt from "bcryptjs";
import * as path from "path";
import * as fs from "fs";
import { decode, sign, verify } from "hono/jwt";
import { setCookie } from "hono/cookie";
import { OAuth2Client } from "google-auth-library";
import { validate } from "@/libs/validate";
import { number, ref, string } from "yup";
import CryptoJS from "crypto-js";
import { getUTCTime } from "@/libs/time";
import { mailer } from "@/libs/mailer";
import jwt from "jsonwebtoken";

const authController = new Hono();

const templatePath = path.join(__dirname, "../email/templates/register.hbs");

function getOauth2Client() {
  const oAuth2Client = new OAuth2Client(
    "81902586117-qin78jipkm7eu8e41tqtqtiv5vu0tdv0.apps.googleusercontent.com",
    "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",
    "http://localhost:3000"
  );

  return oAuth2Client;
}

async function createAccessToken(user: any) {
  const secret = Bun.env.SECRET_KEY;
  if (!secret) {
    throw new Error("SECRET_KEY is not defined");
  }
  const payloadAccessToken = {
    sub: user.id,
    exp: Math.floor(Date.now() / 1000) + 60 * 60, // Token expires in 1 hourse
  };
  const accessToken = await sign(payloadAccessToken, secret);
  return accessToken;
}

async function createRefreshToken(user: any) {
  const secret = Bun.env.SECRET_KEY;
  if (!secret) {
    throw new Error("SECRET_KEY is not defined");
  }
  const payloadRefreshToken = {
    sub: user.id,
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 10, // Token expires in 10 day
  };
  const refreshToken = await sign(payloadRefreshToken, secret);
  return refreshToken;
}

authController.post("/login", async (c) => {
  const SECRET_KEY = Bun.env.SECRET_KEY;

  const data = await validate(
    {
      email: string()
        .email("Email phải đúng định dạng")
        .required("Không bỏ trống email"),
      password: string()
        .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
        .required("Mật khẩu không được bỏ trống"),
    },
    await c.req.json()
  );

  try {
    const user = await prisma.user.findFirst({
      where: {
        email: data.email,
      },
      include: {
        profile: true,
      },
    });

    if (!user) {
      return c.json({ code: -100, message: "Tài khoản không tồn tại" });
    }

    const decodePassword = await bcrypt.compare(data.password, user.password);

    if (!decodePassword) {
      return c.json({ code: -100, message: "Mật Khẩu không chính xác" });
    }

    if (!SECRET_KEY) {
      throw new Error("SECRET_KEY is not defined");
    }

    // Xoá các token trước đó / đăng xuất trên các thiết bị khác
    await prisma.refreshToken.deleteMany({
      where: {
        userId: user.id,
      },
    });

    const accessToken = jwt.sign(
      {
        id: user.id,
        email: user.email,
        profile: user.profile,
      },
      SECRET_KEY,
      { expiresIn: "15m" }
    );
    const refreshToken = jwt.sign(
      {
        user_id: user.id,
      },
      SECRET_KEY,
      { expiresIn: "30d" }
    );

    const now = new Date();
    const expired_at = new Date();
    expired_at.setDate(now.getDate() + 30);

    await prisma.refreshToken.create({
      data: {
        userId: user.id,
        token: refreshToken,
        expiredAt: getUTCTime(expired_at),
      },
    });

    return c.json({
      code: 200,
      message: "Đăng nhập thành công",
      data: {
        access_token: accessToken,
        refresh_token: refreshToken,
      },
    });
  } catch (error) {
    return c.json({ code: -100, message: "Đăng nhập thất bại" });
  }
});

authController.post("/register", async (c) => {
  const body = await validate(
    {
      email: string()
        .email("Email phải đúng định dạng")
        .required("Không bỏ trống email"),
      code: string()
        .length(6, "Mã xác nhận phải có 6 ký tự")
        .required("Mã xác nhận không được bỏ trống"),
      password: string()
        .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
        .required("Mật khẩu không được bỏ trống"),
      confirm_password: string()
        .oneOf([ref("password"), ""], "Mật khẩu xác nhận không khớp")
        .required("Xác nhận mật khẩu không được bỏ trống"),
    },
    await c.req.json()
  );
  const now = new Date();

  try {
    const verifyCode = await prisma.verificationCodes.findFirst({
      where: {
        email: body.email,
        code: CryptoJS.SHA256(body.code).toString(CryptoJS.enc.Hex),
      },
    });

    if (!verifyCode || verifyCode.expires_at < now) {
      return c.json({ code: -100, message: "Mã xác nhận sai hoặc hết hạn." });
    }

    await prisma.verificationCodes.delete({
      where: {
        id: verifyCode.id,
      },
    });

    const checkExist = await prisma.users.findUnique({
      where: {
        email: body.email,
      },
    });

    if (checkExist) {
      return c.json({ code: -100, message: "Email đã được đăng Kí" });
    }

    const encodePassword = await bcrypt.hash(body.password, 10);
    const newUser = await prisma.users.create({
      data: {
        email: body.email,
        password: encodePassword,
      },
    });
    return c.json({
      code: 200,
      message: "Đăng ký tài khoản thành công",
    });
  } catch (error) {
    return c.json({ code: -100, message: "Đăng ký thất bại" });
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

authController.post("/verify/code", async (c) => {
  try {
    // Lấy mã code từ body
    const { code } = await c.req.json();
    // Kiểm tra xem code có phải là string không
    if (typeof code !== "string") {
      return c.json({ error: "Invalid code format" }, 400);
    }

    // Tạo OAuth2 client mới
    const client = getOauth2Client();

    // Verify code và lấy token từ code
    const { tokens } = await client.getToken(code); // Đảm bảo dùng await để giải quyết promise
    // Đặt credentials cho client
    client.setCredentials(tokens);
    const { id_token } = tokens;

    if (typeof id_token !== "string") {
      return c.json({ error: "Invalid code format" }, 400);
    }
    const decoded = decode(id_token);
    const { email, name, picture } = decoded.payload;
    if (!email) {
      return c.json({ error: "Email not found in token" }, 400);
    }
    console.log(email);

    const checkEmail = await prisma.user.findUnique({
      where: {
        email: email as string, // Đảm bảo email là string
      },
    });
    if (!checkEmail) {
      const user = await prisma.user.create({
        data: {
          email: email as string,
          name: name as string,
          password: "",
          gender: "",
          profilePicture: picture as string,
          bio: "",
        },
      });
      const accessToken = await createAccessToken(user);
      const refreshToken = await createRefreshToken(user);
      setCookie(c, "refreshToken", refreshToken, {
        secure: true,
        httpOnly: true,
        maxAge: 1000,
        expires: new Date(Date.now() + 60 * 60 * 24 * 10 * 1000),
        sameSite: "Strict",
      });
      return c.json({ user, accessToken }, 200);
    } else {
      const accessToken = await createAccessToken(checkEmail);
      const refreshToken = await createRefreshToken(checkEmail);
      setCookie(c, "refreshToken", refreshToken, {
        secure: true,
        httpOnly: true,
        maxAge: 1000,
        expires: new Date(Date.now() + 60 * 60 * 24 * 10 * 1000),
        sameSite: "Strict",
      });
      return c.json(
        { user: checkEmail, accessToken, message: "đã có mail" },
        200
      );
    }
  } catch (error) {
    console.error(error);
    return c.json({ error: error || "Internal Server Error" }, 401);
  }
});

authController.post("/sendEmail", async (c) => {
  const body = await validate(
    {
      email: string()
        .email("Email phải đúng định dạng")
        .required("Không bỏ trống email"),
    },
    await c.req.json()
  );

  try {
    const now = new Date();
    const expiresAt = new Date(now.getTime() + 15 * 60 * 1000);
    const code = Math.floor(100000 + Math.random() * 900000).toString();

    const existingVerificationCode = await prisma.verificationCode.findFirst({
      where: {
        email: body.email,
        expiresAt: { gt: getUTCTime(now) },
      },
    });

    if (existingVerificationCode) {
      return c.json({ code: -100, message: "Vui lòng chờ 15p sau để gửi lại" });
    }

    await prisma.$transaction([
      prisma.verificationCode.create({
        data: {
          code: CryptoJS.SHA256(code.toString()).toString(CryptoJS.enc.Hex),
          email: body.email,
          expiresAt: getUTCTime(expiresAt),
        },
      }),
    ]);

    const mailOptions = {
      from: "shoperis.net@gmail.com",
      to: body.email,
      subject: `${code} là mã xác nhận tài khoản 2KFORUM của bạn.`,
      html: `<div>Bạn đang thực hiện đăng ký tài khoản, mã xác nhận là ${code}</div><br><div>Vui lòng hoàn thành trong 15 phút.</div>`,
    };

    mailer.sendMail(mailOptions);

    return c.json({
      code: 200,
      message: "Gửi mã thành công",
    });
  } catch (error) {
    console.log(error);

    return c.json({ code: -100, message: "Gửi thư thất bại" });
  }
});

export default authController;
