import Hero from "../../components/Hero/Hero";
import IndonesiaSituations from "../../components/IndonesiaSituations/IndonesiaSituations";
import Provinces from "../../components/Provinces/Provinces";

import ENDPOINTS from "../../utils/constants/endpoints";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateProvinces } from "../../features/provincesSlices";

function Indonesia() {
  // const dispatch = useDispatch();

  // async function fetchProvinces() {
  //   const response = await axios(ENDPOINTS.INDONESIA);
  //   // console.log(response);

  //   dispatch(updateProvinces(response.data.regions));
  // }

  // useEffect(function () {
  //   fetchProvinces();
  // }, []);

  return (
    <div>
      <Hero />
      <IndonesiaSituations
        title="Indonesia Situation"
        sub="Data Covid Berdasarkan Indonesia"
      />
      <Provinces
        title="Situation by Provinces"
        sub="Data Covid Berdasarkan Provinsi"
      />
    </div>
  );
}
export default Indonesia;
