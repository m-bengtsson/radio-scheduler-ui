import { useForm } from "react-hook-form";

const AddBroadcastForm = ({ onAddBroadcast, setFormView }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      date: "",
      title: "",
      startTime: "",
      duration: "",
      type: "",
      host: null,
      cohost: null,
      guest: null,
    },
  });

  const onSubmit = (data) => {
    console.log("Data: ", data);
    try {
      onAddBroadcast(data);
    } catch {
      console.log("error");
    }
  };

  return (
    <div>
      <h2>New broadcast form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          {...register("title", { required: "Title is required" })}
        />
        <label>Date</label>
        <input
          type="date"
          {...register("date", { required: "Date is required" })}
        />
        <label>Start time</label>
        <input
          type="time"
          {...register("startTime", { required: "Start time is required" })}
        />
        <label>Duration hours and minutes</label>
        <input
          type="time"
          {...register("duration", { required: "Duration is required" })}
        />
        <label>Type of broadcast</label>
        <select
          name="Broadcast type"
          {...register("type", { required: "Type is required" })}
        >
          {" "}
          <option value="Default" disabled>
            Choose type
          </option>
          <option value="Reportage">Reportage</option>
          <option value="LiveSession">Livesession</option>
        </select>

        {/* if type is livesession: */}
        <fieldset>
          <legend>Livesession</legend>
          <label htmlFor="host">Host</label>
          <input type="text" {...register("host")} />

          <label htmlFor="cohost">Cohost</label>
          <input type="text" {...register("cohost")} />
          <label htmlFor="guest">Guest</label>
          <input type="text" {...register("guest")} />
        </fieldset>
        <input type="submit" />
      </form>
      <button onClick={() => setFormView(false)}>Back to schedule</button>
    </div>
  );
};

export default AddBroadcastForm;
