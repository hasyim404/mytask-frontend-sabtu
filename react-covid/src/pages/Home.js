import Hero from "../components/Hero/Hero";
import Globals from "../components/Globals/Globals";
import { useState } from "react";
// import Provinces from "../components/Provinces/Provinces";
// import AddCovidForm from "../components/AddCovidForm/AddCovidForm";

// Data
import indonesia from "../utils/constants/indonesia";
// import provinsi from "../utils/constants/provinces";

function Main() {
  const [globals] = useState(indonesia);
  // const [dataprov] = useState(provinsi);
  return (
    <main>
      <Hero />
      <Globals globals={globals} />
      {/* <Provinces dataprov={dataprov} />
      <AddCovidForm dataprov={dataprov} /> */}
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
