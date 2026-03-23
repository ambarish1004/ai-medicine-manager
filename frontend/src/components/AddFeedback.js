import { useState } from "react";
import { addFeedback } from "../api";

export default function AddFeedback() {
  const [form, setForm] = useState({
    medicine_id: "",
    taken_on_time: "",
    delay_minutes: "",
    side_effects: "",
  });

  const handleSubmit = async () => {
    await addFeedback(form);
    alert("Feedback Added!");
  };

  return (
    <div>
      <h2>Add Feedback</h2>
      <input placeholder="Medicine ID" onChange={e => setForm({...form, medicine_id: Number(e.target.value)})}/>
      <input placeholder="Taken on time (1/0)" onChange={e => setForm({...form, taken_on_time: Number(e.target.value)})}/>
      <input placeholder="Delay (minutes)" onChange={e => setForm({...form, delay_minutes: Number(e.target.value)})}/>
      <input placeholder="Side effects (1/0)" onChange={e => setForm({...form, side_effects: Number(e.target.value)})}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}