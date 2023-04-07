import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Spiderman</h2>
          <h3 className={styles.hero__genre}>Genre: Action, Drama</h3>
          <p className={styles.hero__description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
            explicabo voluptas qui excepturi officia veniam eligendi debitis
            animi eaque eius maxime nostrum maiores sint, iste cum at delectus
            quisquam ducimus.
          </p>
          <button className={styles.hero__button}>Watch</button>
        </div>
        <div className={styles.hero__right}>
          <img
            className={styles.hero__image}
            src="https://picsum.photos/536/354"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
