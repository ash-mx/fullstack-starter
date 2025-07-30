import type { Context, Next } from "hono";

export const requireAuth = async (c: Context, next: Next) => {
  const authHeader = c.req.header("Authorization");

  if (!authHeader) {
    return c.json({ error: "Authorization required" }, 401);
  }

  c.set("userId", "1");
  await next();
};

export const logPostActivity = async (c: Context, next: Next) => {
  console.log(`Post API: ${c.req.method} ${c.req.url}`);
  await next();
};
