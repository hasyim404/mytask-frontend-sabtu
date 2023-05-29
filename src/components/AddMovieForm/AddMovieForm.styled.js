import styled from "styled-components";

const StyledMovieForm = styled.div`
  /* Small Screen */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .form__title {
    margin-bottom: 2rem;
  }

  .form__label {
    font-weight: 500;
    margin-bottom: 0.3rem;
  }

  .form__select,
  .form__input {
    margin-bottom: 0.6rem;
    width: 100%;
    padding: 0.5rem;
    border: 2px solid #4361ee;
    outline: none;
    border-radius: 10px;
  }

  .form__img {
    display: none;
  }

  .form__button {
    margin-top: 2rem;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .form__img {
      display: block;
      max-width: 100%;
      margin-top: 15%;
      margin-left: 10%;
    }

    .form__left {
      flex-basis: 40%;
    }

    .form__right {
      flex-basis: 60%;
    }

    .form__area {
      padding: 0 7rem;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .form__img {
      display: block;
    }

    .form__right {
      padding: 0 4rem;
    }

    .form__area {
      padding: 0 auto;
    }
  }
`;

export default StyledMovieForm;
