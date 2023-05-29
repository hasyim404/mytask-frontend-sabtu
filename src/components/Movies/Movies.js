import Movie from "../Movie/Movie";
import StyledMovies from "./Movies.styled";
import { Heading } from "../ui/Typography";
import Button from "../ui/Button";

// data movies
// import data from "../../utils/constants/data";
import { nanoid } from "nanoid";

const Movies = (props) => {
  const { movies, setMovies } = props;

  // Fungsi tambah film
  const tambahFilm = () => {
    const movie = {
      id: nanoid(10),
      title: "Test_Image",
      year: "2023",
      type: "Movie",
      poster: "https://picsum.photos/300/400",
    };

    // Tambah movie ke state movies
    // spread operator: copy and merge array
    setMovies([...movies, movie]);
  };

  return (
    <StyledMovies>
      <section className="movies">
        <Heading className="movies__title" fontColor="blue">
          Latest Movies
        </Heading>
        <div className="movie__container">
          {/* Looping data movie & render, kirim */}

          {movies.map(function (movie) {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>

        {/* Tambah event on Click */}
        <Button onClick={tambahFilm} size="sm">
          Add Movie
        </Button>
      </section>
    </StyledMovies>
  );
};

export default Movies;
