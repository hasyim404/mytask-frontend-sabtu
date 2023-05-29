import { useEffect, useState } from "react";

import Container from "../Container/Container";
import Button from "../ui/Button";
import StyledHero from "./Hero.styled";
import { Heading, Paragraph } from "../ui/Typography";
import Image from "../ui/Media";

const Hero = () => {
  const [movie, setMovie] = useState("");

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
            {movie.Title}
          </Heading>
          <h3 className="hero__genre">Genre: {movie.Genre}</h3>
          <Paragraph className="hero__description" fontColor="gray">
            {movie.Plot}
          </Paragraph>
          <Button variant="success" size="lg" fontColor="light">
            Watch
          </Button>
        </div>
        <div className="hero__right">
          <Image src={movie.Poster} rounded />
          {/* <img className="hero__image" src={movie.Poster} alt="" /> */}
        </div>
      </StyledHero>
    </Container>
  );
};

export default Hero;
