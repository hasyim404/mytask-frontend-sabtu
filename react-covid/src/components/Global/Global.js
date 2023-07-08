import StyledGlobal from "./Global.styled";
import Box from "../Box/Box";

function Global(props) {
  const { global } = props;
  const cond =
    global.status === "confirmed"
      ? "global__Positif"
      : global.status === "recovered"
      ? "global__Sembuh"
      : "global__Meninggal";

  return (
    <StyledGlobal>
      <Box>
        <h5 className={cond}>
          {global.status}
          <span>{global.total.toLocaleString()}</span>
        </h5>
      </Box>
    </StyledGlobal>
  );
}

export default Global;
