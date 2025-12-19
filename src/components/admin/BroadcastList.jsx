import BroadcastItem from "./BroadcastItem";

const BroadcastList = ({ broadcasts, actions }) => {
  const flattenedBroadcasts = broadcasts.flatMap((b) =>
    b.events.map((inner) => ({
      ...inner,
      date: b.date,
    }))
  );
  return (
    <ul>
      {flattenedBroadcasts?.map((b) => (
        // Todo: order by date and time

        <BroadcastItem key={b.id} broadcast={b} actions={actions} />
      ))}
    </ul>
  );
};

export default BroadcastList;
