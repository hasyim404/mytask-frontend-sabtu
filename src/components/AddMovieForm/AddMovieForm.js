import { useState } from "react";
// import styles from "./AddMovieForm.module.css";
import { nanoid } from "nanoid";

import Alert from "../Alert/Alert";
import Container from "../Container/Container";
import Button from "../ui/Button";

import StyledMovieForm from "./AddMovieForm.styled";

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

  // 1 Error 1 State
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
    <Container>
      <StyledMovieForm>
        {/* Left */}
        <div className="form__left">
          <img
            className="form__img"
            src="https://picsum.photos/536/354"
            alt=""
          />
        </div>

        {/* Right */}
        <div className="form__right">
          <h4 className="form__title">Add Movie</h4>

          {/* Form */}
          <form action="" className="form__area" onSubmit={handleSubmit}>
            <label className="form__label">Title :</label>
            <input
              name="title"
              className="form__input"
              type="text"
              id="title"
              value={title}
              onChange={handleChange}
            />
            <Alert>
              <>{formError.title && <p>*Title wajib diisi</p>}</>
            </Alert>

            <label className="form__label">Year :</label>
            <input
              name="year"
              className="form__input"
              type="text"
              id="date"
              value={year}
              onChange={handleChange}
            />
            <Alert>
              <>{formError.year && <p>*Date wajib diisi</p>}</>
            </Alert>

            <label className="form__label">Image :</label>
            <input
              name="image"
              className="form__input"
              type="text"
              id="image"
              value={image}
              onChange={handleChange}
              placeholder="https://picsum.photos/300/400"
            />
            <Alert>
              <>{formError.image && <p>*Link gambar wajib diisi</p>}</>
            </Alert>

            <label className="form__label">Genre :</label>
            <select
              className="form__select"
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
            <Alert>
              <>{formError.type && <p>*Genre wajib dipilih</p>}</>
            </Alert>

            <Button variant="primary" full>
              Submit
            </Button>
          </form>
        </div>
      </StyledMovieForm>
    </Container>
  );
}

export default AddMovieForm;
