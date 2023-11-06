import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Movies } from "./types";
import { MoviesStateStructure } from "./types";

const initialMoviesState: MoviesStateStructure = {
  movies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialMoviesState,
  reducers: {
    loadMovies: (
      currentState: MoviesStateStructure,
      action: PayloadAction<Movies[]>,
    ): MoviesStateStructure => {
      return {
        ...currentState,
        movies: action.payload,
      };
    },
  },
});

export default moviesSlice.reducer;
