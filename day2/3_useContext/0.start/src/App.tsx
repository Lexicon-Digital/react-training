import { useState } from "react";
import PostBoard from "./components/PostBoard";
import { getPosts } from "./data/getPosts";
import "./styles/app.css";

function App() {
  const posts = getPosts();

  const [totalLikes, setTotalLikes] = useState(0);

  const incrementLikes = () => {
    setTotalLikes(totalLikes + 1);
  };

  return (
    <>
      <h1>The Board</h1>
      <label htmlFor="toggle"> is Dark </label>
      <PostBoard posts={posts} />
    </>
  );
}

export default App;
