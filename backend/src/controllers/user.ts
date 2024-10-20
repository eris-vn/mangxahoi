import authMiddleware from "@/middlewares/auth";
import { Hono } from "hono";

const userController = new Hono();

userController.use(authMiddleware);

userController.get("/", async (c) => {
  const user = c.var.user;
  return c.json({ code: 200, data: user });
});

export default userController;
