import { Hono } from "hono";
import { cors } from 'hono/cors';
import authController from "./controllers/auth";

const app = new Hono();

app.use(
  '/*', 
  cors({
    origin: ['http://localhost:3000'], // Gán trực tiếp domain
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE'], // Cấu hình các method được phép
    allowHeaders: ['Content-Type', 'Authorization'], // Các header được phép
    maxAge: 86400, // Cache preflight request trong 1 ngày
  })
);
app.route("/auth", authController);

app.get("/", (c) => c.text("Hello Bun!!!!"));

export default {
  port: 4000,
  fetch: app.fetch,
};
