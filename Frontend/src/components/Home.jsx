import React from "react";
import Section from "./Section";
import useFetchMovies from "../hooks/useFetchMovies";

function Home() {
  const { movieData } = useFetchMovies(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
  );

  const { movieData: trendingMovieData } = useFetchMovies(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
  );

  return (
    <>
      <Section title="Popular" movieData={movieData?.results || []} />
      <Section title="Trending" movieData={trendingMovieData?.results}/>
    </>
  );
}

export default Home;
