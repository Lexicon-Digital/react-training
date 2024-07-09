import { PostItNote, PostsResponse } from "../types/types";

const getPosts = async (): Promise<PostItNote[]> => {
  const response = await fetch("https://intro-lemon.vercel.app/api/posts");
  const data = await response.json();
  return getPostsFromResponse(data);
};

const getPostsFromResponse = (postItsResponse: PostsResponse): PostItNote[] => {
  return postItsResponse.postIts.map((postIt) => ({
    author: postIt.author,
    quote: postIt.note,
  }));
};

export { getPosts, getPostsFromResponse };
