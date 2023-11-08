import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Movies, MoviesStateStructure } from "./types";

const initialMoviesState: MoviesStateStructure = {
  movies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialMoviesState,
  reducers: {
    loadMovies: (
      currentState,
      action: PayloadAction<Movies[]>,
    ): MoviesStateStructure => ({
      ...currentState,
      movies: action.payload,
    }),

    toggleWatchedMovie: (
      currentState,
      action: PayloadAction<number>,
    ): MoviesStateStructure => ({
      ...currentState,
      movies: currentState.movies.map((movie) => ({
        ...movie,
        isWatched:
          movie.id === action.payload ? !movie.isWatched : movie.isWatched,
      })),
    }),
  },
});

export const {
  loadMovies: loadMoviesActionCreator,
  toggleWatchedMovie: toggleWatchedMovieActionCreator,
} = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;
