const BroadcastList = ({ broadcasts, actions }) => {
  return (
    <ul>
      {broadcasts?.map((b) => (
        <li key={b.id}>
          <div>
            <span>
              {b.date} {b.startTime} {b.endTime} Title: {b.title}{" "}
              {b.host && `Host: ${b.host}`} {b.coHost && `Cohost: ${b.coHost}`}{" "}
              {b.guest && ` Guest: ${b.guest}`}
            </span>
          </div>
          <button onClick={() => actions.onDelete(b.id)}>
            Delete broadcast
          </button>
          <button onClick={() => actions.onAddCohost(b.id)}>Add cohost</button>
          <button onClick={() => actions.onDeleteCohost(b.id)}>
            Remove cohost
          </button>
          <button onClick={() => actions.onRescheduleBroadcast(b.id)}>
            Reschedule broadcast
          </button>
          <button onClick={() => actions.onAddGuest(b.id)}>Add guest</button>
          <button onClick={() => actions.onDeleteGuest(b.id)}>
            Remove guest
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BroadcastList;
