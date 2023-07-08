import Global from "../Global/Global";
import StyledGlobals from "./Globals.styled";
import { Heading, Sub } from "../ui/Typography";
import ENDPOINTS from "../../utils/constants/endpoints";

import { useEffect, useState } from "react";
import axios from "axios";

function Globals(props) {
  const [globals, setGlobals] = useState([]);
  const { title, sub } = props;

  useEffect(() => {
    getGlobalData();
  }, []);

  async function getGlobalData() {
    const response = await axios(ENDPOINTS.GLOBAL);

    setGlobals(response.data.global);
  }

  return (
    <StyledGlobals>
      <div className="container">
        <div className="globals">
          <Heading>{title}</Heading>
          <Sub fontColor="secondary">{sub}</Sub>
          {/* Show Data */}
          <div className="globals__main">
            {globals.map(function (global) {
              return <Global key={global.status} global={global} />;
            })}
          </div>
        </div>
      </div>
    </StyledGlobals>
  );
}

export default Globals;
