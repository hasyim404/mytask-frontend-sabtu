import { useEffect, useState } from "react";
import axios from "axios";

import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";
import Hero from "../../components/Hero/Hero";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../feature/moviesSlice";

function PopulerMovies() {
  const dispatch = useDispatch();

  useEffect(function () {
    fetchPopularMovies();
  }, []);

  async function fetchPopularMovies() {
    const response = await axios(ENDPOINTS.POPULAR);

    dispatch(updateMovies(response.data.results));
  }

  return (
    <div>
      <Hero />
      <Movies title="Popular" />
    </div>
  );
}

export default PopulerMovies;
