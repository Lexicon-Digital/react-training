import PostIt from "./PostIt";
import { PostItNote } from "../types/types";
import { useTotalLikes } from "../_hooks/useTotalLikes";
import { PostsContainer } from "./PostsContainer";

export default function PostBoard({ posts }: BoardProps) {
  const { totalLikes } = useTotalLikes();
  const postsCount = posts?.length ?? 0;


  return (
    <>
      <div className="post-it-stats">
        <div>Number of notes: <span className="chip">{postsCount}</span></div>
        <div>Total likes: <span className="chip">{totalLikes}</span></div>
      </div>
      <PostsContainer count={postsCount} posts={posts} />
    </>
  );
}

type BoardProps = {
  posts: PostItNote[];
};
