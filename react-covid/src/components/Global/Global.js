import StyledGlobal from "./Global.styled";
import { Box, Status, Total } from "../ui/Box";

function Global(props) {
  const { global } = props;
  const cond =
    global.status === "Positif"
      ? "global__Positif"
      : global.status === "Sembuh"
      ? "global__Sembuh"
      : "global__Meninggal";

  return (
    <StyledGlobal>
      <Box>
        <Status fontColor="black" className={cond}>
          {global.status} <Total>{global.total.toLocaleString()}</Total>
        </Status>
      </Box>
    </StyledGlobal>
  );
}

export default Global;
