import DetailMovie from "../../components/DetailMovie/DetailMovie";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function Detail() {
  const params = useParams();
  const [movies, setMovies] = useState([]);

  async function fetchRecom() {
    const response = await axios(ENDPOINTS.RECOMMENDATION(params.id));

    setMovies(response.data.results);
  }

  useEffect(() => {
    fetchRecom();
  }, [params.id]);

  return (
    <div>
      <DetailMovie />
      <Movies title="Recommendation" movies={movies} />
    </div>
  );
}

export default Detail;
