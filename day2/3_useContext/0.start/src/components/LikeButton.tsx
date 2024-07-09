import { useState } from "react";

export default function LikeButton() {
  const [likeCount, setLikeCount] = useState(0);
  const totalLikes = 0;
  const incrementLikes = () => {}

  const like = () => {
    setLikeCount(likeCount + 1);
    incrementLikes();
  };

  return (
    <div>
      <button className="like-button" onClick={like}>👍</button> ({likeCount}/{totalLikes})
    </div>
  );
}