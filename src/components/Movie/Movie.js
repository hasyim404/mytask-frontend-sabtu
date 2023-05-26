import styles from "./Movie.module.css";

const Movie = (props) => {
  // Destructing obj props
  const { movie } = props;

  return (
    <div className={styles.movie}>
      <img className={styles.movie__image} src={movie.poster} alt="" />
      <h3 className={styles.movie__title}>{movie.title}</h3>
      <p className={styles.movie__type}>Type: {movie.type}</p>
      <p className={styles.movie__date}>{movie.year}</p>
    </div>
  );
};

export default Movie;
