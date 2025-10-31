import BroadcastItem from "./BroadcastItem";

const BroadcastList = ({ broadcasts, actions }) => {
  return (
    <ul>
      {broadcasts?.map((b) => (
        // Todo: order by date and time

        <BroadcastItem key={b.id} broadcast={b} actions={actions} />
      ))}
    </ul>
  );
};

export default BroadcastList;
