import { PostItNote, PostRequest } from "../types/types";
import { getPostsFromResponse } from "./getPosts";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

type PostsData = {
  posts?: PostItNote[];
  isLoading: boolean;
  isFetching: boolean;
  create: (postItNote: PostItNote) => Promise<unknown>,
  isSaving: boolean;
}

const usePostsData = (): PostsData => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      fetch("https://intro-lemon.vercel.app/api/posts?glitch=true")
        .then((res) => res.json())
        .then(getPostsFromResponse),
  });

  const mutation = useMutation({
    mutationFn: (note: PostRequest) => {
      return fetch("https://intro-lemon.vercel.app/api/posts", {
        method: "post",
        body: JSON.stringify(note),
      }).then((res) => res.json());
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const create = async (postItNote: PostItNote) => {
    if (!postItNote.author) {
      throw new Error("Author is required");
    }
    if (!postItNote.quote) {
      throw new Error("Quote is required");
    }
    return await mutation.mutateAsync({
      author: postItNote.author,
      note: postItNote.quote
    })
  };

  return {
    posts: query.data,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    create,
    isSaving: mutation.isPending
  };
};

export { usePostsData };
