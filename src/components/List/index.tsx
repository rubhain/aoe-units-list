import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { Link, useParams } from "react-router-dom";
import units from "../../age-of-empires-units.json";
import Detail from "../Detail";
import Home from "../Home";

const List = () => {
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
      <div>List</div>

      <ul>
        {units.units.map((unit) => (
          <li key={unit.id}>
            <Link to={`/list/${unit.id}`}>{unit.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
