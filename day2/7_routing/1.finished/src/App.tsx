import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeContext } from "./data/useTheme";
import { Outlet, Link } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleDark = () => {
    setIsDark((value) => !value);
  };

  return (
    <ThemeContext.Provider value={isDark}>
      <QueryClientProvider client={queryClient}>
        <Link to={"/"}>Board</Link>{' '}
        <Link to={"/create"}>Create</Link>
        <input
          type="checkbox"
          id="toggle"
          checked={isDark}
          onChange={toggleDark}
        />
        <label htmlFor="toggle"> is Dark </label>
        <Outlet />
      </QueryClientProvider>
    </ThemeContext.Provider>
  );
}

export default App;
