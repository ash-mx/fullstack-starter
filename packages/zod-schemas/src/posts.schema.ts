import * as z from "zod";

export const createPostSchema = z.object({
  title: z.string().min(1, "Title is required").max(100),
  content: z.string().min(10, "Content must be at least 10 characters"),
  authorId: z.string().min(1, "Author ID is required"),
  published: z.boolean().default(false),
});

export const postSchema = createPostSchema.extend({
  id: z.string().min(1, "Post ID is required"),
  createdAt: z.date(),
});

export const updatePostSchema = createPostSchema.partial();

// Generate TypeScript types from Zod schemas
export type CreatePostRequest = z.infer<typeof createPostSchema>;
export type Post = z.infer<typeof postSchema>;
export type UpdatePostRequest = z.infer<typeof updatePostSchema>;
