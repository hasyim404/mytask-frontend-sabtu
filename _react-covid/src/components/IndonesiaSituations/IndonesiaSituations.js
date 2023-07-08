import IndonesiaSituation from "../IndonesiaSituation/IndonesiaSituation";
import StyledIndonesiaSituations from "./IndonesiaSituations.styled";
import { Heading, Sub } from "../ui/Typography";
import ENDPOINTS from "../../utils/constants/endpoints";

import { useEffect, useState } from "react";
import axios from "axios";

function IndonesiaSituations(props) {
  const [indonesia, setIndonesia] = useState([]);
  const { title, sub } = props;

  useEffect(() => {
    getIndonesiaData();
  }, []);

  async function getIndonesiaData() {
    const response = await axios(ENDPOINTS.INDONESIA);

    setIndonesia(response.data.indonesia);
  }

  return (
    <StyledIndonesiaSituations>
      <div className="container">
        <div className="globals">
          <Heading>{title}</Heading>
          <Sub fontColor="secondary">{sub}</Sub>
          {/* Show Data */}
          <div className="globals__main">
            {indonesia.map(function (data) {
              return <IndonesiaSituation key={data.status} data={data} />;
            })}
          </div>
        </div>
      </div>
    </StyledIndonesiaSituations>
  );
}

export default IndonesiaSituations;
