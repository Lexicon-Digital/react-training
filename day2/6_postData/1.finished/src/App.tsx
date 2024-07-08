import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Board from "./Board";
import { ThemeContext } from "./data/useTheme";

const queryClient = new QueryClient();

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleDark = () => {
    setIsDark((value) => !value);
  };

  return (
    <ThemeContext.Provider value={isDark}>
      <QueryClientProvider client={queryClient}>
        <Board toggleDark={toggleDark} />
      </QueryClientProvider>
    </ThemeContext.Provider>
  );
}

export default App;
