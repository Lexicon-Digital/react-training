import { Link } from "react-router-dom";
import { useTotalLikes } from "../hooks/useTotalLikes";
import { usePostsData } from "../hooks/usePostsData";

export default function Header() {
  const { totalLikes } = useTotalLikes();
  const { hasContent, posts } = usePostsData();

  const postsCount = posts?.length ?? 0;

  return (
    <div className="header">
      <Link to={"/"}>Board</Link>
      <Link to={"/create"}>Create</Link>

      {hasContent && (
        <>
          <div className="header-divider"></div>
          <div>
            Notes: <span className="chip">{postsCount}</span>
          </div>
          <div>
            Likes: <span className="chip">{totalLikes}</span>
          </div>
        </>
      )}
    </div>
  );
}
