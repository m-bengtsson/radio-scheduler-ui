const BroadcastList = ({ broadcasts }) => {
  console.log(broadcasts.map((b) => b));
  return (
    <>
      <ul>
        {broadcasts?.map((day) => (
          <div key={day.date}>
            {broadcasts?.length > 1 && <p>{day.date}</p>}
            {day.broadcasts.map((b) => (
              <li className="broadcast-item" key={b.id}>
                <p>{b.startTime}</p>
                <p>{b.title}</p>
              </li>
            ))}
          </div>
        ))}
      </ul>
    </>
  );
};

export default BroadcastList;
