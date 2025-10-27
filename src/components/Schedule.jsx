import { useEffect, useState } from "react";
import {
  getAllBroadcasts,
  getBroadcastsToday,
  getBroadcastById,
  addBroadcast,
  deleteBroadcast,
  addCohost,
} from "../api/broadcast-api";

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
    const getBroadcastData = async () => {
      const data = await getAllBroadcasts();

      if (data && data.length > 0) {
        setBroadcasts(data);
      }
    };
    getBroadcastData();
  }, []);

  const newBroadcast = {
    date: "2025-10-25",
    title: "Refactoring in JavaScript",
    startTime: "20:00",
    duration: "00:30:00",
    type: "Reportage",
  };

  // console.log(broadcastId);

  const handleDeleteBroadcast = () => {
    const broadcastId = broadcasts[broadcasts.length - 1].id;
    getBroadcastById(broadcastId);

    const success = deleteBroadcast(broadcastId);
    if (success) {
      setBroadcasts((prev) => prev.filter((b) => b.id !== broadcastId));
    }
  };

  const handleAddCohost = (id, name) => {
    id = broadcasts[broadcasts.length - 1].id;
    name = "Anna Andersson";

    const success = addCohost(id, name);
    if (success) {
      console.log("Cohost added", success);
    }
  };
  getBroadcastsToday();

  return (
    <>
      <h1>Schedule</h1>
      <ul>
        {broadcasts?.map((b) => (
          <li key={b.id}>
            <div>
              <span>
                {b.startTime}, {b.endTime}, Title: {b.title}, Host: {b.host},{" "}
                {b.coHost && `Cohost: ${b.coHost}`}, Guest: {b.guest}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={() => addBroadcast(newBroadcast)}>Add broadcast</button>
      <button onClick={() => handleDeleteBroadcast()}>
        Delete last broadcast
      </button>
      <button onClick={() => handleAddCohost()}>Add cohost</button>
    </>
  );
}

export default Schedule;
