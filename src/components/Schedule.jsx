import { useEffect, useState } from "react";
import {
  getAllBroadcasts,
  getBroadcastsToday,
  addBroadcast,
  deleteBroadcast,
  addCohost,
  rescheduleBroadcast,
  deleteGuest,
  addGuest,
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

  const broadcastId = broadcasts[broadcasts.length - 1].id;
  // Delete broadcast
  const handleDeleteBroadcast = () => {
    const success = deleteBroadcast(broadcastId);
    if (success) {
      setBroadcasts((prev) => prev.filter((b) => b.id !== broadcastId));
    }
  };
  // Add cohost
  const handleAddCohost = async (id, name) => {
    id = broadcasts[broadcasts.length - 1].id;
    name = "Anna Andersson";

    const success = await addCohost(id, name);
    if (success) {
      console.log("Cohost added", success);
    }
  };
  // Reschedule
  const handleRescheduleBroadcast = async () => {
    const rescheduleDate = { date: "2025-10-29", startTime: "13:00:00" };

    const updatedBroadcast = await rescheduleBroadcast(
      broadcastId,
      rescheduleDate
    );

    if (updatedBroadcast) {
      console.log("Broadcast rescheduled", updatedBroadcast);
      setBroadcasts((prev) =>
        prev.map((b) => (b.id === broadcastId ? updatedBroadcast : b))
      );
    }
  };

  const handleAddGuest = async (id, name) => {
    name = "Beyonce";

    const updatedBroadcast = await addGuest(broadcastId, name);
    if (updatedBroadcast) {
      console.log("Guest added", updatedBroadcast);
    }
  };

  const handleDeleteGuest = async () => {
    const success = await deleteGuest(broadcastId);

    if (success) {
      console.log("guest removed:", success);
      setBroadcasts((prev) =>
        prev.map((b) => (b.id === broadcastId ? (b.guest = "") : b))
      );
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
                {b.date} {b.startTime} {b.endTime} Title: {b.title}{" "}
                {b.host && `Host: ${b.host}`}{" "}
                {b.coHost && `Cohost: ${b.coHost}`}{" "}
                {b.guest && ` Guest: ${b.guest}`}
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
      <button onClick={() => handleRescheduleBroadcast()}>
        Reschedule broadcast
      </button>
      <button onClick={() => handleAddGuest()}>Add guest</button>
      <button onClick={() => handleDeleteGuest(broadcastId)}>
        Remove guest
      </button>
    </>
  );
}

export default Schedule;
