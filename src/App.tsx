import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> - <Link to="/list">List</Link>
      </nav>
      <Home />
    </div>
  );
}

export default App;
