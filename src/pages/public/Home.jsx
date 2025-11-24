import BroadcastList from "../../components/public/BroadcastList";
import { useEffect, useState } from "react";
import { getBroadcastsToday } from "../../api/broadcast-api";
import NowPlaying from "../../components/common/NowPlaying.jsx";
import PublicLayout from "../../layouts/PublicLayout.jsx";

const Home = () => {
  const [broadcasts, setBroadcasts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBroadcastData = async () => {
      const data = await getBroadcastsToday();

      if (data && data.length > 0) {
        setBroadcasts(data);
      }
      setLoading(false);
    };
    getBroadcastData();
  }, []);

  return (
    <>
      <PublicLayout title={">Home"}>
        <NowPlaying />
        {loading && <p>Loading...</p>}
        <section>
          <h4>Todays schedule</h4>
          {!loading && broadcasts.length === 0 && <p>No broadcasts found.</p>}
          {broadcasts.length > 0 && <BroadcastList broadcasts={broadcasts} />}
        </section>
      </PublicLayout>
    </>
  );
};

export default Home;
