import Header from "../components/common/Header.jsx";
import { publicMenuItems as entries } from "../siteConfigurations.js/navigation.js";

const PublicLayout = ({ children }) => {
  return (
    <>
      <Header entries={entries} />
      <main>
        {/* <h2 className="breadcrumb">{title}</h2> */}
        {children}
      </main>
      <footer>
        <h4>Contact</h4>
      </footer>
    </>
  );
};

export default PublicLayout;
