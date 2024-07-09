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