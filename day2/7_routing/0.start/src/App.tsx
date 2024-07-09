import PostBoard from "./components/PostBoard";
import "./styles/app.css";
import AppProviders from "./components/AppProviders";

function App() {
  return (
    <AppProviders>
      <h1>The Board</h1>
      <PostBoard />
    </AppProviders>
  );
}

export default App;
