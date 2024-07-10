import { useState } from "react";
import {
  IncrementTotalLikeCountContext,
  TotalLikeCountContext,
} from "../contexts";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const [totalLikes, setTotalLikes] = useState(0);
  const incrementLikes = () => {
    setTotalLikes(totalLikes + 1);
  };

  return (
    <TotalLikeCountContext.Provider value={totalLikes}>
      <IncrementTotalLikeCountContext.Provider value={incrementLikes}>
        {children}
      </IncrementTotalLikeCountContext.Provider>
    </TotalLikeCountContext.Provider>
  );
}
