import "./App.css";
import "./styles/Hamburger.css";
import "./styles/Menu.css";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
