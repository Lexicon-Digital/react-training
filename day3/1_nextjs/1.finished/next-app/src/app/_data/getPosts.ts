import { PostItNote, PostsResponse } from "../_types/types";

const getPostsFromResponse = (postItsResponse: PostsResponse): PostItNote[] => {
  return postItsResponse.postIts.map((postIt) => ({
    author: postIt.author,
    quote: postIt.note,
  }));
};

export { getPostsFromResponse };
