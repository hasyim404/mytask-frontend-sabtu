import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import Button from "../ui/Button";

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
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>{movie.Title}</h2>
          <h3 className={styles.hero__genre}>Genre: {movie.Genre}</h3>
          <p className={styles.hero__description}>{movie.Plot}</p>
          {/* <button className={styles.hero__button}>Watch</button> */}
          <Button variant="success">Watch</Button>
        </div>
        <div className={styles.hero__right}>
          <img className={styles.hero__image} src={movie.Poster} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
