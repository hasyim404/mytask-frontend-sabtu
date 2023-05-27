import styled from "styled-components";

const StyledMovieForm = styled.div`
  /* Small Screen */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .form__title {
    color: #4361ee;
    text-align: center;
    margin-bottom: -1rem;
    font-size: 2.5rem;
  }

  .form__area {
    margin: 2rem 0;
    text-align: left;
  }

  .form__label {
    display: block;
    margin-bottom: 0.5rem;
  }

  .form__select,
  .form__input,
  .form__input:active,
  .form__input:focus {
    margin-bottom: 0.8rem;
    width: 100%;
    padding: 0.4rem 0;
    border: 2px solid #4361ee;
    outline: none;
    border-radius: 10px;
  }

  .form__img {
    display: none;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .form__img {
      display: block;
      max-width: 100%;
      margin-left: 4rem;
      border-radius: 10px;
    }

    .form__left {
      flex-basis: 40%;
    }

    .form__right {
      flex-basis: 60%;
    }

    .form__area {
      padding: 0 6rem;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .form__title {
      font-size: 3rem;
    }

    .form__img {
      display: block;
      max-width: 80%;
      /* margin-left: 15rem; */
    }

    .form__right {
      margin-left: -5rem;
    }

    .form__area {
      padding: 0 14rem;
    }
  }
`;

export default StyledMovieForm;
