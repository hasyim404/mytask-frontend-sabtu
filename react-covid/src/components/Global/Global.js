import StyledGlobal from "./Global.styled";

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
      <div className="global__box">
        <h5 className={cond}>
          {global.status} <span>{global.total.toLocaleString()}</span>
        </h5>
      </div>
    </StyledGlobal>
  );
}

export default Global;
