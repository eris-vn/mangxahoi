import { createMiddleware } from "hono/factory";
import { Prisma } from "@prisma/client";
import jwt from "jsonwebtoken";

type user = Prisma.UserGetPayload<{}>;

interface UserWithRole extends user {
  roles: string[];
}

type Env = {
  Variables: {
    user: UserWithRole;
  };
};

declare module "hono" {
  interface ContextVariableMap {
    user: UserWithRole;
  }
}

const authMiddleware = createMiddleware<Env>(async (c, next) => {
  const SECRET_KEY = Bun.env.SECRET_KEY ?? "";
  const authHeader = c.req.header("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return c.json({
      code: 401,
      message: "Missing or malformed authorization header.",
    });
  }
  const token = authHeader.split(" ")[1];

  if (!token) {
    return c.json({
      code: 401,
      message: "Vui lòng đăng nhập và thử lại.",
    });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);

    c.set("user", decoded as any);
  } catch (error) {
    console.log(error);

    return c.json({
      code: 401,
      message: "Vui lòng tải lại trang và thử lại.",
    });
  }

  await next();
});

export default authMiddleware;
