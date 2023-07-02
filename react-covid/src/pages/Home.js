import { Hero } from "../components/Hero";
import Globals from "../components/Globals";
import { useState } from "react";
import Provinces from "../components/Provinces";
import AddCovidForm from "../components/AddCovidForm";
// Data
import indonesia from "../utils/constants/indonesia";
import provinsi from "../utils/constants/provinces";

function Main() {
  const [globals] = useState(indonesia);
  const [dataprov] = useState(provinsi);
  return (
    <main>
      <Hero />
      <Globals globals={globals} />
      <Provinces dataprov={dataprov} />
      <AddCovidForm dataprov={dataprov} />
    </main>
  );
}

function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Main />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
