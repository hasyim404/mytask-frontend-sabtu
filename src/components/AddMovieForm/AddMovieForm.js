import { useState } from "react";
import styles from "./AddMovieForm.module.css";
import { nanoid } from "nanoid";
import Alert from "../Alert/Alert";

function AddMovieForm(props) {
  const { movies, setMovies } = props;

  const [title, setTitle] = useState("");
  const [isTitleError, setIsTitleError] = useState("");
  const [date, setDate] = useState("");
  const [isDateError, setIsDateError] = useState("");
  const [image, setImage] = useState("");
  const [isImageError, setIsImageError] = useState("");
  const [type, setType] = useState("");
  const [isTypeError, setIsTypeError] = useState("");

  // Arr Option Movie
  const option = ["Movie", "Action", "Drama", "Horror", "Comedy"];

  function handleInput(event) {
    setTitle(event.target.value);
  }

  function handleDate(event) {
    setDate(event.target.value);
  }

  function handleImage(event) {
    setImage(event.target.value);
  }

  function handleType(event) {
    setType(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (title == "") {
      setIsTitleError(true);
    } else if (date == "") {
      setIsDateError(true);
    } else if (image == "") {
      setIsImageError(true);
    } else if (type == "") {
      setIsTypeError(true);
    } else {
      const newMovie = {
        id: nanoid(8),
        title: title,
        year: date,
        type: type,
        poster: image,
      };

      setMovies([...movies, newMovie]);
      setIsTitleError(false);
      setIsDateError(false);
      setIsImageError(false);
      setIsTypeError(false);
    }
  }

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
          <form action="" className={styles.form__area} onSubmit={handleSubmit}>
            <label className={styles.form__label}>Title :</label>
            <input
              name="title"
              className={styles.form__input}
              type="text"
              id="title"
              value={title}
              onChange={handleInput}
            />
            {isTitleError && <Alert>Title wajib diisi</Alert>}

            <label className={styles.form__label}>Year :</label>
            <input
              name="year"
              className={styles.form__input}
              type="text"
              id="date"
              value={date}
              onChange={handleDate}
            />
            {isDateError && <Alert>Date wajib diisi</Alert>}

            <label className={styles.form__label}>Image :</label>
            <input
              name="image"
              className={styles.form__input}
              type="text"
              id="image"
              value={image}
              onChange={handleImage}
              placeholder="https://picsum.photos/300/400"
            />
            {isImageError && <Alert>Link gambar wajib diisi</Alert>}

            <label className={styles.form__label}>Genre :</label>
            <select
              className={styles.form__select}
              name="type"
              id="type"
              defaultValue={""}
              onChange={handleType}
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
            {isTypeError && <Alert>Genre wajib dipilih</Alert>}

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
