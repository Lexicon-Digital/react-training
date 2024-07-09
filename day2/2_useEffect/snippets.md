Types for API response
```ts
export type PostItResponse = {
  note: string;
  author: string;
  created: string;
};

export type PostsResponse = {
  postIts: PostItResponse[];
};
```

Fetch data in a useEffect using promise chaining
```ts
  useEffect(() => {
    fetch("https://intro-lemon.vercel.app/api/posts")
      .then((response: Response) => response.json())
      .then((data: PostsResponse) => {
        setPosts(data.postIts);
      });
  }, []);
```

Fetch data in a useEffect using promise async/await
```ts
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://intro-lemon.vercel.app/api/posts");
      const json = await response.json() as PostsResponse;
      setPosts(json.postIts);
    }
    fetchData();
  }, []);
```

Alterative to fetch data in a useEffect using promise async/await using a IIFE (Immediately Invoked Function Expression)
```ts
  useEffect(() => {
    (async () => {
      const response = await fetch("https://intro-lemon.vercel.app/api/posts");
      const json = await response.json() as PostsResponse;
      setPosts(json.postIts);
    })();
  }, []);
```

Also need to consider error and loading states

```ts
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
  ```