import { useEffect, useState } from "react";
import { PostItNote, PostsResponse } from "../types/types";

export const usePostsData = () => {
const [posts, setPosts] = useState<PostItNote[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const hasContent = !isLoading && !isError;

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetch(
          "https://intro-lemon.vercel.app/api/posts?glitch=true"
        );
        const json = (await response.json()) as PostsResponse;
        setPosts(json.postIts);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return {
    posts, isLoading, isError, hasContent
  }

}