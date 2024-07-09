import { useState } from "react";
import PostBoard from "./components/PostBoard";
import "./styles/app.css";
import { PostItNote } from "./types/types";

function App() {
  const [posts, setPosts] = useState<PostItNote[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const hasLoaded = !isLoading && !isError;


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
