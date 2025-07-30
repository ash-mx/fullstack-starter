import { Hono } from "hono";
import { getAllPosts, getPostById, createPost } from "./handlers";
import { requireAuth, logPostActivity } from "./middleware";

const posts = new Hono()
  .use("*", logPostActivity) // Apply middleware
  .get("/", getAllPosts) // Public route
  .get("/:id", getPostById) // Public route
  .use("/", requireAuth) // Apply auth middleware to routes below
  .post("/", createPost); // Protected route

export default posts;
