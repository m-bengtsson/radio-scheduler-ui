import { NavLink } from "react-router";
import { useEffect, useState } from "react";
import PublicLayout from "../../layouts/PublicLayout";
import { getAllBroadcasts } from "../../api/broadcast-api";
import BroadcastTable from "../../components/public/BroadcastTable";
import { publicMenuItems } from "../../siteConfigurations.js/navigation";
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
      <PublicLayout entries={publicMenuItems}>
        {loading && <p>Loading...</p>}
        {!loading && broadcasts.length === 0 && <p>No broadcasts found.</p>}
        {broadcasts.length > 0 && <BroadcastTable broadcasts={broadcasts} />}
      </PublicLayout>
    </>
  );
};

export default Schedule;
