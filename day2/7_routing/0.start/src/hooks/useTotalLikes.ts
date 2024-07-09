import { useContext } from "react";
import { IncrementTotalLikeCountContext, TotalLikeCountContext } from "../contexts";

export const useTotalLikes = () => {
  const totalLikes = useContext(TotalLikeCountContext);
  const incrementLikes = useContext(IncrementTotalLikeCountContext);

  return {
    totalLikes,
    incrementLikes
  }
}
