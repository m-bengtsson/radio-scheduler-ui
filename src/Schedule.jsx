import { useEffect, useState } from "react";

function Schedule() {
  const [broadcasts, setBroadcasts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5208/api/schedule")
      .then((response) => response.json())
      .then((data) => {
        setBroadcasts(data);
      });
  }, [JSON.stringify(broadcasts)]);

  const renderBroadcasts = broadcasts?.map((b) => (
    <li key={b.id}>
      <div>
        <span>
          {b.startTime}, {b.endTime}, Title: {b.title}, Host: {b.host},{" "}
          {b.coHost && `Cohost: ${b.coHost}`}, Guest: {b.guest}
        </span>
      </div>
    </li>
  ));

  // console.log(broadcasts);
  return (
    <>
      <h1>Schedule</h1>
      <ul>{renderBroadcasts}</ul>
    </>
  );
}

export default Schedule;
