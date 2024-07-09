import { PostItNote } from "../types/types";
import LikeButton, { LikeButtonProps } from "./LikeButton";

export default function PostIt({
  item,
  totalLikes,
  incrementLikes,
}: PostItProps) {
  return (
    <div className="post-it">
      <p className="post-it_note">{item.note}</p>
      <div className="post-it_footer">
        <sub>- {item.author}</sub>
        <LikeButton totalLikes={totalLikes} incrementLikes={incrementLikes} />
      </div>
    </div>
  );
}

export type PostItProps = LikeButtonProps & {
  item: PostItNote;
};
