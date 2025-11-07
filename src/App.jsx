import "./App.css";
import Schedule from "./components/admin/Schedule";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
