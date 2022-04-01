import { stringify } from "querystring";
import React from "react";
import { useParams, Link, useLocation, Route } from "react-router-dom";
import units from "../../age-of-empires-units.json";
import List from "../List";
import ReactObjectTableViewer from "react-object-table-viewer";

const Detail = () => {
  const { id } = useParams();
  const showDetail = units.units.find((unit) => unit.id === Number(id));

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
      <div>
        <ReactObjectTableViewer data={showDetail} />
      </div>
    </div>
  );
};

export default Detail;
