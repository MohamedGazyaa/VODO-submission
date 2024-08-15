import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import selectedMovieReducer from "./selectedMovieSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    selectedMovie: selectedMovieReducer
  },
});
