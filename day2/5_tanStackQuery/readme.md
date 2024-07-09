Steps to install TanStack Query

```sh
npm install @tanstack/react-query
```

Remove the useStates and useEffect in the usePostsData hook
Add a useQuery for the same endpoint

Don't change the return values names, just map the useQuery return values to the usePostsData return value

We need to provide a context for react query. Since we already have a AppProviders component, we can add it here.
Create a QueryClient in the root of the file (so it is a single instance on import, not re-created whenever it is rendered).
Add the <QueryClientProvider client={queryClient}> to the JSX

Since we are loading the usePostsData hook currently in App.tsx, it will fail to load the data as we are calling it before the context is provided.

Refactor the PostBoard.tsx to remove the posts prop and instead load the props from usePostsData.
Will need a bit of a refactor as well to keep the loading and error messages
