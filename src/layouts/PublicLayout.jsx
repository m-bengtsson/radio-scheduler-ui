import Header from "../components/common/Header.jsx";

const PublicLayout = ({ children, title }) => {
  return (
    <>
      <Header />
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
