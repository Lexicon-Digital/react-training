```sh
npm install react-router-dom
```

Update main.tsx to render <RouterProvider router={router} /> instead of <App />
Create a browser router with the following:
```ts
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
```


Update App.tsx to remove the <PostBoard /> and have <Outlet /> instead (imported from react-router-dom)

Add some Links to the App.tsx (imported from react-router-dom)
```jsx
<Link to={"/"}>Board</Link>
<Link to={"/create"}>Create</Link>
```