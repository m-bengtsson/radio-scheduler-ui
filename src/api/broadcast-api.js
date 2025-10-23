export const getAllBroadcasts = async () => {
  try {
    const response = await fetch("http://localhost:5208/api/schedule");
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch broadcasts", error.message);
    return [];
  }
};

export const getBroadcastsToday = async () => {
  try {
    const response = await fetch("http://localhost:5208/api/schedule/today");
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Failed to fetch today's broadcasts", error.message);
    return [];
  }
};

export const getBroadcastById = async (id) => {
  try {
    const response = await fetch(`http://localhost:5208/api/schedule/${id}`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Failed to fetch broadcast by id", error.message);
  }
};

export const addBroadcast = async (newBroadcast) => {
  try {
    const response = await fetch("http://localhost:5208/api/schedule", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBroadcast),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
  } catch (error) {
    console.error("Failed to add broadcast", error.message);
  }
};

export const deleteBroadcast = async (id) => {
  try {
    const response = await fetch(`http://localhost:5208/api/schedule/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
  } catch (error) {
    console.error("Failed to delete broadcast", error.message);
  }
};
