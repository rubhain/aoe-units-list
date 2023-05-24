import { createSlice } from "@reduxjs/toolkit";
import packageInfo from "../../age-of-empires-units.json"
import { IUnit } from "./types";


const initialState: IUnit[] = packageInfo.units;

export const unitsSlice = createSlice({
    name: 'units',
    initialState,
    reducers: {
        costFilter: (state,actions) => { }
    }
  })
  
export const {  } = unitsSlice.actions;
export default unitsSlice.reducer;