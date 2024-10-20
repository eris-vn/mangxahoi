import prisma from "@/libs/prisma";
import { getUTCTime } from "@/libs/time";
import { validate, yup } from "@/libs/validate";
import authMiddleware from "@/middlewares/auth";
import { Hono } from "hono";
import jwt from "jsonwebtoken";

const userController = new Hono();

userController.get("/", authMiddleware, async (c) => {
  const user = c.var.user;
  return c.json({ code: 200, data: user });
});

userController.post("/create", async (c) => {
  const SECRET_KEY = Bun.env.SECRET_KEY ?? "";
  const body = await validate(
    {
      action_ticket: yup
        .string()
        .required("Vui lòng tải lại trang và thử lại."),
      name: yup.string().required("Họ tên không được bỏ trống."),
      birthday: yup.date().required("Sinh nhật không được bỏ trống"),
      gender: yup
        .string()
        .required("Giới tính không được bỏ trống.")
        .oneOf(["male", "female", "other"], "Giới tính không hợp lệ"),
    },
    await c.req.json()
  );

  try {
    const now = new Date();
    const verifyAction = await prisma.actionTicket.findFirst({
      where: {
        ticket: body.ticket,
        action: "create_profile",
      },
      include: {
        user: true,
      },
    });

    // nếu hành động hết hạn hoặc ko tồn tại
    if (!verifyAction || verifyAction.expiresAt < now) {
      return c.json({
        code: -101,
        msg: "Hành động hết hạn, vui lòng tải lại trang và thử lại.",
      });
    }

    // xoá hành động
    await prisma.actionTicket.delete({
      where: {
        id: verifyAction.id,
      },
    });

    const user = verifyAction.user;

    if (!user) {
      throw Error("Không tìm thấy người dùng");
    }

    await prisma.profile.create({
      data: {
        userId: user.id,
        name: body.name,
        gender: body.gender,
        birthday: body.birthday,
      },
    });

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
        profile: {
          name: body.name,
          gender: body.gender,
          birthday: body.birthday,
        },
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
      message: "Tạo hồ sơ thành công",
      data: {
        access_token: accessToken,
        refresh_token: refreshToken,
      },
    });
  } catch (error) {
    console.log(error);

    return c.json({ code: -100, message: "Tạo hồ sơ thất bại." });
  }
});

export default userController;
