import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AgeFilter from "../../components/AgeFilter/AgeFilter";
import { ageFilter, getUnits } from "../../services/services";

const List = () => {
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
      </div>
      <div>
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
