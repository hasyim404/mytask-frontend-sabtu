import StyledMovie from "./Movie.styled";

const Movie = (props) => {
  // Destructing obj props
  const { movie } = props;

  return (
    <StyledMovie>
      <img className="movie__image" src={movie.poster} alt="" />
      <h3 className="movie__title">{movie.title}</h3>
      <p className="movie__type">Type: {movie.type}</p>
      <p className="movie__date">{movie.year}</p>
    </StyledMovie>
  );
};

export default Movie;
