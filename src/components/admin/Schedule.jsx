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
  deleteCohost,
} from "../../api/broadcast-api";
import BroadcastList from "./BroadcastList";
import AddBroadcastForm from "./AddBroadcastForm";

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
  const [formView, setFormView] = useState(false);

  useEffect(() => {
    const getBroadcastData = async () => {
      const data = await getAllBroadcasts();

      if (data && data.length > 0) {
        setBroadcasts(data);
      }
    };
    getBroadcastData();
  }, []);

  // Add broadcast
  const handleAddBroadcast = async (newBroadcast) => {
    const addedBroadcast = await addBroadcast(newBroadcast);
    if (addedBroadcast) {
      setBroadcasts((prev) => [...prev, addedBroadcast]);
    }
  };

  // Delete broadcast
  const handleDeleteBroadcast = (id) => {
    const deleted = deleteBroadcast(id);
    if (deleted) {
      setBroadcasts((prev) => prev.filter((b) => b.id !== id));
    }
  };

  // Reschedule
  const handleRescheduleBroadcast = async (id) => {
    const rescheduleDate = { date: "2025-10-29", startTime: "13:00:00" };

    const rescheduledBroadcast = await rescheduleBroadcast(id, rescheduleDate);

    if (rescheduledBroadcast) {
      setBroadcasts((prev) =>
        prev.map((b) => (b.id === id ? rescheduledBroadcast : b))
      );
    }
  };

  // Add cohost
  const handleAddCohost = async (id) => {
    const name = "Anna Andersson";

    const addedCohost = await addCohost(id, name);
    if (addedCohost) {
      setBroadcasts((prev) =>
        prev.map((b) => (b.id === id ? { ...b, coHost: name } : b))
      );
    }
  };
  // Remove cohost
  const handleDeleteCohost = async (id) => {
    const deleted = await deleteCohost(id);

    if (deleted) {
      setBroadcasts((prev) =>
        prev.map((b) => (b.id === id ? { ...b, coHost: null } : b))
      );
    }
  };

  // Add guest
  const handleAddGuest = async (id) => {
    const name = "Beyonce";

    const addedGuest = await addGuest(id, name);
    if (addedGuest) {
      setBroadcasts((prev) =>
        prev.map((b) => (b.id === id ? { ...b, guest: name } : b))
      );
    }
  };
  // Remove guest
  const handleDeleteGuest = async (id) => {
    const deleted = await deleteGuest(id);

    if (deleted) {
      setBroadcasts((prev) =>
        prev.map((b) => (b.id === id ? { ...b, guest: null } : b))
      );
    }
  };
  const actions = {
    onDelete: handleDeleteBroadcast,
    onAddBroadcast: handleAddBroadcast,
    onRescheduleBroadcast: handleRescheduleBroadcast,
    onAddCohost: handleAddCohost,
    onDeleteCohost: handleDeleteCohost,
    onAddGuest: handleAddGuest,
    onDeleteGuest: handleDeleteGuest,
  };
  getBroadcastsToday();

  return (
    <>
      {formView ? (
        <AddBroadcastForm
          onAddBroadcast={actions.onAddBroadcast}
          setFormView={setFormView}
        />
      ) : (
        <>
          <BroadcastList broadcasts={broadcasts} actions={actions} />
          <button onClick={() => setFormView(true)}>+ Add broadcast</button>
        </>
      )}
    </>
  );
}

export default Schedule;
