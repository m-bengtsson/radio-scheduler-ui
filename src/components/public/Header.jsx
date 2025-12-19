import Menu, { Navlinks } from "./Menu.jsx";
import Logo from "../../assets/svg/Logo.jsx";
import Hamburger from "./Hamburger.jsx";
import { useState } from "react";
import { NavLink } from "react-router";
import { logout } from "../../api/auth-api.js";

const Header = ({ entries }) => {
  const [open, setOpen] = useState(false);

  const isLoggedIn = !!localStorage.getItem("accessToken");

  return (
    <header className="header">
      <Hamburger open={open} setOpen={setOpen} />

      <div className="logo">
        <Logo height={60} />
      </div>

      <Menu entries={entries} open={open} />

      {isLoggedIn ? (
        <button onClick={logout} className="login-link">
          Logout
        </button>
      ) : (
        <NavLink to="/login" className="login-link">
          Login
        </NavLink>
      )}
    </header>
  );
};
export default Header;
