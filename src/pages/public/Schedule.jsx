import { NavLink } from "react-router";
import { useEffect, useState } from "react";
import PublicLayout from "../../layouts/PublicLayout";
import { getAllBroadcasts } from "../../api/broadcast-api";
import BroadcastList from "../../components/public/BroadcastList";

const Schedule = () => {
  const [broadcasts, setBroadcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getBroadcastData = async () => {
      const data = await getAllBroadcasts();

      if (data && data.length > 0) {
        setBroadcasts(data);
      }
      setLoading(false);
    };
    getBroadcastData();
  }, []);
  return (
    <>
      <PublicLayout>
        <h2>Broadcast schedule</h2>
        {loading && <p>Loading...</p>}
        {!loading && broadcasts.length === 0 && <p>No broadcasts found.</p>}
        {broadcasts.length > 0 && <BroadcastList broadcasts={broadcasts} />}
      </PublicLayout>
    </>
  );
};

export default Schedule;
