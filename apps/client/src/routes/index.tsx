import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { hc, type InferResponseType } from "hono/client";
import type { AppType } from "../../../server/src/index";

export const Route = createFileRoute("/")({
  component: Index,
});

const client = hc<AppType>("/");
type PostsResponse = InferResponseType<typeof client.api.posts.$get>;

function Index() {
  const { data, isLoading, error } = useQuery<PostsResponse>({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await client.api.posts.$get();
      if (!response.ok) throw new Error("Failed to fetch posts");
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <div>
        <h3>Welcome Home!</h3>
        <p>Loading posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h3>Welcome Home!</h3>
        <p>Error loading posts: {error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <h3>Welcome Home!</h3>
      {data?.posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
