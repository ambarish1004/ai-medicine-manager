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
      <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})}/>
      <input placeholder="Dosage" onChange={e => setForm({...form, dosage: e.target.value})}/>
      <input placeholder="Time (HH:MM)" onChange={e => setForm({...form, time: e.target.value})}/>
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}