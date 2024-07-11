import { Link } from "react-router-dom";
import { useTotalLikes } from "../hooks/useTotalLikes";
import { usePostsData } from "../hooks/usePostsData";
import HeaderUser from "./HeaderUser";

export default function Header() {
  const { totalLikes } = useTotalLikes();
  const { hasContent, posts } = usePostsData();

  const postsCount = posts?.length ?? 0;

  return (
    <div className="header">
      <Link to={"/"}>Board</Link>
      <Link to={"/create"}>Create</Link>
      <Link to={"/stats"}>Stats</Link>

      <div className="header-divider"></div>
      
      {hasContent && (
        <>
          <div>
            Notes: <span className="chip">{postsCount}</span>
          </div>
          <div>
            Likes: <span className="chip">{totalLikes}</span>
          </div>
        </>
      )}

      <HeaderUser />
    </div>
  );
}
