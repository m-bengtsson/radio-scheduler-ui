import { useState } from "react";
import { formatDate } from "../../utils/formatter.js";
import BroadcastRow from "./BroadcastRow.jsx";

// TODO
// initially render todays broadcasts

const BroadcastTable = ({ broadcasts }) => {
  const dates = broadcasts.filter((b) => b.date);
  const [selectedDay, setSelectedDay] = useState(null);

  const onDateClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <>
      <div className="schedule-container">
        <ul className="weekdays">
          {dates.map((d) => (
            <li
              key={d.date}
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
          <ul className="broadcast-grid">
            {selectedDay.events.map((b, index) => (
              <BroadcastRow b={b} key={index} />
            ))}
          </ul>
        </ul>
      ) : (
        <p>no broadcasts</p>
      )}
    </>
  );
};

export default BroadcastTable;
