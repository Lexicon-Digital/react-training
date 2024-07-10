import { createContext } from "react";

export const TotalLikeCountContext = createContext<number>(0);

export const IncrementTotalLikeCountContext = createContext<() => void>(() => {});