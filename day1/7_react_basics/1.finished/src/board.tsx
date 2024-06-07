import { getPosts } from "./data/getPosts";
import PostItNote from "./postItNote";

export default function Board() {


    const postIts = getPosts();

    return (
        <>
            <div className="container">
                {
                    postIts.map((item) => <PostItNote item={item} />)
                }
            </div>
        </>
    );
}
