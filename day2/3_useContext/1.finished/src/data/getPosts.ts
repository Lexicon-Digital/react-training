import { PostItNote } from "../types/types";

const getPosts = (): PostItNote[] => {
  return [
    {
      author: "author 1",
      note: "Only call Hooks at the top level",
    },
    {
      author: "author 1",
      note: "Only call Hooks from React functions",
    },
    {
      author: "author 2",
      note: "Props and state are immutable",
    },
    {
      author: "author 2",
      note: "Side effects must run outside of render",
    },
    {
      author: "author 3",
      note: "Components and Hooks must be pure",
    },
    {
      author: "author 4",
      note: "Return values and arguments to Hooks are immutable",
    },
  ];
};

export { getPosts };
