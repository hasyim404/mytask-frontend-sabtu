import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/provinces";

const provinceSlice = createSlice({
  name: "Provinces Slice",
  initialState: {
    provinces: data,
  },
  reducers: {
    addProvinces(state, action) {
      // add province to provinces
      state.provinces.push(action.payload);
    },
    updateProvinces(state, action) {
      state.provinces = action.payload;
    },
  },
});

// Generate action & reducer
const { addProvinces, updateProvinces } = provinceSlice.actions;
const provincesReducer = provinceSlice.reducer;

export { addProvinces, updateProvinces };
export default provincesReducer;
