import Menu from "../components/common/Menu";
import { publicMenuItems as entries } from "../siteConfigurations.js/navigation.js";

const PublicLayout = (props) => {
  return (
    <>
      <header>
        <h1>Star radio</h1>
        <Menu entries={entries} />
      </header>
      <main>{props.children}</main>
      <footer>
        <h3>Footer</h3>
      </footer>
    </>
  );
};

export default PublicLayout;
