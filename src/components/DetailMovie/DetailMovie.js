import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DetailMovie() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const params = useParams();
  const [movie, setMovie] = useState("");

  async function fetchDetailMovie() {
    const URL = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(URL);
    setMovie(response.data);
  }

  useEffect(() => {
    fetchDetailMovie();
  }, [params.id]);

  return (
    <div>
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt=""
      ></img>
    </div>
  );
}

export default DetailMovie;
