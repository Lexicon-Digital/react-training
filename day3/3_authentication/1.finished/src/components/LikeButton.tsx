import { useState } from "react";
import { useTotalLikes } from "../hooks/useTotalLikes";

export default function LikeButton() {
  const { totalLikes, incrementLikes } = useTotalLikes();
  const [likeCount, setLikeCount] = useState(0);

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