import BroadcastList from "../../components/public/BroadcastList";
import { useEffect, useState } from "react";
import { getBroadcastsToday } from "../../api/broadcast-api";

import PublicLayout from "../../layouts/PublicLayout.jsx";

const Home = () => {
  const [broadcasts, setBroadcasts] = useState([]);

  useEffect(() => {
    const getBroadcastData = async () => {
      const data = await getBroadcastsToday();

      if (data && data.length > 0) {
        setBroadcasts(data);
      }
    };
    getBroadcastData();
  }, []);

  return (
    <>
      <PublicLayout>
        <h2>Today</h2>
        <BroadcastList broadcasts={broadcasts} />
      </PublicLayout>
    </>
  );
};

export default Home;
