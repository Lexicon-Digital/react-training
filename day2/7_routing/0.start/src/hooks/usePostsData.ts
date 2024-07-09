import { PostItNote, PostsResponse } from "../types/types";
import { useQuery } from "@tanstack/react-query";

export const usePostsData = () => {
  const { isPending, data, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      fetch("https://intro-lemon.vercel.app/api/posts?glitch=true")
        .then((res) => res.json() as Promise<PostsResponse>)
        .then((postsResponse) => postsResponse.postIts as PostItNote[]),
    retry: 2,
    refetchOnWindowFocus: false,
  });

  return {
    posts: data ?? [],
    isLoading: isPending,
    isError,
    hasContent: !isPending && !isError,
  };
};
