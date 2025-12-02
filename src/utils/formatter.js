export const formatTime = (timeString) => {
  return timeString.slice(0, 5);
};

export const formatDate = (dateString) => {
  if (!dateString) return "";

  const date = new Date(dateString);

  const options = { weekday: "short", day: "2-digit", month: "2-digit" };

  const formatted = date.toLocaleDateString("en-GB", options);

  return formatted.replace(",", "");
};
