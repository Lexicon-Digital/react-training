import { PostIt } from "./types/types";

export default function PostItNote({ item }: PostItProps) {
    return (
        <div className="note" key={item.author}>
            <div className="note-text">
                <p>{item.quote} </p>
            </div>
            <div className="note-author">
                <sub>- {item.author}</sub>
            </div>
        </div>
    )
}

export type PostItProps = {
    item: PostIt
}
