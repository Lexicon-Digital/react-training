import { usePostsData } from "./data/usePostsData";
import PostBoard from "./PostBoard";
import { useTheme } from "./data/useTheme";

export default function Board({ toggleDark }: { toggleDark: () => void }) {
  const [posts, isLoading] = usePostsData();
  const isDark = useTheme();

  return (
    <>
      <h1>The Board</h1>
      <input
        type="checkbox"
        id="toggle"
        checked={isDark}
        onChange={toggleDark}
      />
      <label htmlFor="toggle"> is Dark </label>
      {isLoading ? <div>loading....</div> : <PostBoard posts={posts} />}
    </>
  );
}
