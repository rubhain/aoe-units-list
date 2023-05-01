import { createSlice } from "@reduxjs/toolkit";
import packageInfo from "../age-of-empires-units.json"

const units = packageInfo.units;

export const unitsSlice = createSlice()