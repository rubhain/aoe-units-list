import { stringify } from "querystring";
import React from "react";
import { useParams, Link, useLocation, Route } from "react-router-dom";
import units from "../../age-of-empires-units.json";
import List from "../List";

const Detail = () => {
  const { id } = useParams();

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
      <div>Detail {id}</div>
    </div>
  );
};

export default Detail;
