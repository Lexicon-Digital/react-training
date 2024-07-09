Import useState into both LikeButton.tsx and PostBoard.tsx
```ts
import { useState } from "react";
```

Update LikeButton.tsx
```ts
  const [likeCount, setLikeCount] = useState(0);

  const like = () => {
    setLikeCount(likeCount + 1);
    /* or use the following */
    // setLikeCount((currentValue) => {
    //   return currentValue + 1;
    // });
    incrementLikes();
  };
```

Update PostBoard.tsx
```ts
  const [totalLikes, setTotalLikes] = useState(0);

  const incrementLikes = () => {
    setTotalLikes(totalLikes + 1);
  };
```