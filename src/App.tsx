import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import List from "./pages/List";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <div className="App">
      {""}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/units" element={<List />}></Route>
        <Route path="/units/:id" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
