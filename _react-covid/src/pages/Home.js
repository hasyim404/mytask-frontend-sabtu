import Hero from "../components/Hero/Hero";
import Globals from "../components/Globals/Globals";
import { useState } from "react";
import Regions from "../components/Regions/Regions";
// import Provinces from "../components/Provinces/Provinces";
// import AddCovidForm from "../components/AddCovidForm/AddCovidForm";

// Data
// import indonesia from "../utils/constants/indonesia";
// import provinsi from "../utils/constants/provinces";

function Main(props) {
  // const [dataprov] = useState(provinsi);
  return (
    <main>
      <Hero />
      <Globals title="Global Situation" sub="Data Covid Berdasarkan Global" />
      <Regions />
    </main>
  );
}

function Home() {
  return (
    <>
      <Main />
    </>
  );
}

export default Home;
