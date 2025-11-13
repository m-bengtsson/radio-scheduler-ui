import { formatTime, formatDate } from "../../utils/formatter";
const BroadcastList = ({ broadcasts }) => {
  const dayType = (index) =>
    index === 0 ? "Today" : index === 1 ? "Tomorrow" : "";

  return (
    <>
      <ul className="broadcast-list">
        {broadcasts.map((day, index) => (
          <li key={day.date} className="broadcast-day-list">
            {broadcasts.length > 1 && (
              <>
                <p className="date row">
                  {formatDate(day.date)} <i>{dayType(index)}</i>
                </p>
              </>
            )}
            <ul className="broadcast-grid">
              {day.broadcasts.map((b) => (
                <li className="row" key={b.id}>
                  <div className="broadcast-item">
                    <p>{formatTime(b.startTime)}</p>
                    <p>{b.title}</p>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BroadcastList;
