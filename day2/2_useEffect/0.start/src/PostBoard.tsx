import { useState } from "react";
import PostIt from "./PostIt";
import { PostItNote } from "./types/types";

export default function PostBoard({ posts }: BoardProps) {


    const [totalLikes, setTotalLikes] = useState(0);
    const postsCount = posts?.length ?? 0;

    const incrementLikes = () => {
        console.log("increment")
        setTotalLikes(currentValue => currentValue + 1)
    }

    return (
        <>
            <div>
                total posts: {postsCount}
            </div>
            <div>
                total likes: {totalLikes}
            </div>
            <div className="container">
                {
                    postsCount === 0 && <div>No posts</div>
                }
                {
                    postsCount > 0 && posts.map((item, index) => (
                        <div key={index}>
                            <PostIt item={item} totalLikes={totalLikes} incrementLikes={incrementLikes} />
                        </div>)
                    )
                }
            </div>
        </>
    );
}

type BoardProps = {
    posts: PostItNote[]
}
