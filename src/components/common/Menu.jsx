import { NavLink } from "react-router";

const Menu = ({ entries }) => {
  return (
    <>
      <nav className="public-nav">
        {entries?.map((entry) => (
          <NavLink key={entry.index} to={entry.path}>
            {entry.label}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default Menu;
