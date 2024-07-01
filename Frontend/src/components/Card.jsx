import React from "react";

const Card = ({ movie }) => {
  const baseURL = "https://image.tmdb.org/t/p/w500";
  const posterURL = movie?.poster_path
    ? `${baseURL}${movie.poster_path}`
    : "https://placehold.co/600x400?text=MovieMatters";

  const voteAverage = movie?.vote_average
    ? movie.vote_average.toFixed(1)
    : "N/A";

  return (
    <div className="relative w-72 h-80 me-4 mt-6 overflow-hidden rounded-lg shadow-lg group">
      <img
        src={posterURL}
        alt={movie?.title || "Movie Poster"}
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
        <div className="text-white">
          <h3 className="text-lg font-bold">{movie?.title || "No Title"}</h3>
          <div className="flex justify-between items-center mt-1">
            <p className="text-sm">
              Release Date: {movie?.release_date || "Unknown"}
            </p>
            <span className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold text-green-900 bg-green-300 rounded-full">
              {voteAverage}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;