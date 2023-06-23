import { useEffect, useState } from "react";
import axios from "axios";

import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";
import Hero from "../../components/Hero/Hero";

function TopRated() {
  const [movies, setMovies] = useState([]);

  async function fetchTopRated() {
    const response = await axios(ENDPOINTS.TOP_RATED);

    setMovies(response.data.results);
  }

  useEffect(function () {
    fetchTopRated();
  }, []);

  return (
    <div>
      <Movies title="Top Rated" movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default TopRated;
