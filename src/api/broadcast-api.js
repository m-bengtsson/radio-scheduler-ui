import axios from "axios";

// TODO: Add loading state
const instance = axios.create({
  baseURL: "http://localhost:5208/api/schedule",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export const getAllBroadcasts = async () => {
  try {
    const response = await instance.get("/");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch broadcasts", error.message);
    return [];
  }
};

export const getBroadcastsToday = async () => {
  try {
    const response = await instance.get("/today");
    console.log("Broadcasts today:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch today's broadcasts", error.message);
    return [];
  }
};

export const getBroadcastById = async (id) => {
  try {
    const response = await instance.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch broadcast by id", error.message);
  }
};

export const addBroadcast = async (newBroadcast) => {
  try {
    const response = await instance.post("/", newBroadcast);
    console.log("Added broadcast:", response.data);
  } catch (error) {
    console.error("Failed to add broadcast", error.message);
  }
};

export const deleteBroadcast = async (id) => {
  try {
    const response = await instance.delete(`/${id}`);
    return response.status === 204;
    // console.log("Deleted broadcast:", response.data);
  } catch (error) {
    console.error("Failed to delete broadcast", error.message);
  }
};

// TODO:
// Reschedule broadcast
// Remove and add cohost
// Remove and add guest
