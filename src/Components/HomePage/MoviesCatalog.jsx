import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import MovieCard from "./MovieCard";
import { fetchMovies } from "../../Redux/moviesSlice";

const MoviesCatalog = () => {
  const movies = useSelector((state) => state.movies.movies);
  const status = useSelector((state) => state.movies.status);
  const error = useSelector((state) => state.movies.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMovies());
    }
  }, [status, dispatch]);

  return (
    <div>
      <h2 className="px-4 py-2 text-semibold text-secondary text-4xl">Movies:</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
        {movies.length > 0 &&
          movies.map((movie, index) => {
            return <MovieCard key={index} movie={movie} />;
          })}
      </div>
    </div>
  );
};

export default MoviesCatalog;
