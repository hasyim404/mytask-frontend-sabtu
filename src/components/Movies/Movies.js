import Movie from "../Movie/Movie";
import StyledMovies from "./Movies.styled";
import { Heading } from "../ui/Typography";

import { useSelector } from "react-redux";

const Movies = (props) => {
  const { title } = props;

  const movies = useSelector((store) => store.movies.movies);

  return (
    <StyledMovies>
      <section className="movies">
        <Heading className="movies__title" fontColor="blue">
          {title}
        </Heading>
        <div className="movie__container">
          {/* Looping data movie & render, kirim */}

          {movies.map(function (movie) {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
      </section>
    </StyledMovies>
  );
};

export default Movies;
