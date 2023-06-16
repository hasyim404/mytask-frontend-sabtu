import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";

import data from "../utils/constants/data";
import { useState } from "react";
// import Counter from "../Counter/Counter";

const Main = () => {
  const [movies, setMovies] = useState(data);
  return (
    <main>
      {/* <Counter /> */}
      <Hero />
      <Movies title="Latest Movies" movies={movies} setMovies={setMovies} />
      <AddMovieForm movies={movies} setMovies={setMovies} />
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
