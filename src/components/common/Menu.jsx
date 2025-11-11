import { NavLink, useLocation } from "react-router";

const Menu = ({ entries }) => {
  const location = useLocation();
  return (
    <>
      <nav className="public-nav">
        {entries?.map((entry) => {
          const isActive = location.pathname === entry.path;
          return (
            <NavLink
              key={entry.index}
              to={entry.path}
              className={isActive ? "active-page" : ""}
            >
              {entry.label}
            </NavLink>
          );
        })}
      </nav>
    </>
  );
};

export default Menu;
