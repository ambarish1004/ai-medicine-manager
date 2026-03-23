import AddMedicine from "./AddMedicine";
import AddFeedback from "./AddFeedback";
import Recommendation from "./Recommendation";

export default function Dashboard() {
  return (
    <div className="container">
      <h1>AI Medicine Manager</h1>

      <div className="card">
        <AddMedicine />
      </div>

      <div className="card">
        <AddFeedback />
      </div>

      <div className="card">
        <Recommendation />
      </div>
    </div>
  );
}