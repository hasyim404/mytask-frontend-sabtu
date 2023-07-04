import styled from "styled-components";

const StyledHero = styled.div`
  .container {
    /* background-color: red; */
    /* clip-path: inset(0 -100vmax); */
    padding: 1rem;
  }

  .hero {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .hero__left {
    margin-bottom: 1rem;
  }

  .hero__title {
    color: #06d6a0;
    margin-bottom: -1rem;
    font-size: 2.5rem;
  }

  .hero__sub_title {
    color: #118ab2;
    margin-bottom: 2rem;
    font-size: 1.2rem;
  }

  .hero__description {
    color: #64748b;
    margin-bottom: 3rem;
  }

  .hero__button {
    display: inline-block;
    border-radius: 10px;
    background-color: #06d6a0;
    border: none;
    color: #fff;
    padding: 0.9rem 3rem;
    transition: all 0.5s;
    cursor: pointer;
    font-size: 1.1rem;
  }

  .hero__button:hover {
    background-color: #00c490;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.24),
      0 7px 11px 0 rgba(0, 0, 0, 0.19);
  }

  .hero__button span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }

  .hero__button span:after {
    position: absolute;
    opacity: 0;
    top: 0;
    content: "\\00bb";
    right: -20px;
    transition: 0.5s;
  }

  .hero__button:hover span {
    padding-right: 15px;
  }

  .hero__button:hover span:after {
    opacity: 1;
    right: 0;
  }

  .hero__image {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .container {
      /* max-width: 1200px; */
      margin: 1rem;
    }

    .hero {
      margin: 2 2rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }

    .hero__left {
      flex-basis: 45%;
    }

    .hero__right {
      flex-basis: 55%;
      text-align: right;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .container {
      /* max-width: 1200px; */
      padding: 2rem 4.6rem;
      margin: auto;
    }

    .hero {
      margin: 0 3rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }

    .hero__left {
      flex-basis: 45%;
    }

    .hero__right {
      flex-basis: 55%;
      text-align: right;
    }

    .hero__title {
      font-size: 3rem;
    }

    .hero__sub_title {
      font-size: 1.3rem;
    }

    .hero__description {
      font-size: 1.2rem;
    }

    .hero__image {
      max-width: 80%;
      height: auto;
      border-radius: 25px;
    }
  }
`;

export default StyledHero;
