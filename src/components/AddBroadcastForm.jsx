const AddBroadcastForm = ({ onAddBroadcast, setFormView }) => {
  const newBroadcast = {
    date: "2025-10-25",
    title: "Refactoring in JavaScript",
    startTime: "20:00",
    duration: "00:30:00",
    type: "Reportage",
  };
  return (
    <div>
      <h2>New broadcast form</h2>
      <label></label>

      <button onClick={() => onAddBroadcast(newBroadcast)}>
        Add broadcast
      </button>
      <button onClick={() => setFormView(false)}>Back to schedule</button>
    </div>
  );
};

export default AddBroadcastForm;
