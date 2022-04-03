import { Button, Slider, Checkbox, Box } from "@mui/material";
import { type } from "@testing-library/user-event/dist/type";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import packageInfo from "../../age-of-empires-units.json";
import Detail from "../Detail";
import Home from "../Home";
import { ageFilter, buttons, getUnits } from "../../services/services";
const units = packageInfo.units;

const List = () => {
  const unitList = units;
  const [ageFilteredUnit, setAgeFilteredUnit] = useState<any>();
  useEffect(() => {
    setAgeFilteredUnit(getUnits());
  }, []);

  function handleUnit(e: any) {
    let ageUnit = e.target.value;
    ageUnit !== "all"
      ? setAgeFilteredUnit(ageFilter(ageUnit))
      : setAgeFilteredUnit(getUnits());
  }
  const [value, setValue] = React.useState<number[]>([0, 20]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

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
        <h1>List </h1>
        <h3>Ages</h3>
        <>
          {buttons &&
            buttons.map((type, index) => (
              <>
                <button key={index} value={type.value} onClick={handleUnit}>
                  {type.name}
                </button>
              </>
            ))}

          {ageFilteredUnit &&
            ageFilteredUnit.map((unit: any) => (
              <ul key={unit.id}>
                <li>
                  <Link to={`/list/${unit.id}`}>
                    {unit.id} {unit.name} {unit.age} Gold:{unit.cost?.Gold},
                    Wood:
                    {unit.cost?.Wood},Food:{unit.cost?.Food}
                  </Link>
                </li>
              </ul>
            ))}
        </>
      </div>
    </div>
  );
};

export default List;
