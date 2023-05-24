import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import List from "./pages/List";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { Button, ButtonGroup } from "@mui/material";

function App() {
  return (
    <div className="App">
      <div className="w3-bar  ">
        <span className="w3-bar-item w3-mobile w3-right">
          <ButtonGroup
            variant="text"
            aria-label="text button group"
            size="large"
          >
            <Button href="/">Home</Button> <Button href="/units">Units</Button>
          </ButtonGroup>
        </span>
      </div>
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
