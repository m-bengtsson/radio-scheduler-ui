import PublicLayout from "../../layouts/PublicLayout.jsx";
import { useState } from "react";

const Login = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <PublicLayout title={">Login"}>
        {loading && <p>Loading...</p>}
        <section>
          <h4>Login</h4>
        </section>
      </PublicLayout>
    </>
  );
};

export default Login;
