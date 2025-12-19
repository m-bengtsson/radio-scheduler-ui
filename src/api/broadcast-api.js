import axios from "axios";

// TODO: Add loading state
const instance = axios.create({
  baseURL: "http://localhost:5208/api/schedule",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

const instanceWithAuth = axios.create({
  baseURL: "http://localhost:5208/api/admin/schedule",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
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
    return response.data;
  } catch (error) {
    console.error("Failed to fetch today's broadcasts", error.message);
    return [];
  }
};

export const getBroadcastById = async (id) => {
  try {
    const response = await instanceWithAuth.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch broadcast by id", error.message);
  }
};

export const addBroadcast = async (newBroadcast) => {
  try {
    const response = await instanceWithAuth.post("/", newBroadcast);
    return response.data;
  } catch (error) {
    console.error("Failed to add broadcast", error.message);
  }
};

export const deleteBroadcast = async (id) => {
  try {
    const response = await instanceWithAuth.delete(`/${id}`);
    if (response.status === 204) {
      return true;
    }

    return response.status === 204;
  } catch (error) {
    console.error("Failed to delete broadcast", error.message);
  }
};

export const rescheduleBroadcast = async (id, newDate) => {
  try {
    const response = await instanceWithAuth.patch(`/${id}`, newDate);
    return response.data;
  } catch (error) {
    console.error(
      "Failed to reschedule broadcast",
      error.message,
      error.response,
      error.request
    );
  }
};
export const addCohost = async (id, name) => {
  try {
    const response = await instanceWithAuth.patch(`/cohost/${id}`, {
      coHost: name,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("Failed to add cohost", error.message);
  }
};
export const deleteCohost = async (id) => {
  try {
    const response = await instanceWithAuth.delete(`/cohost/${id}`);
    return response.status === 204 || response.status === 200;
  } catch (error) {
    console.error("Failed to remove cohost", error.message);
  }
};

export const addGuest = async (id, name) => {
  try {
    const response = await instanceWithAuth.patch(`/guest/${id}`, {
      guest: name,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("Failed to add guest", error.message);
  }
};
export const deleteGuest = async (id) => {
  try {
    const response = await instanceWithAuth.delete(`/guest/${id}`);
    return response.status === 204 || response.status === 200;
  } catch (error) {
    console.error("Failed to remove guest", error.message);
  }
};
