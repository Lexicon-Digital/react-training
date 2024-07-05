import { PostItNote } from "../types/types";
import { getPostsFromResponse } from "./getPosts";
import { useQuery } from "@tanstack/react-query";

const usePostsData = (): [PostItNote[] | undefined, boolean] => {
  
  const { isPending, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      fetch('https://intro-lemon.vercel.app/api/posts?glitch=true')
      .then((res) =>res.json())
      .then(getPostsFromResponse),
  })


  return [data, isPending];
};

export { usePostsData };
