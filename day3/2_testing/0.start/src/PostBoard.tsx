import PostIt from "./PostIt";
import { PostItNote } from "./types/types";

export default function PostBoard({ posts }: BoardProps) {


    const totalLikes = 0;
    const postsCount = posts?.length ?? 0;

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
                    postsCount > 0 && posts.map((item, index) => <div key={index}><PostIt item={item} /></div>)
                }
            </div>
        </>
    );
}

type BoardProps = {
    posts: PostItNote[]
}
