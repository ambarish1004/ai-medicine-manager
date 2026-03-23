import { useState } from "react";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [dark, setDark] = useState(true);

  return <Dashboard />;
}

export default App;