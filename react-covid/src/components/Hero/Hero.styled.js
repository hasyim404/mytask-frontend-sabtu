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

  .hero__description {
    color: #64748b;
    margin-bottom: 3rem;
  }

  button span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }

  button span:after {
    position: absolute;
    opacity: 0;
    top: 0;
    content: "\\00bb";
    right: -20px;
    transition: 0.5s;
  }

  button:hover span {
    padding-right: 15px;
  }

  button:hover span:after {
    opacity: 1;
    right: 0;
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

    .hero__description {
      font-size: 1.2rem;
    }
  }
`;

export default StyledHero;
