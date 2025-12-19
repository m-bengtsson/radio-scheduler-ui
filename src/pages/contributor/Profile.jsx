import { useState } from "react";
import BaseLayout from "../../layouts/PublicLayout.jsx";
import { contributorMenuItems } from "../../siteConfigurations.js/navigation.js";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <BaseLayout title={">Profile"} entries={contributorMenuItems}>
        {loading && <p>Loading...</p>}
        <section>
          <h4>My profile</h4>
        </section>
      </BaseLayout>
    </>
  );
};

export default Profile;
