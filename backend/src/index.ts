import { Hono } from "hono";
import authController from "./controllers/auth";

const app = new Hono();

app.route("/auth", authController);

app.get("/", (c) => c.text("Hello Bun!!!!"));

export default app;
