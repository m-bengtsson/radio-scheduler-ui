import { useState } from "react";
import PublicLayout from "../../layouts/PublicLayout.jsx";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <PublicLayout title={">Profile"}>
        {loading && <p>Loading...</p>}
        <section>
          <h4>My profile</h4>
        </section>
      </PublicLayout>
    </>
  );
};

export default Profile;
