// import styles from "./Hero.module.css";
import StyledHero from "./Hero.styled";
import hero_img from "../../assets/img/hero_img.svg";

function Hero() {
  return (
    <StyledHero>
      <div className="container">
        <div className="hero">
          {/* Left */}
          <div className="hero__left">
            <h2 className="hero__title">Covid ID</h2>
            <p className="hero__sub_title">Monitoring Perkembangan Covid</p>

            <p className="hero__description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
              nostrum voluptate corrupti magni velit vel laborum recusandae cum.
              Expedita fugit ducimus tempore! Assumenda veritatis eaque quod
              ipsa exercitationem labore cumque.
            </p>
            <a href="#!">
              <button className="hero__button">
                <span>Vaccine </span>
              </button>
            </a>
          </div>

          {/* Right */}
          <div className="hero__right">
            <img className="hero__image" src={hero_img} alt="img" />
          </div>
        </div>
      </div>
    </StyledHero>
  );
}

export default Hero;
