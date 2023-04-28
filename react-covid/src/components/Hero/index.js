import styles from "./Hero.module.css";
import hero_img from "../../assets/img/hero_img.svg";

function Title(props) {
  const { title } = props;
  return (
    <>
      <h2 className={styles.hero__title}>{title}</h2>
    </>
  );
}

function Sub_Title(props) {
  const { sub_title } = props;
  return (
    <>
      <p className={styles.hero__sub_title}>{sub_title}</p>
    </>
  );
}

function Description() {
  return (
    <p className={styles.hero__description}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius nostrum
      voluptate corrupti magni velit vel laborum recusandae cum. Expedita fugit
      ducimus tempore! Assumenda veritatis eaque quod ipsa exercitationem labore
      cumque.
    </p>
  );
}

function BtnHero() {
  return (
    <button className={styles.hero__button}>
      <span>Vaccine </span>
    </button>
  );
}

function ImgHero() {
  return (
    <>
      <img className={styles.hero__image} src={hero_img} />
    </>
  );
}

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        {/* Left */}
        <div className={styles.hero__left}>
          <Title title="Covid ID" />
          <Sub_Title sub_title="Monitoring Perkembangan Covid" />
          <Description />
          <a href="#!">
            <BtnHero />
          </a>
        </div>

        {/* Right */}
        <div className={styles.hero__right}>
          <ImgHero />
        </div>
      </div>
    </div>
  );
}

export { Title, Sub_Title, Hero };
