import { useState } from "react";

export default function LikeButton({ totalLikes, incrementLikes }: LikeButtonProps) {
  const [likeCount, setLikeCount] = useState(0);

  const like = () => {
    setLikeCount(likeCount + 1);
    /* or use the following */
    // setLikeCount((currentValue) => {
    //   return currentValue + 1;
    // });
    incrementLikes();
  };

  return (
    <div>
      <button className="like-button" onClick={like}>👍</button> ({likeCount}/{totalLikes})
    </div>
  );
}

export type LikeButtonProps = {
    totalLikes: number;
    incrementLikes: () => void;
  };