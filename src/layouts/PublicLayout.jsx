import Menu from "../components/common/Menu";
import { publicMenuItems as entries } from "../siteConfigurations.js/navigation.js";

const PublicLayout = ({ children, title }) => {
  return (
    <>
      <header>
        <h1>Star radio</h1>
        <Menu entries={entries} />
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
