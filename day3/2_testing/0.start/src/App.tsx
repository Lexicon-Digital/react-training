import PostBoard from './PostBoard'
import { getPosts } from './data/getPosts'

function App() {

  const posts = getPosts()

  return (
    <>
      <h1>The Board</h1>
      <PostBoard posts={posts} />
    </>
  )
}

export default App
