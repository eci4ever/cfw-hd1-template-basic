import { Hono } from "hono";
import { cors } from "hono/cors";
import { auth } from "./lib/better-auth";

const app = new Hono<{ Bindings: CloudflareBindings }>();

// Add CORS middleware for local development
app.use(
  "*",
  cors({
    origin: "*",
    credentials: true,
  })
);

app.get("/", (c) => {
  return c.text("Hello World - Auth Worker Running!");
});

app.on(["GET", "POST"], "/api/auth/*", (c) => {
  return auth(c.env).handler(c.req.raw);
});

export default app;
