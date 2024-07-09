import PostBoard from "./components/PostBoard";
import { getPosts } from "./data/getPosts";
import "./styles/app.css";

function App() {
  const posts = getPosts();

  return (
    <>
      <h1>The Board</h1>
      <PostBoard posts={posts} />
    </>
  );
}

export default App;
