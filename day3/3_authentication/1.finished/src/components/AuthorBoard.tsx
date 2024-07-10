import { useParams } from "react-router-dom";
import { usePostsData } from "../hooks/usePostsData";
import PostIt from "./PostIt";

export default function AuthorBoard() {
    const params = useParams();
    const { hasContent, isError, isLoading, posts } = usePostsData(params.author);
  
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
        <div className="post-it-board">
          {postsCount === 0 && <div>No posts</div>}
          {postsCount > 0 &&
            posts.map((item, index) => <PostIt key={index} item={item} />)}
        </div>
      </>
    );
}