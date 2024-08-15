import React from "react";
import { useSelector } from "react-redux";

const DetailsPage = () => {

    const movie = useSelector((state)=>state.selectedMovie.details);

  return (
    <div className="mt-4 bg-gray-50 -mx-8 p-8">
      <div className="p-2">
        <h1 className="text-4xl">{movie.title}</h1>
        <div className="flex mt-1 gap-1 ">
          <span>({movie.year})</span>
          <span>{movie.runtime}min.</span>
        </div>
      </div>
      <div className="w-3/5 h-96 overflow-hidden rounded-xl">
          <img
            className=" w-full h-full object-cover"
            src={movie.poster}
            alt=""
          />
      </div>
      <div className="mt-6 p-4">
        <h2 className="font-semibold text-secondary text-2xl px-1">Description</h2>
        <p className="my-3 px-4 text-gray-600">{movie.plot}</p>
      </div>
      <div className="mt-2 p-4">
        <div >
          <span className="font-semibold">Release year:</span> {movie.year}
        </div>
        <div>
          <span className="font-semibold">Genre:</span> {movie.genre.join(', ')}
        </div>
        <div>
          <span className="font-semibold">Director:</span> {movie.director}
        </div>
        <div>
          <span className="font-semibold">Production:</span> {movie.production}
        </div>
        <div>
          <span className="font-semibold">Cast:</span> {movie.actors.join(', ')}
        </div>
        <div>
          <span className="font-semibold">Awards:</span> {movie.awards}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
