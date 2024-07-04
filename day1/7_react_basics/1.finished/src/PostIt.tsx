import { PostItNote } from "./types/types";

export default function PostIt({ item }: PostItProps) {

    let likeCount = 0;
    const like = () => {
        console.log("liked")
        likeCount++;
    }

    return (
        <div style={{ border: "solid black 1px", margin: 12, padding: 12 }}>
            <div>
                <p>{item.quote} </p>
                <sub>- {item.author}</sub>
            </div>
            <div>
                <button onClick={like}>👍</button> ({likeCount})
            </div>
        </div>
    )
}

export type PostItProps = {
    item: PostItNote
}
