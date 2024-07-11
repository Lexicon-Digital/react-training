import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  Tooltip,
  Rectangle,
  ResponsiveContainer,
} from "recharts";
import { usePostsData } from "../hooks/usePostsData";
import { PostItNote } from "../types/types";
import { useNavigate } from "react-router-dom";

export default function Statistics() {
  const navigate = useNavigate();
  const { isError, isLoading, posts } = usePostsData();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div className="notes-error">⚠ Could not load posts</div>;
  }

  const postsByAuthor = posts.reduce((accumulator, post) => {
    const postsForAuthor = accumulator[post.author] ?? [];
    postsForAuthor.push(post);
    return {
      ...accumulator,
      [post.author]: postsForAuthor,
    };
  }, {} as Record<string, PostItNote[]>);

  const authors = Object.keys(postsByAuthor).sort();

  const data = authors
    .map((author) => ({
      author,
      postsCount: postsByAuthor[author].length,
    }))
    .sort((a, b) =>
      b.postsCount === a.postsCount
        ? a.author.localeCompare(b.author)
        : b.postsCount - a.postsCount
    );

  const barClicked = (data: PostItNote) => {
    navigate(`/author/${data.author}`);
  };

  return (
    <div style={{ height: "800px", width: "100%" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="author" />
          <Tooltip />
          <Bar
            dataKey="postsCount"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
            onClick={barClicked}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
