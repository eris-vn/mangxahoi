import { Hono } from "hono";
import { cors } from "hono/cors";
import { HTTPException } from "hono/http-exception";

const app = new Hono().basePath("/api");
app.use("/*", cors());

import authController from "./controllers/auth";
app.route("/auth", authController);

import userController from "./controllers/user";
app.route("/user", userController);

// Xử lý validate

app.onError((err, c) => {
  if (err instanceof HTTPException) {
    if (err.message == "validate") {
      return new Response(JSON.stringify(err.cause), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }
  throw err;
});

export default {
  port: 4000,
  fetch: app.fetch,
};
