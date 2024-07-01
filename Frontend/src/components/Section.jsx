// import React from "react";
import Card from "./Card";

function Section({ title, movies }) {

  console.log(movies)
  return (
    <div className="trending ms-12 mt-12 text-white">
      <div className="flex justify-between items-center">
        <h3 className="text-white font-medium">{title}</h3>
        <h6 className="text-white me-12">See More</h6>
      </div>
      <div className="w-full flex justify-start items-center flex-wrap">
        {movies && movies.length > 0 ? (
          movies.map((movie) => <Card key={movie.id} movie={movie} />)
        ) : (
          <p>No movies available.</p>
        )}
      </div>
    </div>
  );
}

export default Section;