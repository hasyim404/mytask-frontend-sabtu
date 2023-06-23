import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";

const Main = () => {
  return (
    <main>
      <Hero />
      <Movies title="Latest Movies" />
      {/* <AddMovieForm movies={movies} setMovies={setMovies} /> */}
    </main>
  );
};

const Home = () => {
  return (
    <div>
      <Main />
    </div>
  );
};

export default Home;
