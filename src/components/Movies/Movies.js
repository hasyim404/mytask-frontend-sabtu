import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
// data movies
import data from "../../utils/constants/data";
import { useState } from "react";
import { nanoid } from "nanoid";

const Movies = () => {
  // Variable state: movies
  const [movies, setMovies] = useState(data);

  // Fungsi tambah film
  const tambahFilm = () => {
    const movie = {
      id: nanoid(10),
      title: "Spiral Abyss",
      year: "2023",
      type: "Movie",
      poster: "https://picsum.photos/300/400",
    };

    // Tambah movie ke state movies
    // spread operator: copy and merge array
    setMovies([...movies, movie]);
  };

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          {/* Looping data movie & render, kirim */}
          {movies.map(function (movie) {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>

        {/* Tambah event on Click */}
        <button onClick={tambahFilm}>Add Movie</button>
      </section>
    </div>
  );
};

export default Movies;
