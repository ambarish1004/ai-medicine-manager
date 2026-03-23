import { useState } from "react";
import { getRecommendation } from "../api";
import AdherenceChart from "./AdherenceChart";

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
        <>
            <div className="result">
            <h3>AI Insights</h3>

            <p>
                <b>Risk:</b>{" "}
                <span className={data.risk === "High Risk" ? "high" : "low"}>
                {data.risk}
                </span>
            </p>

            <p><b>Reason:</b> {data.reason}</p>
            <p><b>Pattern:</b> {data.pattern}</p>
            <p><b>Adjustment:</b> {data.adjustment}</p>
            <p><b>Adherence Score:</b> {data.adherence_score}</p>
            <p><b>Recovery Advice:</b> {data.recovery_advice}</p>

            <p>
                <b>Conflicts:</b>{" "}
                {data.conflicts?.length ? data.conflicts.join(", ") : "None"}
            </p>

            <p>
                <b>Final Decision:</b> <br />
                <strong>{data.final_decision}</strong>
            </p>
            </div>

            {data.adherence_score !== undefined && (
            <AdherenceChart score={data.adherence_score} />
            )}
        </>
        )}
    </div>
  );
}