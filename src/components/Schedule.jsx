import { useEffect, useState } from "react";
import { fetchBroadcasts, addBroadcast } from "../api/broadcast-api";

function Schedule() {
  const [broadcasts, setBroadcasts] = useState([
    {
      id: "",
      date: "",
      title: "",
      startTime: "",
      endTime: "",
      duration: "",
      type: "",
      host: null,
      coHost: null,
      guest: null,
      studioNumber: null,
    },
  ]);

  useEffect(() => {
    const getBroadcasts = async () => {
      const data = await fetchBroadcasts();
      if (data && data.length > 0) {
        setBroadcasts(data);
      }
    };
    getBroadcasts();
  }, []);

  const newBroadcast = {
    date: "2025-10-21",
    title: "Refactoring in JavaScript",
    startTime: "20:00",
    duration: "00:30:00",
    type: "Reportage",
  };

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

  return (
    <>
      <h1>Schedule</h1>
      <ul>{renderBroadcasts}</ul>
      <button onClick={() => addBroadcast(newBroadcast)}>Add broadcast</button>
    </>
  );
}

export default Schedule;
