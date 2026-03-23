import { useState } from "react";
import { addMedicine } from "../api";

export default function AddMedicine() {
  const [form, setForm] = useState({
    name: "",
    dosage: "",
    time: "",
  });

  const handleSubmit = async () => {
    await addMedicine(form);
    alert("Medicine Added!");
  };

  return (
    <div>
      <h2>Add Medicine</h2>
      <input placeholder="Enter medicine name" onChange={e => setForm({...form, name: e.target.value})}/>
      <input placeholder="Dosage e.g. 500mg" onChange={e => setForm({...form, dosage: e.target.value})}/>
      <input placeholder="Time (HH:MM) e.g. 08:00" onChange={e => setForm({...form, time: e.target.value})}/>
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}