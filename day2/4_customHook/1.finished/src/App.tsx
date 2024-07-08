import { useState } from 'react';
import PostBoard from './PostBoard';
import { usePostsData } from './data/usePostsData';
import { ThemeContext } from './data/useTheme';


function App() {

  const [isDark, setIsDark] = useState(false);
  const [posts, isLoading] = usePostsData()



  const toggleDark = () => {
    setIsDark(value => !value)
  }
  // show props drilling...
  return (
    <ThemeContext.Provider value={isDark}>
      <h1>The Board</h1>
      <input type="checkbox" id="toggle" checked={isDark} onChange={toggleDark} /><label htmlFor="toggle"> is Dark </label>
      {isLoading ? <div>loading....</div> : <PostBoard posts={posts} />}
    </ThemeContext.Provider>
  )
}

export default App
