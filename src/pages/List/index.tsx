import React, { useEffect, useState } from "react";
import CostsFilter from "../../components/CostsFilter";
import { Button, ButtonGroup } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function List() {
  const [ageSelection, setAgeSelection] = useState("All");
  const [ageFilter, setAgeFilter] = useState([]);

  const navigate = useNavigate();

  const units = useSelector((state: any) => state.units);
  const ageArray = Array.from(
    new Set<string[]>(units.map((item: any) => item.age))
  );

  const setInitial = () => {
    setAgeFilter(units);
  };

  useEffect(() => {
    if (ageSelection !== "All") {
      setAgeFilter(units.filter((item: any) => item.age === ageSelection));
    } else {
      setInitial();
    }
  }, [ageSelection]);

  return (
    <div>
      <div>
        <ButtonGroup variant="contained" aria-label="outlined button group">
          <Button
            onClick={() => {
              setAgeSelection("All");
            }}
          >
            All
          </Button>
          {ageArray.map((item: any) => (
            <Button
              key={item}
              onClick={() => {
                setAgeSelection(item);
              }}
            >
              {item}
            </Button>
          ))}
        </ButtonGroup>
      </div>
      <CostsFilter />
      <ul>
        {ageFilter.map((item: any) => (
          <li key={item.id} onClick={() => navigate("/units/" + item.id)}>
            {item.id},{item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
