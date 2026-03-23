import AddMedicine from "./AddMedicine";
import AddFeedback from "./AddFeedback";
import Recommendation from "./Recommendation";

export default function Dashboard() {
  return (
    <div className="container">
      <div className="header">
        <h1>💊 AI Medicine Manager</h1>
        <p>Smart insights for better medication adherence</p>
      </div>

      <div className="grid">
        <div className="left">
          <div className="card">
            <h2>Add Medicine</h2>
            <AddMedicine />
          </div>

          <div className="card">
            <h2>Add Feedback</h2>
            <AddFeedback />
          </div>
        </div>

        <div className="right">
          <div className="card">
            <h2>Smart Recommendation</h2>
            <Recommendation />
          </div>
        </div>
      </div>
    </div>
  );
}