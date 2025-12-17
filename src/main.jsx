import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Edit from "./pages/admin/Edit.jsx";
import Home from "./pages/public/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Schedule from "./pages/public/Schedule.jsx";
import Profile from "./pages/contributor/Profile.jsx";
import Login from "./pages/public/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/admin",
        Component: Edit,
      },
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/schedule",
        Component: Schedule,
      },
      {
        path: "/contributer/profile",
        Component: Profile,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
