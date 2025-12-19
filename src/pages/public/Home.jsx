import { useEffect, useState } from "react";
import { getBroadcastsToday } from "../../api/broadcast-api";
import NowPlaying from "../../components/public/NowPlaying.jsx";
import PublicLayout from "../../layouts/PublicLayout.jsx";
import BroadcastRow from "../../components/public/BroadcastRow.jsx";

const Home = () => {
  const [today, setToday] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBroadcastData = async () => {
      const data = await getBroadcastsToday();

      if (data && data.length > 0) {
        const mapped = data.map((d) => d.events);

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
            <ul className="broadcast-grid">
              {today.map((b, index) => (
                <BroadcastRow b={b} key={index} />
              ))}
            </ul>
          )}
        </section>
      </PublicLayout>
    </>
  );
};

export default Home;
