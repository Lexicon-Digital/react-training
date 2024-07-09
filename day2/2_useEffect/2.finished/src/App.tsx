import { useEffect, useState } from "react";
import PostBoard from "./components/PostBoard";
import "./styles/app.css";
import { PostItNote, PostsResponse } from "./types/types";

function App() {
  const [posts, setPosts] = useState<PostItNote[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const hasLoaded = !isLoading && !isError;

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetch(
          "https://intro-lemon.vercel.app/api/posts?glitch=true"
        );
        const json = (await response.json()) as PostsResponse;
        setPosts(json.postIts);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>The Board</h1>
      { hasLoaded && <PostBoard posts={posts} /> }
      { isLoading && <div>Loading...</div> }
      { isError && <div className="notes-error">⚠ Could not load posts</div> }
    </>
  );
}

export default App;
