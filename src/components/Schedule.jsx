import { useEffect, useState } from "react";

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
      host: "",
      coHost: "",
      guest: "",
    },
  ]);
  const fetchBroadcasts = async () => {
    try {
      const response = await fetch("http://localhost:5208/api/schedule");
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      setBroadcasts(result);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchBroadcasts();
  }, []);

  const newBroadcast = {
    date: "2025-10-21",
    title: "Make a post",
    startTime: "20:00",
    duration: "00:30:00",
    type: "Reportage",
  };
  // Add broadcast
  const addBroadcast = async (newBroadcast) => {
    try {
      const response = await fetch("http://localhost:5208/api/schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBroadcast),
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
    } catch (error) {
      console.error(error.message);
    }
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
