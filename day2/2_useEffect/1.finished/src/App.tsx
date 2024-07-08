import { useEffect, useState } from 'react';
import PostBoard from './PostBoard';
import { getPostsFromResponse } from './data/getPosts';
import { PostItNote, PostsResponse } from './types/types';



function App() {

  const [posts, setPosts] = useState<PostItNote[]>([]);

  useEffect(() => {
    fetch("https://intro-lemon.vercel.app/api/posts")
      .then((response: Response) => response.json())
      .then((data: PostsResponse) => {
        setPosts(getPostsFromResponse(data))
      })
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
