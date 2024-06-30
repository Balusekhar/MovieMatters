import { useEffect, useState } from "react";
import axios from "axios";

function useFetchMovies(url) {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url, {
          headers: {
            accept: "application/json",
            Authorization: {apiKey}
          },
        });
        setMovieData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [url]);

  return { movieData, loading, error };
}

export default useFetchMovies;
