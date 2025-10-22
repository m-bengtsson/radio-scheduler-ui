export const fetchBroadcasts = async () => {
  try {
    const response = await fetch("http://localhost:5208/api/schedule");
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    return [];
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
    console.error(error.message);
  }
};
