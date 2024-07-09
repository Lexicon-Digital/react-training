export const usePostsData = () => {
  // TODO: Implement the posts data to be a state that is set by data fetched from the API in a useEffect
  // Implement the isLoading, isError and hasContent as well, based on the data fetching
  // See the usage of this hook in App.tsx

  const posts = [];
  const isLoading = false;
  const isError = true;
  const hasContent = false;

  return {
    posts,
    isLoading,
    isError,
    hasContent,
  };
};
