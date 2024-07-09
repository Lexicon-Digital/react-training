Create contexts.ts
```ts
import { createContext } from "react";

export const TotalLikeCountContext = createContext<number>(0);

export const IncrementTotalLikeCountContext = createContext<() => void>(() => {});
```

Provide both contexts in App.tsx
Create a state for totalLikes and an incrementLikes function that increases the totalLikes state
```ts
<TotalLikeCountContext.Provider value={totalLikes}>
    <IncrementTotalLikeCountContext.Provider value={incrementLikes}>
        ... existing JSX content
    </IncrementTotalLikeCountContext.Provider>
</TotalLikeCountContext.Provider>
```



Consume TotalLikeCountContext context in PostBoard.tsx
```ts
const totalLikes = useContext(TotalLikeCountContext);
```

Consume both contexts in LikeButton.tsx

```ts
  const totalLikes = useContext(TotalLikeCountContext);
  const incrementLikes = useContext(IncrementTotalLikeCountContext);
```