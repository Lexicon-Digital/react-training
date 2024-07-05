import { useContext } from "react";
import { usePostsData } from "./data/usePostsData";
import PostBoard from "./PostBoard";
import { ThemeContext } from "./context";

export default function Board({ toggleDark }: { toggleDark: () => void }) {
  const { posts, isLoading, create, isSaving } = usePostsData();
  const isDark = useContext(ThemeContext);

  const createNote: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const postItNote = {
      author: event.currentTarget.author.value,
      quote: event.currentTarget.quote.value,
    };
    event.currentTarget.reset();
    await create(postItNote);
  };

  return (
    <>
      <h1>The Board</h1>
      <input
        type="checkbox"
        id="toggle"
        checked={isDark}
        onChange={toggleDark}
      />
      <label htmlFor="toggle"> is Dark </label>
      {isLoading ? <div>loading....</div> : <PostBoard posts={posts} />}

      <div>
        <form onSubmit={createNote}>
          <input type="text" id="author" placeholder="Author" />
          <input type="text" id="quote" placeholder="Quote" />
          <button type="submit" disabled={isLoading || isSaving}>
            Save Quote
          </button>
        </form>
      </div>
    </>
  );
}
