const BroadcastItem = ({ broadcast, actions }) => {
  const { date, startTime, endTime, type, title, host, coHost, guest, id } =
    broadcast;
  return (
    <li key={id}>
      <div>
        <span>
          {date} {startTime} {endTime} {type} Title: {title}{" "}
          {host && `Host: ${host}`} {coHost && `Cohost: ${coHost}`}{" "}
          {guest && ` Guest: ${guest}`}
        </span>
      </div>
      <button onClick={() => actions.onDelete(id)}>Delete broadcast</button>
      <button onClick={() => actions.onRescheduleBroadcast(id)}>
        Reschedule broadcast
      </button>
      {type === "LiveSession" && (
        <>
          <button onClick={() => actions.onAddCohost(id)}>Add cohost</button>
          <button onClick={() => actions.onDeleteCohost(id)}>
            Remove cohost
          </button>
          <button onClick={() => actions.onAddGuest(id)}>Add guest</button>
          <button onClick={() => actions.onDeleteGuest(id)}>
            Remove guest
          </button>
        </>
      )}
    </li>
  );
};

export default BroadcastItem;
