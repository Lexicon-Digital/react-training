import { PostItNote } from "../types/types";

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

export { getPosts };
