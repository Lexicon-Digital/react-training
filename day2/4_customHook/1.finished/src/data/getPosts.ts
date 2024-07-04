import { PostItNote, PostsResponse } from "../types/types";

const getPostsFromResponse = (postItsResponse: PostsResponse): PostItNote[] => {
  return postItsResponse.postIts.map((postIt) => ({
    author: postIt.author,
    quote: postIt.note,
  }));
};

export { getPostsFromResponse };
