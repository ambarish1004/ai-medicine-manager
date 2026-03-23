import AddMedicine from "./AddMedicine";
import AddFeedback from "./AddFeedback";
import Recommendation from "./Recommendation";

export default function Dashboard() {
  return (
    <div className="container">
      <h1>Medicine Manager</h1>

      <div className="card">
        {/* <h2>Add Medicine</h2> */}
        <AddMedicine />
      </div>

      <div className="card">
        {/* <h2>Add Feedback</h2> */}
        <AddFeedback />
      </div>

      <div className="card">
        {/* <h2>Smart Recommendation</h2> */}
        <Recommendation />
      </div>
    </div>
  );
}