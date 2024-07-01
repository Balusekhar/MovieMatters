import { useContext, useEffect, useState } from "react";
import axios from "axios";

function useFetchMovies(url, setData) {
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
            Authorization: { apiKey },
          },
        });
        setData(response.data.results);
      } catch (err) {
        setError(err);
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [url]);

  return { loading, error };
}

export default useFetchMovies;
