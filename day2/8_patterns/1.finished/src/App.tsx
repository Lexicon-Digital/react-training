import PostBoard from "./components/PostBoard";
import "./styles/app.css";
import { usePostsData } from "./hooks/usePostsData";
import AppProviders from "./components/AppProviders";
import { Overlay } from "./components/Overlay";
import { Success } from "./components/Success";
import { Failed } from "./components/Failed";


function App() {
  const { hasContent, isError, isLoading, posts } = usePostsData();

  return (
    <AppProviders>
      {hasContent && <Overlay child={<Success />} />}
      {isError && <Overlay child={<Failed />} />}
      <h1>The Board</h1>
      {hasContent && <PostBoard posts={posts} />}
      {isLoading && <div>Loading...</div>}
      {isError && <div className="notes-error">⚠ Could not load posts</div>}
    </AppProviders>
  );
}

export default App;
