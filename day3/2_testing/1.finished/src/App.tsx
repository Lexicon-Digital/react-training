import { useEffect, useState } from 'react';
import PostBoard from './PostBoard';
import { getPosts } from './data/getPosts';
import { PostItNote } from './types/types';



function App() {

  const [posts, setPosts] = useState<PostItNote[]>([]);

  useEffect(() => {
    getPosts().then((data: PostItNote[]) => setPosts(data))
  }, [])


  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch("https://intro-lemon.vercel.app/api/posts");
  //     const json = await response.json();
  //     const postsData = getPostsFromResponse(json);
  //     setPosts(postsData);
  //   }
  //   fetchData();
  // }, []);

  return (
    <>
      <h1>The Board</h1>
      <PostBoard posts={posts} />
    </>
  )
}

export default App
