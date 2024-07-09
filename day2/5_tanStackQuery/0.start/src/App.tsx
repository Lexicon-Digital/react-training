import PostBoard from "./components/PostBoard";
import "./styles/app.css";
import { usePostsData } from "./hooks/usePostsData";
import AppProviders from "./components/AppProviders";

function App() {
  const { hasContent, isError, isLoading, posts } = usePostsData();
  
  return (
    <AppProviders>
      <h1>The Board</h1>
      {hasContent && <PostBoard posts={posts} />}
      {isLoading && <div>Loading...</div>}
      {isError && <div className="notes-error">⚠ Could not load posts</div>}
    </AppProviders>
  );
}

export default App;
