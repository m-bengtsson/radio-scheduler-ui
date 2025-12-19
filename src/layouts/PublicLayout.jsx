import Header from "../components/public/Header.jsx";

const BaseLayout = ({ children, entries }) => {
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

export default BaseLayout;
