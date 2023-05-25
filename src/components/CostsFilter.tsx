import { Box, Checkbox, Slider } from "@mui/material";
import { useState } from "react";

function CostsFilter() {
  const [value, setValue] = useState<number[]>([14, 50]);
  const [isActive, setIsActive] = useState<boolean>(true);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    console.log(value, isActive);
  };

  return (
    <div>
      <Box sx={{ width: 300, display: "flex" }}>
        <Box sx={{ width: 50 }}>
          <Checkbox
            value={isActive}
            onChange={() => {
              setIsActive(!isActive);
            }}
          />
        </Box>
        <Box sx={{ width: 200 }}>
          <Slider
            min={0}
            max={200}
            step={1}
            disabled={isActive}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
          />
        </Box>
      </Box>
    </div>
  );
}

export default CostsFilter;
