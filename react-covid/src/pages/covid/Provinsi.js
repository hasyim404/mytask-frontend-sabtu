import Hero from "../../components/Hero/Hero";
import Provinces from "../../components/Provinces/Provinces";

import ENDPOINTS from "../../utils/constants/endpoints";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateProvinces } from "../../features/provincesSlices";
import provinces from "../../utils/constants/provinces";
import AddCovidForm from "../../components/AddCovidForm/AddCovidForm";

function Provinsi() {
  return (
    <div>
      <Hero />
      <Provinces
        provinces={provinces}
        title="Provinsi"
        sub="Data Covid Berdasarkan Provinsi"
      />
      <AddCovidForm />
    </div>
  );
}

export default Provinsi;
