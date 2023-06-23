import { useState } from "react";
import { nanoid } from "nanoid";

import Alert from "../Alert/Alert";
import Container from "../Container/Container";
import Button from "../ui/Button";

import StyledMovieForm from "./AddMovieForm.styled";
import { Form, Label, Input } from "../ui/Form";
import { Heading } from "../ui/Typography";
import Image from "../ui/Media";

import { useNavigate } from "react-router-dom";

function AddMovieForm(props) {
  const { movies, setMovies } = props;
  const navigation = useNavigate();

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
    navigation("/");
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
          <Image
            className="form__img"
            src="https://picsum.photos/536/354"
            rounded
          />
        </div>

        {/* Right */}
        <div className="form__right">
          {/* Form */}
          <Form action="" className="form__area" onSubmit={handleSubmit}>
            <Heading className="form__title" fontColor="blue" centered>
              Add Movie
            </Heading>

            {/* Title */}
            <Label className="form__label" block={true}>
              Title :
            </Label>
            <Input
              name="title"
              className="form__input"
              type="text"
              id="title"
              value={title}
              onChange={handleChange}
              borderColor="blue"
            />
            <Alert>
              <>{formError.title && "*Title wajib diisi"}</>
            </Alert>

            {/* Year */}
            <Label className="form__label" block={true}>
              Year :
            </Label>
            <Input
              name="year"
              className="form__input"
              type="text"
              id="date"
              value={year}
              onChange={handleChange}
              borderColor="blue"
            />
            <Alert>
              <>{formError.year && "*Date wajib diisi"}</>
            </Alert>

            {/* Image */}
            <Label className="form__label" block={true}>
              Image :
            </Label>
            <Input
              name="image"
              className="form__input"
              type="text"
              id="image"
              value={image}
              onChange={handleChange}
              placeholder="https://picsum.photos/300/400"
              borderColor="blue"
            />
            <Alert>
              <>{formError.image && "*Link gambar wajib diisi"}</>
            </Alert>

            {/* Genre */}
            <Label className="form__label" block={true}>
              Genre :
            </Label>
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
              <>{formError.type && "*Genre wajib dipilih"}</>
            </Alert>

            <Button className="form__button" variant="primary" size="md" full>
              Submit
            </Button>
          </Form>
        </div>
      </StyledMovieForm>
    </Container>
  );
}

export default AddMovieForm;
