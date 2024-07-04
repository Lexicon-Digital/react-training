import { PostItNote, PostsResponse } from "../types/types";

const getPosts = (): PostItNote[] => {
  return [
    {
      author: "one",
      quote: "One said this",
    },
    {
      author: "Two",
      quote: "Two said this and more",
    },
  ];
};

const getPostsFromResponse = (postItsResponse: PostsResponse): PostItNote[] => {
  return postItsResponse.postIts.map((postIt) => ({
    author: postIt.author,
    quote: postIt.note,
  }));
};

export { getPosts, getPostsFromResponse };
