import PostBoard from "./_components/PostBoard";
import "./styles/app.css";
import { usePostsData } from "./_hooks/usePostsData";
import AppProviders from "./_components/AppProviders";

function App() {
  const { hasContent, isError, isLoading, posts } = usePostsData();

  return (
    <AppProviders>
      {hasContent && <PostBoard posts={posts} />}
      {isLoading && <div>Loading...</div>}
      {isError && <div className="notes-error">⚠ Could not load posts</div>}
    </AppProviders>
  );
}

export default App;
