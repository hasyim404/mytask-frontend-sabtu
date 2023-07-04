import Global from "../Global/Global";

import StyledGlobals from "./Globals.styled";
import { Heading, Sub } from "../ui/Typography";

function Globals(props) {
  const { globals } = props;
  return (
    <StyledGlobals>
      <div className="container">
        <div className="globals">
          <Heading>Global Situation</Heading>
          <Sub fontColor="secondary">Data Covid Berdasarkan Global</Sub>

          {/* Show Data */}
          <div className="globals__main">
            {globals.indonesia.map(function (global) {
              return <Global key={global.status} global={global} />;
            })}
          </div>
        </div>
      </div>
    </StyledGlobals>
  );
}

export default Globals;
