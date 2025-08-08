import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { auth } from "./lib/auth";
import posts from "./api/posts";

const app = new Hono();

app.use(logger());
app.use(cors());
app.on(["POST", "GET"], "/api/auth/**", (c) => auth.handler(c.req.raw));

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

// Mount the posts API
const routes = app.route("/api/posts", posts);

// Export the app type for RPC
export type AppType = typeof routes;

export default {
  port: 3000,
  fetch: app.fetch,
};
