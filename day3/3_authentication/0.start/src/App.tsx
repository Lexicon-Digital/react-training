import "./styles/app.css";
import AppProviders from "./components/AppProviders";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <AppProviders>
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </AppProviders>
  );
}

export default App;
