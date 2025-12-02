import Menu from "./Menu";
import { publicMenuItems as entries } from "../../siteConfigurations.js/navigation.js";
import Logo from "../../assets/svg/Logo.jsx";
import Hamburger from "../../components/common/Hamburger.jsx";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <Hamburger open={open} setOpen={setOpen} />

      <div className="logo">
        <Logo height={60} />
      </div>

      <Menu entries={entries} open={open} />
    </header>
  );
};
export default Header;
