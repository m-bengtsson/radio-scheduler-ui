import Menu from "../components/common/Menu";
import { publicMenuItems as entries } from "../siteConfigurations.js/navigation.js";
import Logo from "../assets/svg/Logo.jsx";
import Hamburger from "../components/common/Hamburger.jsx";
import { useState } from "react";

const PublicLayout = ({ children, title }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="header">
        <Hamburger open={open} setOpen={setOpen} />

        <div className="logo">
          <Logo />
        </div>

        <Menu entries={entries} open={open} />
      </header>
      <main>
        <h2 className="page-title">{title}</h2>
        {children}
      </main>
      <footer>
        <h3>Footer</h3>
      </footer>
    </>
  );
};

export default PublicLayout;
