const BroadcastList = ({ broadcasts }) => {
  return (
    <>
      <ul>
        {broadcasts?.map((b) => (
          <li key={b.id}>
            <span>{b.title}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BroadcastList;
