import { PostIt } from "../types/types";

const getPosts = (): PostIt[] => {
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
