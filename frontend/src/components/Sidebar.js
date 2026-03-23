export default function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <p onClick={() => setPage("add")}>➕ Add Medicine</p>
      <p onClick={() => setPage("feedback")}>📝 Add Feedback</p>
      <p onClick={() => setPage("insight")}>📊 Get Insights</p>
    </div>
  );
}