import { useEffect, useState } from "react";
import axios from "axios";

import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";
import Hero from "../../components/Hero/Hero";
import { updateMovies } from "../../feature/moviesSlice";
import { useDispatch } from "react-redux";

function NowPlaying() {
  const dispatch = useDispatch();

  async function fetchNowPlaying() {
    const response = await axios(ENDPOINTS.NOW_PLAYING);

    dispatch(updateMovies(response.data.results));
  }

  useEffect(function () {
    fetchNowPlaying();
  }, []);

  return (
    <div>
      <Hero />
      <Movies title="Now Playing" />
    </div>
  );
}

export default NowPlaying;
