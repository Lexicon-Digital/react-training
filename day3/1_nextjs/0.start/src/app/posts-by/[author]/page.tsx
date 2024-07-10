import { notFound } from "next/navigation";
import { PostsResponse } from "../../types/types";
import { PostsContainer } from "../../_components/PostsContainer";

const AuthorPosts = ({ params }: { params: { author: string } }) => {

    const author = params.author;

    return (
        <>Fetch and display posts by {author}</>

    )
}

export default AuthorPosts;


//  fetch data
// const response = await fetch(`https://intro-lemon.vercel.app/api/posts/${author}`, { cache: 'no-store' });
// const data: PostsResponse = await response.json()


// display
// <PostsContainer count={data.postIts.length} posts={data.postIts} /> 


// when no posts found
// if (data.postIts.length === 0) {
//     notFound();
// }
