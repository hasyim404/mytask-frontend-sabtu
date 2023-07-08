import StyledProvinces from "./Provinces.styled";
import Province from "../Province/Province";
import { Heading, Sub } from "../ui/Typography";

import ENDPOINTS from "../../utils/constants/endpoints";
import { useEffect, useState } from "react";
import axios from "axios";

function Provinces(props) {
  const [provinces, setProvinces] = useState([]);

  const { title, sub } = props;
  const titles = ["Provinsi", "Positif", "Sembuh", "Dirawat", "Meninggal"];

  async function fetchProvinces() {
    const response = await axios(ENDPOINTS.INDONESIA);
    // console.log(response.data.regions);

    setProvinces(response.data.regions);
  }

  useEffect(function () {
    fetchProvinces();
  }, []);

  return (
    <StyledProvinces>
      <div className="container">
        <div className="provinces">
          <Heading>{title}</Heading>
          <Sub fontColor="secondary">{sub}</Sub>

          {/* Table */}
          <div className="provinces__table">
            <table>
              <thead>
                <tr>
                  <th className="provinces__no">No</th>
                  {titles.map((titles) => {
                    return <th key={titles}>{titles}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {provinces.map(function (province, index) {
                  return (
                    <Province
                      key={province.name}
                      index={index}
                      province={province}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </StyledProvinces>
  );
}

export default Provinces;
