export default function Navbar({ setPage }) {
  return (
    <div className="navbar">
      <h2 onClick={() => setPage("home")}>💊 MedAI</h2>

      <div>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("about")}>About</button>
      </div>
    </div>
  );
}