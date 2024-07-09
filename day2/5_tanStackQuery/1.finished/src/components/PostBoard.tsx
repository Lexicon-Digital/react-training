import PostIt from "./PostIt";
import { useTotalLikes } from "../hooks/useTotalLikes";
import { usePostsData } from "../hooks/usePostsData";

export default function PostBoard() {
  const { hasContent, isError, isLoading, posts } = usePostsData();

  const { totalLikes } = useTotalLikes();
  const postsCount = posts?.length ?? 0;

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div className="notes-error">⚠ Could not load posts</div>;
  }
  if (!hasContent) {
    return <></>;
  }

  return (
    <>
      <div className="post-it-stats">
        <div>
          Number of notes: <span className="chip">{postsCount}</span>
        </div>
        <div>
          Total likes: <span className="chip">{totalLikes}</span>
        </div>
      </div>
      <div className="post-it-board">
        {postsCount === 0 && <div>No posts</div>}
        {postsCount > 0 &&
          posts.map((item, index) => <PostIt key={index} item={item} />)}
      </div>
    </>
  );
}
