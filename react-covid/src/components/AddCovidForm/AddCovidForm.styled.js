import styled from "styled-components";

const StyledCovidForm = styled.div`
  .container {
    background-color: #f8f9fa;
    padding: 1rem 1rem 3rem 1rem;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .form__title {
    text-align: center;
    color: #06d6a0;
    margin-bottom: -1rem;
    font-size: 2.5rem;
  }

  .form__areas {
    /* background-color: #06d6a0; */
    margin: 2rem 0;
    text-align: left;
  }

  .form__areas label {
    display: block;
    margin-bottom: 0.5rem;
  }
  .form__select,
  .form__areas input,
  .form__areas input:active,
  .form__areas input:focus {
    margin-bottom: 0.8rem;
    width: 100%;
    padding: 0.4rem 0;
    border: 2px solid #06d6a0;
    outline: none;
    border-radius: 10px;
  }

  /* .form__select option {
  width: 1rem !important;
} */

  .form__button {
    margin-top: 1rem;
    padding: 0.7rem 0;
    border: none;
    border-radius: 10px;
    background-color: #06d6a0;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    width: 100%;
  }

  .form__image {
    display: none;
  }

  @media (min-width: 768px) {
    .form {
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .form__image {
      display: block;
      max-width: 100%;
      margin-left: 4rem;
    }

    .form__left {
      flex-basis: 40%;
    }

    .form__right {
      flex-basis: 60%;
    }

    .form__areas {
      padding: 0 6rem;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .form__title {
      font-size: 3rem;
    }

    .form__image {
      display: block;
      max-width: 60%;
      margin-left: 15rem;
    }

    .form__right {
      margin-left: -5rem;
    }

    .form__areas {
      padding: 0 16rem;
    }

    /* @media (min-width: 1074px) {
    .form__areas {
      padding: 0 15rem;
    }
  } */
  }
`;

export default StyledCovidForm;
