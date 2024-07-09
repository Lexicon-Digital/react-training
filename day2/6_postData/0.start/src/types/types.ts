export type PostItNote = {
  author: string;
  note: string;
};

export type PostItResponse = {
  note: string;
  author: string;
  created: string;
};

export type PostsResponse = {
  postIts: PostItResponse[];
};

export type PostRequest = PostItNote;