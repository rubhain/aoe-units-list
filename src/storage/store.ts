import { configureStore } from "@reduxjs/toolkit";
import unitsSlice  from "./units/unitsSlice";


export const store = configureStore({
    reducer:  {
        units: unitsSlice,
         },
})

