export default function LikeButton({ totalLikes, incrementLikes }: LikeButtonProps) {
  let likeCount = 0;

  const like = () => {
    likeCount = likeCount + 1;
    console.log("The likeCount is", likeCount);
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