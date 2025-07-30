import { Hono } from "hono";
import { createPost, getAllPosts, getPostById } from "./handlers";
import { logPostActivity, requireAuth } from "./middleware";

const posts = new Hono()
  .use("*", logPostActivity) // Apply logging to all routes

  // Public routes
  .get("/", getAllPosts)
  .get("/:id", getPostById)

  // Protected routes (apply auth middleware only to these)
  .post("/", requireAuth, createPost);

export default posts;
