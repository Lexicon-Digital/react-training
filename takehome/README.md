## Take home exercise

Re-purpose the posts-API to create a React related resource collection. 

```
https://intro-lemon.vercel.app/api/posts/
{ 
    "author": 'RESOURCE', 
    "note": 
'{"url":"https://react.dev","description":"React developer resources","keyworkds":["react","javascript"]}' 
}
```

```typescript

type Filter = "RESOURCE"

type Details = {
    url: string, 
    description:string, 
    keywords:string[]
}

type Resource = {
    author: Filter
    details: Details
}

```

