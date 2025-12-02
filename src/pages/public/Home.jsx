import BroadcastList from "../../components/public/BroadcastList";
import { useEffect, useState } from "react";
import { getBroadcastsToday } from "../../api/broadcast-api";
import NowPlaying from "../../components/common/NowPlaying.jsx";
import PublicLayout from "../../layouts/PublicLayout.jsx";
import ScheduleContainer, {
  BroadcastCard,
} from "../../components/public/ScheduleContainer.jsx";

const Home = () => {
  const [today, setToday] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBroadcastData = async () => {
      const data = await getBroadcastsToday();

      if (data && data.length > 0) {
        const mapped = data.map((d) => d.broadcasts);

        console.log("mapped", mapped);
        setToday(mapped.flat());
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
          {!loading && today.length === 0 && <p>No broadcasts found.</p>}
          {today.length > 0 && (
            <ul>
              {today.map((b) => (
                <BroadcastCard b={b} />
              ))}
            </ul>
          )}
        </section>
      </PublicLayout>
    </>
  );
};

export default Home;
