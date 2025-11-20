const Hamburger = ({ open, setOpen }) => {
  const opened = open ? "opened" : "";
  return (
    <button className="hamburger" onClick={() => setOpen(!open)}>
      <div className={opened} />
      <div className={opened} />
      <div className={opened} />
    </button>
  );
};

export default Hamburger;
