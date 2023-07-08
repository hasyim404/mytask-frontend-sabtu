import { Link } from "react-router-dom";

import StyledHero from "./Hero.styled";
import hero_img from "../../assets/img/hero_img.svg";
import { Heading, Sub, Desc } from "../ui/Typography";
import Button from "../ui/Button";
import Image from "../ui/Image";

function Hero() {
  return (
    <StyledHero>
      <div className="container">
        <div className="hero">
          {/* Left */}
          <div className="hero__left">
            <Heading>Covid ID</Heading>
            <Sub fontColor="secondary">Monitoring Perkembangan Covid</Sub>

            <Desc fontColor="gray">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
              nostrum voluptate corrupti magni velit vel laborum recusandae cum.
              Expedita fugit ducimus tempore! Assumenda veritatis eaque quod
              ipsa exercitationem labore cumque.
            </Desc>

            <Link to="/">
              <Button shadowBox>
                <span>Vaccine </span>
              </Button>
            </Link>
          </div>

          {/* Right */}
          <div className="hero__right">
            <Image variant="lg" src={hero_img} alt="img" />
          </div>
        </div>
      </div>
    </StyledHero>
  );
}

export default Hero;
