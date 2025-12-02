import { NavLink } from "react-router";
import { useEffect, useState } from "react";
import PublicLayout from "../../layouts/PublicLayout";
import { getAllBroadcasts } from "../../api/broadcast-api";
import BroadcastList from "../../components/public/BroadcastList";
import ScheduleContainer from "../../components/public/ScheduleContainer";

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
        {loading && <p>Loading...</p>}
        {!loading && broadcasts.length === 0 && <p>No broadcasts found.</p>}
        {broadcasts.length > 0 && <ScheduleContainer broadcasts={broadcasts} />}
      </PublicLayout>
    </>
  );
};

export default Schedule;
