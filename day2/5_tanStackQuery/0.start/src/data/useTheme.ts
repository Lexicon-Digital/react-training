import { createContext, useContext } from "react";

export const ThemeContext = createContext<boolean>(false);

export const useTheme = () => useContext(ThemeContext);