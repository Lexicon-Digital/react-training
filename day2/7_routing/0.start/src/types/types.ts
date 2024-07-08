export type PostItNote = {
  author: string;
  quote: string;
};

export type PostResponse = {
  note: string;
  author: string;
  created: string;
};

export type PostRequest = {
  note: string;
  author: string;
};

export type PostsResponse = {
  postIts: PostResponse[];
};
