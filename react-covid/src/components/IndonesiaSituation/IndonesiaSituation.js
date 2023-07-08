import StyledIndonesiaSituation from "./IndonesiaSituation.styled";
import Box from "../Box/Box";

function IndonesiaSituation(props) {
  const { data } = props;
  const cond =
    data.status === "confirmed"
      ? "indonesia__Positif"
      : data.status === "recovered"
      ? "indonesia__Sembuh"
      : "indonesia__Meninggal";

  return (
    <StyledIndonesiaSituation>
      <Box>
        <h5 className={cond}>
          {data.status}
          <span>{data.total.toLocaleString()}</span>
        </h5>
      </Box>
    </StyledIndonesiaSituation>
  );
}

export default IndonesiaSituation;
