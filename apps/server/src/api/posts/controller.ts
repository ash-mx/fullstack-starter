import type { Context } from "hono";
import { createPostSchema } from "@repo/zod-schemas";
import { createNewPost, findPostById, listPosts } from "./service";

export const getAllPosts = (c: Context) => {
  return c.json({ posts: listPosts() });
};

export const getPostById = (c: Context) => {
  const id = c.req.param("id");
  const post = findPostById(id);

  if (!post) return c.json({ error: "Post not found" }, 404);
  return c.json({ post });
};

export const createPost = async (c: Context) => {
  try {
    const body = await c.req.json();
    const validated = createPostSchema.parse(body);

    const post = createNewPost(validated);
    return c.json({ post }, 201);
  } catch {
    return c.json({ error: "Invalid data" }, 400);
  }
};
