import type { CreatePostRequest, Post } from "@repo/zod-schemas";

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

export const createNewPost = (data: CreatePostRequest): Post => {
  const newPost: Post = {
    id: `post_${Date.now()}`,
    ...data,
    createdAt: new Date(),
  };

  posts.push(newPost);
  return newPost;
};

export const findPostById = (id: string): Post | undefined => {
  return posts.find((p) => p.id === id);
};

export const listPosts = (): Post[] => posts;
