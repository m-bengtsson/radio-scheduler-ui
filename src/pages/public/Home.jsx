import BroadcastList from "../../components/public/BroadcastList";
import { useEffect, useState } from "react";
import { getAllBroadcasts } from "../../api/broadcast-api";
import Menu from "../../components/public/Menu";
import { publicMenuItems } from "../../siteConfigurations.js/navigation.js";

const Home = () => {
  const [broadcasts, setBroadcasts] = useState([]);

  useEffect(() => {
    const getBroadcastData = async () => {
      const data = await getAllBroadcasts();

      if (data && data.length > 0) {
        setBroadcasts(data);
      }
    };
    getBroadcastData();
  }, []);

  return (
    <>
      <Menu entries={publicMenuItems} />
      <h1>Home</h1>
      <BroadcastList broadcasts={broadcasts} />
    </>
  );
};

export default Home;
