import type { Context } from "hono";
import type { Post, CreatePostRequest } from "@repo/zod-schemas";
import { createPostSchema } from "@repo/zod-schemas";

// Mock Data
const posts: Post[] = [
  {
    id: "post_1", // String ID
    title: "My First Post",
    content: "This is my first blog post!",
    authorId: "user_123", // String ID
    createdAt: new Date(),
    published: true,
  },
  {
    id: "post_2",
    title: "Learning Hono",
    content:
      "Today I started learning how to use the Hono framework with Bun. It's fast and fun!",
    authorId: "user_456",
    createdAt: new Date(),
    published: false,
  },
  {
    id: "post_3",
    title: "TypeScript Tips",
    content:
      "TypeScript makes JavaScript development safer and more enjoyable. Here are some tips to get started.",
    authorId: "user_789",
    createdAt: new Date(),
    published: true,
  },
];

export const getAllPosts = (c: Context) => {
  return c.json({ posts });
};

export const getPostById = (c: Context) => {
  const id = c.req.param("id");
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return c.json({ error: "Post not found" }, 404);
  }

  return c.json({ post });
};

export const createPost = async (c: Context) => {
  try {
    const body = await c.req.json();
    const validatedData: CreatePostRequest = createPostSchema.parse(body);

    const newPost: Post = {
      id: `post_${Date.now()}`,
      ...validatedData,
      createdAt: new Date(),
    };

    posts.push(newPost);
    return c.json({ post: newPost }, 201);
  } catch (error) {
    return c.json({ error: "Invalid data" }, 400);
  }
};
