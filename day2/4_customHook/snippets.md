The usePostsDate custom hook is a wrapper around loading the posts data on mount

```ts
  const [posts, setPosts] = useState<PostItNote[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const hasContent = !isLoading && !isError;

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetch(
          "https://intro-lemon.vercel.app/api/posts?glitch=true"
        );
        const json = (await response.json()) as PostsResponse;
        setPosts(json.postIts);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return {
    posts, isLoading, isError, hasContent
  }
```


The useTotalLikes custom hook is a wrapper around consuming the context for total likes and increment total likes

```ts
  const totalLikes = useContext(TotalLikeCountContext);
  const incrementLikes = useContext(IncrementTotalLikeCountContext);

  return {
    totalLikes,
    incrementLikes
  }
```