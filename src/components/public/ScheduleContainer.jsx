import { useState } from "react";
import { formatTime, formatDate } from "../../utils/formatter";
const ScheduleContainer = ({ broadcasts }) => {
  // const dayType = (index) =>
  //   index === 0 ? "Today" : index === 1 ? "Tomorrow" : "";

  const dates = broadcasts.filter((b) => b.date);

  // initially render todays broadcasts

  const [selectedDay, setSelectedDay] = useState(null);
  const onDateClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <>
      <div className="schedule-container">
        <ul className="weekdays">
          {dates.map((d, index) => (
            <li
              key={index}
              className="weekday-button pushable"
              onClick={() => onDateClick(d)}
            >
              <div className="front">
                <p className="text-strong">
                  {formatDate(d.date).split(" ")[0]}
                </p>
                <p className="text-strong">
                  {formatDate(d.date).split(" ")[1]}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {selectedDay ? (
        <ul className="broadcast-grid">
          <li className="row text-bold">
            <div className="broadcast-item">
              <p>Start</p>
              <p>Title</p>

              <p>Host</p>
              <p>Guest</p>
              <p>Type</p>
            </div>
          </li>
          {selectedDay.broadcasts.map((b) => (
            <BroadcastCard b={b} />
          ))}
        </ul>
      ) : (
        <p>no broadcasts</p>
      )}
    </>
  );
};

export const BroadcastCard = ({ b }) => {
  console.log("Card: ", b);
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

export default ScheduleContainer;
