import { useEffect, useState } from "react";

import Container from "../Container/Container";
import Button from "../ui/Button";
import StyledHero from "./Hero.styled";

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
          <h2 className="hero__title">{movie.Title}</h2>
          <h3 className="hero__genre">Genre: {movie.Genre}</h3>
          <p className="hero__description">{movie.Plot}</p>
          {/* <button className=hero__button}>Watch</button> */}
          <Button variant="success" size="lg">
            Watch
          </Button>
        </div>
        <div className="hero__right">
          <img className="hero__image" src={movie.Poster} alt="" />
        </div>
      </StyledHero>
    </Container>
  );
};

export default Hero;
