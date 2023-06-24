import DetailMovie from "../../components/DetailMovie/DetailMovie";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../feature/moviesSlice";

function Detail() {
  const params = useParams();
  const dispatch = useDispatch();

  async function fetchRecom() {
    const response = await axios(ENDPOINTS.RECOMMENDATION(params.id));

    dispatch(updateMovies(response.data.results));
  }

  useEffect(() => {
    fetchRecom();
  }, [params.id]);

  return (
    <div>
      <DetailMovie />
      <Movies title="Recommendation" />
    </div>
  );
}

export default Detail;
