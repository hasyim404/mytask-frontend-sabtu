import { useEffect, useState } from "react";
import axios from "axios";

import Container from "../Container/Container";
import Button from "../ui/Button";
import StyledHero from "./Hero.styled";
import { Heading, Paragraph } from "../ui/Typography";
import Image from "../ui/Media";

const Hero = () => {
  const [movie, setMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;

  const randomResult = Math.floor(Math.random() * (19 - 0 + 1)) + 0;
  const genre = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer =
    movie && `https://youtube.com/watch?v=${movie.videos.results[0].key}`;

  console.log(`random res: ${randomResult}`);
  console.log(`random res: ${trailer}`);

  async function fetchTrendingMovie() {
    const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    const response = await axios(URL);

    return response.data.results[randomResult];
  }

  async function getDetailMovie() {
    const trendingMovie = await fetchTrendingMovie();
    const id = trendingMovie.id;

    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(URL);

    setMovie(response.data);
  }

  useEffect(() => {
    getDetailMovie();
  }, []);

  return (
    <Container>
      <StyledHero>
        <div className="hero__left">
          <Heading className="hero__title" fontColor="blue">
            {movie.title}
          </Heading>
          <h3 className="hero__genre">Genre: {genre}</h3>
          <Paragraph className="hero__description" fontColor="gray">
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
        <div className="hero__right">
          {/* <Image src={movie.Poster} rounded /> */}
          <Image
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            rounded
            alt="placeholder"
          />
          {/* <img className="hero__image" src={movie.Poster} alt="" /> */}
        </div>
      </StyledHero>
    </Container>
  );
};

export default Hero;
