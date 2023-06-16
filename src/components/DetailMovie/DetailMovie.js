import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ENDPOINTS from "../../utils/constants/endpoints";
import Container from "../Container/Container";
import StyledDetailMovie from "./DetailMovie.styled";
import { Heading, Paragraph } from "../ui/Typography";
import Button from "../ui/Button";
import Image from "../ui/Media";

function DetailMovie() {
  const params = useParams();
  const [movie, setMovie] = useState("");
  const genre = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer =
    movie && `https://youtube.com/watch?v=${movie.videos.results[0].key}`;

  async function fetchDetailMovie() {
    const response = await axios(ENDPOINTS.DETAIL(params.id));
    setMovie(response.data);
  }

  useEffect(() => {
    fetchDetailMovie();
  }, [params.id]);

  return (
    <Container>
      <StyledDetailMovie>
        <div className="detailMovie__left">
          <Heading className="detailMovie__title" fontColor="blue">
            {movie.title}
          </Heading>
          <h3 className="detailMovie__genre">Genre: {genre}</h3>
          <Paragraph className="detailMovie__description" fontColor="gray">
            {movie.overview}
          </Paragraph>
          <Button
            as="a"
            href={trailer}
            variant="success"
            size="lg"
            fontColor="light"
            target="blank"
          >
            Watch
          </Button>
        </div>
        <div className="detailMovie__right">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            rounded
            alt="placeholder"
          />
        </div>
      </StyledDetailMovie>
    </Container>
  );
}

export default DetailMovie;
