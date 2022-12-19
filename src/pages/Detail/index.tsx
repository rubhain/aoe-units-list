import React from "react";
import { useParams, Link } from "react-router-dom";
import units from "../../age-of-empires-units.json";

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
        <ul>
          <li>ID: {showDetail?.id}</li>
          <li>Name: {showDetail?.name}</li>
          <li>Description: {showDetail?.description}</li>
          <li>Min. Required Age: {showDetail?.age}</li>
          <li>Wood Cost: {showDetail?.cost?.Wood}</li>
          <li>Food Cost: {showDetail?.cost?.Food}</li>
          <li>Gold Cost: {showDetail?.cost?.Gold}</li>
          <li>Build Time: {showDetail?.build_time}</li>
          <li>Reload Time: {showDetail?.reload_time}</li>
          <li>Hit Points: {showDetail?.hit_points}</li>
          <li>Attack: {showDetail?.attack}</li>
          <li>Accuracy: {showDetail?.accuracy}</li>
        </ul>
      </div>
    </div>
  );
};

export default Detail;
