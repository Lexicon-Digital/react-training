import { useState } from "react";
import { PostItNote } from "./types/types";

export default function PostIt({ item, totalLikes, incrementLikes }: PostItProps) {

    const [likeCount, setLikeCount] = useState(0);
    const like = () => {
        console.log("liked");
        // setLikeCount(likeCount + 1);
        setLikeCount(currentValue => {
            return currentValue + 1;
        })
        incrementLikes()
    }

    return (
        <div style={{ border: "solid black 1px", margin: 12, padding: 12 }}>
            <div>
                <p>{item.quote} </p>
                <sub>- {item.author}</sub>
            </div>
            <div>
                <button onClick={like}>👍</button> ({likeCount}/{totalLikes})
            </div>
        </div>
    )
}

export type PostItProps = {
    item: PostItNote,
    totalLikes: number,
    incrementLikes: () => void
}
