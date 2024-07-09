import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PostBoard from "./components/PostBoard";
import CreateNote from './components/CreateNote.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <PostBoard />
      },
      {
        path: "create",
        element: <CreateNote />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
