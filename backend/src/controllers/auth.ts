import prisma from "@/libs/prisma";
import { Hono } from "hono";
import * as bcrypt from "bcryptjs";
import { decode, sign, verify } from "hono/jwt";
import { setCookie } from "hono/cookie";

const authController = new Hono();

authController.get("/login", async (c) => {
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

authController.get("/register", async (c) => {
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

export default authController;
