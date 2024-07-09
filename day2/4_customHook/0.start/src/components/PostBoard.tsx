import PostIt from "./PostIt";
import { PostItNote } from "../types/types";
import { useTotalLikes } from "../hooks/useTotalLikes";

export default function PostBoard({ posts }: BoardProps) {
  const { totalLikes } = useTotalLikes();
  const postsCount = posts?.length ?? 0;

  return (
    <>
      <div className="post-it-stats">
        <div>Number of notes: <span className="chip">{postsCount}</span></div>
        <div>Total likes: <span className="chip">{totalLikes}</span></div>
      </div>
      <div className="post-it-board">
        {postsCount === 0 && <div>No posts</div>}
        {postsCount > 0 &&
          posts.map((item, index) => (
            <PostIt
              key={index}
              item={item}
            />
          ))}
      </div>
    </>
  );
}

type BoardProps = {
  posts: PostItNote[];
};
