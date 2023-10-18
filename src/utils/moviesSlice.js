import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "name",
  initialState: {},
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});


export const { addNowPlayingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;