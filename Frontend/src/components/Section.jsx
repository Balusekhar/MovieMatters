import React from "react";
import Card from "./Card";

function Section({ title, movieData , trendingMovieData}) {
  const popularMovieData = Array.isArray(movieData) ? movieData.slice(0, 5) : [];
  const topRatedMovieData = Array.isArray(trendingMovieData) ? trendingMovieData.slice(0, 5) : [];

  return (
    <div className="trending ms-12 mt-12">
      <div className="flex justify-between items-center">
        <h3 className="text-white font-medium">{title}</h3>
        <h6 className="text-white me-12">See More</h6>
      </div>
      <div className="w-full flex justify-start items-center flex-wrap">
        {popularMovieData.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
        {topRatedMovieData.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Section;
