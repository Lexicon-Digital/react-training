import { PostItNote } from "../types/types";
import LikeButton from "./LikeButton";
import "../styles/app.css";
import Link from "next/link";

export default function PostIt({ item }: PostItProps) {
  return (
    <div className="post-it">
      <p className="post-it_note">{item.note}</p>
      <div className="post-it_footer">
        <sub>{item.author}</sub>
        <LikeButton />
      </div>
    </div>
  );
}

export type PostItProps = {
  item: PostItNote;
};
