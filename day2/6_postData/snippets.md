Fill in the details of the CreateNote.tsx component

Can use a mutation from TanStack Query to make a POST request to the server

```ts
  const mutation = useMutation({
    mutationFn: async (note: PostRequest) => {
      const res = await fetch("https://intro-lemon.vercel.app/api/posts", {
        method: "post",
        body: JSON.stringify(note),
      });
      return await res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] }); // clear the cache to tell TanStack Query to fetch the posts again automatically
    },
  });
```

On submission of the form, can call the mutation like this:

```ts
await mutation.mutateAsync({ author, note });
```

Things to consider:

- Preventing the default action of submitting the form (using event.preventDefault() in the onSubmit handler)
- Making sure the data is valid before sending it (make sure the author and note values are both strings that are not empty)
- Disabling the form and button while submitting
- Resetting the form after submission