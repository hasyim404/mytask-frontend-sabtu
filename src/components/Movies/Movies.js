import Movie from "../Movie/Movie";
import StyledMovies from "./Movies.styled";

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
        <h2 className="movies__title">Latest Movies</h2>
        <div className="movie__container">
          {/* Looping data movie & render, kirim */}

          {movies.map(function (movie) {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>

        {/* Tambah event on Click */}
        <button onClick={tambahFilm}>Add Movie</button>
      </section>
    </StyledMovies>
  );
};

export default Movies;
