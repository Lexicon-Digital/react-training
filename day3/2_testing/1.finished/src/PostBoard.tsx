import { useEffect, useState } from "react";
import PostIt from "./PostIt";
import { PostItNote } from "./types/types";

export default function PostBoard({ posts }: BoardProps) {


    const [totalLikes, setTotalLikes] = useState(0);
    const [searchTerm, setSearchTerm] = useState<string>("")
    const postsCount = posts?.length ?? 0;

    useEffect(() => {
        console.log("USE EFFECT")
        document.title = `Post board (${totalLikes})`;
    }, [totalLikes]) // try changing this deps array


    const incrementLikes = () => {
        console.log("increment")
        setTotalLikes(currentValue => currentValue + 1)
    }

    const search = (event: React.FormEvent<HTMLInputElement>) => {
        console.log(`search for: ${event.currentTarget.value}`)
        setSearchTerm(event.currentTarget.value)
    }

    return (
        <>
            <div>
                total posts: <div>{postsCount}</div>
            </div>
            <div>
                total likes: <span data-testid="like-count">{totalLikes}</span>
            </div>
            <div> <input type="text" placeholder="search" value={searchTerm} onChange={search}></input></div>
            <div className="container">
                {
                    postsCount === 0 && <div>No posts</div>
                }
                {
                    postsCount > 0 && posts.filter((item) => item.quote.indexOf(searchTerm) > -1).map((item, index) => (
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
