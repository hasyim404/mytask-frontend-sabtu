import { useEffect, useState } from "react";
import axios from "axios";

import Movies from "../../components/Movies/Movies";

function PopulerMovies() {
  const [movies, setMovies] = useState([]);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  async function fetchPopularMovies() {
    const response = await axios(URL);

    setMovies(response.data.results);
  }

  useEffect(function () {
    fetchPopularMovies();
  }, []);

  return (
    <div>
      {/* <h2>Populer Movies</h2> */}
      <Movies movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default PopulerMovies;
