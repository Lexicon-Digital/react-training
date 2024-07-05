import { createContext, useEffect, useState } from 'react';
import PostBoard from './PostBoard';
import { getPostsFromResponse } from './data/getPosts';
import { PostItNote, PostsResponse } from './types/types';


export const ThemeContext = createContext<boolean>(false);

function App() {


  const [isDark, setIsDark] = useState(false);
  const [posts, setPosts] = useState<PostItNote[]>([]);

  useEffect(() => {
    fetch("https://intro-lemon.vercel.app/api/posts")
      .then((response: Response) => response.json())
      .then((data: PostsResponse) => {
        setPosts(getPostsFromResponse(data))
      })
  }, [])


  const toggleDark = () => {
    setIsDark(value => !value)
  }
  // show props drilling...
  return (
    <ThemeContext.Provider value={isDark}>
      <h1>The Board</h1>
      <input type="checkbox" id="toggle" checked={isDark} onChange={toggleDark} /><label htmlFor="toggle"> is Dark </label>
      <PostBoard posts={posts} />
    </ThemeContext.Provider>
  )
}

export default App
