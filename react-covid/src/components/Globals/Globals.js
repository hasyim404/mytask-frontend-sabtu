import StyledGlobals from "./Globals.styled";
import Global from "../Global/Global";

function Globals(props) {
  const { globals } = props;
  return (
    <StyledGlobals>
      <div className="container">
        <div className="globals">
          <h2 className="globals__title">Indonesia</h2>
          <p className="globals__sub_title">Data Covid Berdasarkan Indonesia</p>

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
