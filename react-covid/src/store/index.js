import { configureStore } from "@reduxjs/toolkit";
import provincesReducer from "../features/provincesSlices";

const store = configureStore({
  reducer: {
    provinces: provincesReducer,
  },
});

export default store;
