import { PostItNote } from "../types/types"
import PostIt from "./PostIt"

const PostsContainer = ({ count, posts }: { count: number, posts: PostItNote[] }) => {
    return (
        <div className="post-it-board">
            {count === 0 && <div>No posts</div>}
            {count > 0 &&
                posts.map((item, index) => (
                    <PostIt
                        key={index}
                        item={item}
                    />
                ))}
        </div>

    )
}
export { PostsContainer }
