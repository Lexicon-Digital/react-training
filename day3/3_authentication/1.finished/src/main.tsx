import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostBoard from "./components/PostBoard";
import CreateNote from "./components/CreateNote.tsx";
import Statistics from "./components/Statistics.tsx";
import AuthorBoard from "./components/AuthorBoard.tsx";
import { Auth0Provider } from "@auth0/auth0-react";
import Profile from "./components/Profile.tsx";
import { AuthenticationGuard, AuthenticationGuardAlternative } from "./components/AuthenticationGuard.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <PostBoard />,
      },
      {
        path: "create",
        element: <AuthenticationGuardAlternative component={CreateNote} />,
      },
      {
        path: "author/:author",
        element: <AuthenticationGuard component={AuthorBoard} />,
      },
      {
        path: "stats",
        element: <AuthenticationGuard component={Statistics} />,
      },
      {
        path: "profile",
        element: <AuthenticationGuard component={Profile} />
      }
    ],
  },
]);


const clientId = import.meta.env.VITE_AUTH_CLIENT_ID;
const domain = import.meta.env.VITE_AUTH_DOMAIN


ReactDOM.createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage"
  >
    <RouterProvider router={router} />
  </Auth0Provider>
);
