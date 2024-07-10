import { notFound } from "next/navigation";
import { PostsResponse } from "../../types/types";
import PostIt from "../../_components/PostIt";
import PostBoard from "../../_components/PostBoard";

export default async function Author({ params: { author } }: { params: { author: string } }) {

    if (author === "anon") {
        notFound();
    }


    const response = await fetch(`https://intro-lemon.vercel.app/api/posts/${author}`, { cache: 'no-store' });
    const data: PostsResponse = await response.json()


    return (
        <div className="post-it-board">
            {data.postIts.length === 0 && <div>No posts</div>}
            {data.postIts.length > 0 &&
                data.postIts.map((item, index) => (
                    <PostIt
                        key={index}
                        item={item}
                    />
                ))}
        </div>

    )
}
