import "./App.css";
import Schedule from "./components/Schedule";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
