import { Heading, Sub } from "../ui/Typography";
import StyledRegions from "./Regions.styled";
import ENDPOINTS from "../../utils/constants/endpoints";
import Region from "../Region/Region";

import { useEffect, useState } from "react";
import axios from "axios";

function Regions() {
  const [regions, setRegion] = useState([]);

  useEffect(() => {
    getRegionData();
  }, []);

  async function getRegionData() {
    const response = await axios(ENDPOINTS.GLOBAL);
    setRegion(response.data.regions);
  }
  return (
    <StyledRegions>
      <div className="container">
        <div className="regions">
          <Heading>Situation by Regions</Heading>
          <Sub fontColor="secondary">Bacaan Pilihan Covid</Sub>

          {/* Show Data */}
          <div className="regions__main">
            {regions.map(function (region) {
              return <Region key={region.name} region={region} />;
            })}
          </div>
        </div>
      </div>
    </StyledRegions>
  );
}

export default Regions;
