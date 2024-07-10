import { PostItNote, PostsResponse } from "../types/types";
import { useQuery } from "@tanstack/react-query";

export const usePostsData = (author?: string) => {
  const fetchUrl = author
    ? `https://intro-lemon.vercel.app/api/posts/${author}?glitch=true`
    : "https://intro-lemon.vercel.app/api/posts?glitch=true";
  const { isPending, data, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      fetch(fetchUrl)
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
