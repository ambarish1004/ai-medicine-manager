import { useState } from "react";
import { getRecommendation } from "../api";

export default function Recommendation() {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await getRecommendation(id);
    setData(res);
  };

  return (
    <div>
      <h2>Smart Recommendation</h2>
      <input placeholder="Medicine ID" onChange={e => setId(e.target.value)} />
      <button onClick={fetchData}>Get Insights</button>

      {data && (
        <div style={{marginTop: "20px"}}>
            <h3>Insights</h3>
            <p><b>Risk:</b> <span style={{color: data.risk === "High Risk" ? "red" : "green"}}>{data.risk}</span></p>
            <p><b>Reason:</b> {data.reason}</p>
            <p><b>Pattern:</b> {data.pattern}</p>
            <p><b>Adjustment:</b> {data.adjustment}</p>
            <p><b>Adherence Score:</b> {data.adherence_score}</p>
            <p><b>Recovery Advice:</b> {data.recovery_advice}</p>
            <p><b>Conflicts:</b> {data.conflicts?.join(", ")}</p>
            <p><b>Final Decision:</b> <b>{data.final_decision}</b></p>
        </div>
        )}
    </div>
  );
}