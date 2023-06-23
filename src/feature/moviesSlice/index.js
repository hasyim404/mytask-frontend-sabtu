import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/data";

// Buat slicee
const movieSlice = createSlice({
  name: "Movies Slice",
  initialState: {
    movies: data,
  },
  reducers: {
    addMovies(state, action) {},
  },
});

// Generate Acition & Reducer
const { addMovies } = movieSlice.actions;
const moviesReducer = movieSlice.reducer;

export { addMovies };
export default moviesReducer;
