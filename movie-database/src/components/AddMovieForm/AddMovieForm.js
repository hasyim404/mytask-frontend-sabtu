import styles from "./AddMovieForm.module.css";

const AddMovieForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__img}
            src="https://picsum.photos/536/354"
            alt=""
          />
        </div>
        <div className={styles.form__right}>
          <h4 className={styles.form__title}>Add Movie</h4>
          <form action="" className={styles.form__area}>
            <label for="title" className={styles.form__label}>
              Title
            </label>
            <input name="title" className={styles.form__input} type="text" />

            <label for="year" className={styles.form__label}>
              Year
            </label>
            <input name="year" className={styles.form__input} type="text" />

            <button className={styles.form__button} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMovieForm;
