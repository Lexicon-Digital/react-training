import { useState } from "react";
import {
  IncrementTotalLikeCountContext,
  TotalLikeCountContext,
} from "../contexts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <TotalLikeCountContext.Provider value={totalLikes}>
        <IncrementTotalLikeCountContext.Provider value={incrementLikes}>
          {children}
        </IncrementTotalLikeCountContext.Provider>
      </TotalLikeCountContext.Provider>
    </QueryClientProvider>
  );
}
