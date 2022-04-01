import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Detail from "./components/Detail";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";

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
