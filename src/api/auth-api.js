import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5208/",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
  withCredentials: false,
});

export const login = async (email, password) => {
  try {
    const response = await instance.post(`/login`, { email, password });
    const { accessToken, expiresIn } = response.data;

    localStorage.setItem("accessToken", accessToken);
    return { accessToken, expiresIn };
  } catch (error) {
    console.error("Failed to login", error.message);
  }
};
