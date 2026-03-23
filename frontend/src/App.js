import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import AddMedicine from "./components/AddMedicine";
import AddFeedback from "./components/AddFeedback";
import Recommendation from "./components/Recommendation";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "about":
        return <About />;
      case "add":
        return <AddMedicine />;
      case "feedback":
        return <AddFeedback />;
      case "insight":
        return <Recommendation />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar setPage={setPage} />
      <div className="layout">
        <Sidebar setPage={setPage} />
        <div className="content">{renderPage()}</div>
      </div>
    </div>
  );
}

export default App;