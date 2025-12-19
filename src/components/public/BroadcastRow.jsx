import { formatTime } from "../../utils/formatter";

const BroadcastRow = ({ b }) => {
  return (
    <li className="row" key={b.id}>
      <div className="broadcast-item">
        <p>{formatTime(b.startTime)}</p>
        <p>{b.title}</p>
        {b.host ? <p>{b.host}</p> : <p>None</p>}
        {b.guest ? <p>{b.guest}</p> : <p>None</p>}
        <p>{b.type}</p>
      </div>
    </li>
  );
};

export default BroadcastRow;
