import packageInfo from "../age-of-empires-units.json";

const units = packageInfo.units;
export function getUnits() {
  const unitList = units;
  return unitList;
}

export function ageFilter(unitAge: string) {
  let ageFilteredUnit = getUnits().filter((unit) => unit.age === unitAge);
  return ageFilteredUnit;
}

export const buttons = [
  {
    name: "All",
    value: "all",
  },
  {
    name: "Dark",
    value: "Dark",
  },
  {
    name: "Feudal",
    value: "Feudal",
  },
  {
    name: "Castle",
    value: "Castle",
  },
  {
    name: "Imperial",
    value: "Imperial",
  },
];
