import { NavLink } from "react-router";
import Star from "../../assets/svg/star";

const Navlinks = ({ entries }) => {
  return (
    <>
      {entries?.map((entry) => {
        return (
          <NavLink
            key={entry.index}
            to={entry.path}
            className={({ isActive }) => (isActive ? "active-page" : "")}
          >
            {({ isActive }) =>
              isActive ? (
                <>
                  <Star />
                  {entry.label}
                  <Star />
                </>
              ) : (
                entry.label
              )
            }
          </NavLink>
        );
      })}
    </>
  );
};
const Menu = ({ entries, open }) => {
  return (
    <>
      <nav className="menu">
        <Navlinks entries={entries} />
      </nav>
      <nav className={`menu-mobile ${open ? "open" : ""}`}>
        <Navlinks entries={entries} />
      </nav>
    </>
  );
};

export default Menu;
