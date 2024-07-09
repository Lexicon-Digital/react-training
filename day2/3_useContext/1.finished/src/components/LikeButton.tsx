import { useContext, useState } from "react";
import { IncrementTotalLikeCountContext, TotalLikeCountContext } from "../contexts";

export default function LikeButton() {
  const [likeCount, setLikeCount] = useState(0);
  const totalLikes = useContext(TotalLikeCountContext);
  const incrementLikes = useContext(IncrementTotalLikeCountContext);

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