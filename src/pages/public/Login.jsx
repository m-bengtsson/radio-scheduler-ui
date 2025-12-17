import { useNavigate } from "react-router";
import { login } from "../../api/auth-api.js";
import PublicLayout from "../../layouts/PublicLayout.jsx";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (e) => {
    setLoading(true);
    const isAuthenticated = await login(e.email, e.password);

    console.log("log: ", isAuthenticated);

    if (isAuthenticated) {
      navigate("/admin/schedule");
    } else {
      setErrorMessage("Invalid email or password");
    }

    setLoading(false);
  };

  return (
    <>
      <PublicLayout title={">Login"}>
        {loading && <p>Loading...</p>}
        <section className="login-section">
          <h4>Login</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              {...register("email", { required: "Email is required" })}
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required" })}
            />
            <br />
            <button type="submit">Login</button>
          </form>
          <p>{errorMessage}</p>
        </section>
      </PublicLayout>
    </>
  );
};

export default Login;
