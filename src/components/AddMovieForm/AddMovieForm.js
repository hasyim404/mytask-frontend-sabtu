import { useState } from "react";
import styles from "./AddMovieForm.module.css";
import { nanoid } from "nanoid";
import Alert from "../Alert/Alert";

function AddMovieForm(props) {
  const { movies, setMovies } = props;

  // State object
  const [formData, setFormData] = useState({
    title: "",
    year: "",
    image: "",
    type: "",
  });

  // Fungsi handleChange semua input form
  function handleChange(e) {
    // console.log(e.target.name, e.target.value);
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  /**
   * TODO
   * - PROBLEM: 1 ERROR 1 STATE.
   * - TODO: REFACTOR SEMUA ERROR JADI 1 STATE.
   */
  const [formError, setFormError] = useState({
    isTitleError: false,
    isDateError: false,
    isImageError: false,
    isTypeError: false,
  });

  // Destructing
  const { title, year, image, type } = formData;

  // Arr Option Movie
  const option = ["Movie", "Action", "Drama", "Horror", "Comedy"];

  function validate() {
    if (title === "") {
      // setIsTitleError(true);
      setFormError((err) => {
        return {
          ...err,
          title: true,
        };
      });
      return false;
    } else if (year === "") {
      // setIsDateError(true);
      // setIsTitleError(false);
      setFormError((err) => {
        return {
          ...err,
          year: true,
          title: false,
        };
      });
      return false;
    } else if (image === "") {
      // setIsImageError(true);
      // setIsDateError(false);
      setFormError((err) => {
        return {
          ...err,
          image: true,
          year: false,
        };
      });
      return false;
    } else if (type === "") {
      // setIsTypeError(true);
      // setIsImageError(false);
      setFormError((err) => {
        return {
          ...err,
          type: true,
          image: false,
        };
      });
      return false;
    } else {
      // setIsTitleError(false);
      // setIsDateError(false);
      // setIsImageError(false);
      // setIsTypeError(false);
      setFormError((err) => {
        return {
          ...err,
          title: false,
          year: false,
          image: false,
          type: false,
        };
      });
      return true;
    }
  }

  function addMovie() {
    const newMovie = {
      id: nanoid(8),
      title: title,
      year: year,
      type: type,
      poster: image,
    };

    setMovies([...movies, newMovie]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    validate() && addMovie();
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {/* Left */}
        <div className={styles.form__left}>
          <img
            className={styles.form__img}
            src="https://picsum.photos/536/354"
            alt=""
          />
        </div>

        {/* Right */}
        <div className={styles.form__right}>
          <h4 className={styles.form__title}>Add Movie</h4>

          {/* Form */}
          <form action="" className={styles.form__area} onSubmit={handleSubmit}>
            <label className={styles.form__label}>Title :</label>
            <input
              name="title"
              className={styles.form__input}
              type="text"
              id="title"
              value={title}
              onChange={handleChange}
            />
            <div className={styles.form__alert}>
              {formError.title && <Alert>*Title wajib diisi</Alert>}
            </div>

            <label className={styles.form__label}>Year :</label>
            <input
              name="year"
              className={styles.form__input}
              type="text"
              id="date"
              value={year}
              onChange={handleChange}
            />
            <div className={styles.form__alert}>
              {formError.year && <Alert>*Date wajib diisi</Alert>}
            </div>

            <label className={styles.form__label}>Image :</label>
            <input
              name="image"
              className={styles.form__input}
              type="text"
              id="image"
              value={image}
              onChange={handleChange}
              placeholder="https://picsum.photos/300/400"
            />
            <div className={styles.form__alert}>
              {formError.image && <Alert>*Link gambar wajib diisi</Alert>}
            </div>

            <label className={styles.form__label}>Genre :</label>
            <select
              className={styles.form__select}
              name="type"
              id="type"
              defaultValue={""}
              onChange={handleChange}
            >
              <option value={""} disabled>
                Pilih Tipe Movie
              </option>
              {option.map((option, index) => {
                return (
                  <option key={index} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
            <div className={styles.form__alert}>
              {formError.type && <Alert>*Genre wajib dipilih</Alert>}
            </div>

            <button className={styles.form__button} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddMovieForm;
