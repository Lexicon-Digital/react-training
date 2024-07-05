import { notFound } from "next/navigation";
import { getPostsFromResponse } from "../../_data/getPosts";
import { PostsResponse } from "../../_types/types";

export default async function Author({ params: { author } }: { params: { author: string } }) {

    if (author === "anon") {
        notFound();
    }


    const response = await fetch(`https://intro-lemon.vercel.app/api/posts/${author}`);
    const data: PostsResponse = await response.json()

    const posts = getPostsFromResponse(data)

    return (
        <>
            <div>Posts by {author}</div>
            <div>
                {
                    posts.length === 0 && <div>No posts</div>
                }
                {
                    posts.length > 0 && posts.map((item, index) => (
                        <div key={index}>
                            <div style={{ border: "solid black 1px", margin: 12, padding: 12 }}>
                                <div>
                                    <p>{item.quote} </p>
                                    <sub>- {item.author}</sub>
                                </div>
                            </div>
                        </div>)
                    )
                }
            </div>
        </>
    )
}
