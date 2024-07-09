import { useState } from "react";
import PostBoard from "./components/PostBoard";
import { getPosts } from "./data/getPosts";
import "./styles/app.css";
import {
  TotalLikeCountContext,
  IncrementTotalLikeCountContext,
} from "./contexts";

function App() {
  const posts = getPosts();

  const [totalLikes, setTotalLikes] = useState(0);

  const incrementLikes = () => {
    setTotalLikes(totalLikes + 1);
  };

  return (
    <TotalLikeCountContext.Provider value={totalLikes}>
      <IncrementTotalLikeCountContext.Provider value={incrementLikes}>
        <h1>The Board</h1>
        <label htmlFor="toggle"> is Dark </label>
        <PostBoard posts={posts} />
      </IncrementTotalLikeCountContext.Provider>
    </TotalLikeCountContext.Provider>
  );
}

export default App;
