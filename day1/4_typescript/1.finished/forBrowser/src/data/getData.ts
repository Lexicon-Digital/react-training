import { postIts } from "../types/types";

const getData = async () => {
  const response = await fetch("https://intro-lemon.vercel.app/api/posts");
  const data: postIts = await response.json();

  return data.postIts;
};

export { getData };
