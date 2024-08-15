import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectMovie } from "../../Redux/selectedMovieSlice";

const MovieCard = ({ movie }) => {

    const dispatch = useDispatch();

  return (
    <Link to={"/movies/" + movie.id} className="bg-gray-50 rounded-2xl" onClick={()=>dispatch(selectMovie(movie))}>
      <div className=" bg-gray-50 flex mb-1 overflow-hidden">
        {movie?.poster && (
          <img
            className="rounded-xl w-full h-full object-cover"
            src={movie.poster}
            alt=""
          />
        )}
      </div>
      <div className="mt-2 px-4 py-2">
        <h2 className="font-bold">
          {movie.title} ({movie.year})
        </h2>
        <h3 className="mt-1 text-md text-gray-600 ">{movie.plot}</h3>
      </div>
    </Link>
  );
};

export default MovieCard;
