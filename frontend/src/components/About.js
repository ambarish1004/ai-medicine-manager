export default function About() {
  return (
    <div>
      <h2>About Project</h2>

      <p>
        AI Medicine Manager is a smart healthcare assistant designed to improve
        medication adherence using artificial intelligence.
      </p>

      <div className="card">
        <h3>Features</h3>
        <ul>
          <li>✔ Risk prediction</li>
          <li>✔ Adherence score</li>
          <li>✔ Smart scheduling</li>
          <li>✔ Recovery suggestions</li>
          <li>✔ Conflict detection</li>
        </ul>
      </div>

      <div className="card">
        <h3>Developed By</h3>
        <p>Final Year Computer Engineering Project</p>
        <p>Using FastAPI + React</p>
      </div>
    </div>
  );
}