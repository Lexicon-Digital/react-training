import { usePostsData } from "./data/usePostsData";
import PostBoard from "./PostBoard";

export default function Board() {
  const [posts, isLoading] = usePostsData();

  return (
    <>
      <h1>The Board</h1>
      {isLoading ? <div>loading....</div> : <PostBoard posts={posts} />}
    </>
  );
}
