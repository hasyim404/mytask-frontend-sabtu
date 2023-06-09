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

  async function fetchTrendingMovie() {
    const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    const response = await axios(URL);

    return response.data.results[0];
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

  useEffect(() => {
    async function fetchMovie() {
      // Lakukan Fetching
      const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      setMovie(data);
    }

    fetchMovie();
  }, []);

  return (
    <Container>
      <StyledHero>
        <div className="hero__left">
          <Heading className="hero__title" fontColor="blue">
            {movie.title}
          </Heading>
          <h3 className="hero__genre">Genre: {movie.Genre}</h3>
          <Paragraph className="hero__description" fontColor="gray">
            {movie.overview}
          </Paragraph>
          <Button variant="success" size="lg" fontColor="light">
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
