import PostIt from "./PostIt";
import { PostItNote } from "../types/types";

export default function PostBoard({ posts }: BoardProps) {
  let totalLikes = 0
  const postsCount = posts?.length ?? 0;

  const incrementLikes = () => {
    totalLikes = totalLikes + 1;
    console.log("The totalLikes is", totalLikes);
  };

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
              totalLikes={totalLikes}
              incrementLikes={incrementLikes}
            />
          ))}
      </div>
    </>
  );
}

type BoardProps = {
  posts: PostItNote[];
};