import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Trending from "./components/Trending";
import { useState } from "react";
import { MovieContext } from "./store/MovieContext";

function App() {
  const [popularMovieData, setPopularMovieData] = useState([]);
  const [trendingMovieData, setTrendingMovieData] = useState([]);

  return (
    <div className="w-full min-h-screen bg-black pb-12 overflow-hidden">
      <MovieContext.Provider
        value={{
          popularMovieData,
          setPopularMovieData,
          trendingMovieData,
          setTrendingMovieData,
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </MovieContext.Provider>
    </div>
  );
}

export default App;
