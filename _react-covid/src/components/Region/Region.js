import StyledRegion from "./Region.styled";
import { Sub } from "../ui/Typography";
import mask from "../../assets/img/mask.svg";
import skull from "../../assets/img/skull.svg";
import smile from "../../assets/img/smile.svg";

function Region(props) {
  const { region } = props;

  return (
    <StyledRegion>
      <div className="region">
        <div className="region__card">
          <h2 className="region__title">{region.name}</h2>

          <div className="region__container">
            <div className="region__items">
              <Sub fontColor="gray">Confirmed</Sub>
              <span style={{ color: "#06D6A0" }}>
                {region.numbers.confirmed.toLocaleString()}
              </span>
            </div>
            <img src={mask} alt="" />
          </div>
          <div className="region__container">
            <div className="region__items">
              <Sub fontColor="gray">Recovered</Sub>
              <span style={{ color: "#118AB2" }}>
                {region.numbers.recovered.toLocaleString()}
              </span>
            </div>
            <img src={smile} alt="" />
          </div>
          <div className="region__container">
            <div className="region__items">
              <Sub fontColor="gray">Death</Sub>
              <span style={{ color: "#EF476F" }}>
                {region.numbers.death.toLocaleString()}
              </span>
            </div>
            <img src={skull} alt="" />
          </div>
        </div>
      </div>
    </StyledRegion>
  );
}

export default Region;
