import { useEffect, useState } from "react";
import { PostItNote, PostsResponse } from "../types/types";
import { getPostsFromResponse } from "./getPosts";

const usePostsData = (): [PostItNote[], boolean] => {
  const [posts, setPosts] = useState<PostItNote[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://intro-lemon.vercel.app/api/posts")
      .then((response: Response) => response.json())
      .then((data: PostsResponse) => {
        setPosts(getPostsFromResponse(data));
        setIsLoading(false);
      });
  }, []);
  return [posts, isLoading];
};

export { usePostsData };
