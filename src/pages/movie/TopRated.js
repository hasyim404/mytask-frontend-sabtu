import { useEffect, useState } from "react";
import axios from "axios";

import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";
import Hero from "../../components/Hero/Hero";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../feature/moviesSlice";

function TopRated() {
  const dispatch = useDispatch();

  async function fetchTopRated() {
    const response = await axios(ENDPOINTS.TOP_RATED);

    dispatch(updateMovies(response.data.results));
  }

  useEffect(function () {
    fetchTopRated();
  }, []);

  return (
    <div>
      <Hero />
      <Movies title="Top Rated" />
    </div>
  );
}

export default TopRated;
