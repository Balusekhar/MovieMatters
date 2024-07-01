import React, { useContext } from "react";
import Section from "./Section";
import useFetchMovies from "../hooks/useFetchMovies";
import { MovieContext } from "../store/MovieContext";

function Home() {
  const {
    popularMovieData,
    setPopularMovieData,
    trendingMovieData,
    setTrendingMovieData,
  } = useContext(MovieContext);

  useFetchMovies(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    setPopularMovieData
  );

  useFetchMovies(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    setTrendingMovieData
  );

  const popularMovies = Array.isArray(popularMovieData)
    ? popularMovieData.slice(0, 5)
    : [];
  const topRatedMovies = Array.isArray(trendingMovieData)
    ? trendingMovieData.slice(0, 5)
    : [];

  return (
    <>
      <Section title="Popular Movies" movies={popularMovies} />
      <Section title="Top Rated Movies" movies={topRatedMovies} />
    </>
  );
}

export default Home;
