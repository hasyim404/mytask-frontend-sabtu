import styled from "styled-components";

const StyledHero = styled.div`
  /* Small Screen */
  display: flex;
  flex-direction: column;
  text-align: center;

  .hero__left {
    margin-bottom: 1rem;
  }

  .hero__title {
    color: #4361ee;
    margin-bottom: 1rem;
    font-size: 2.5rem;
  }

  .hero__genre {
    color: #b5179e;
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
    background-color: #4361ee;
    border: none;
    color: #fff;
    padding: 0.9rem 3rem;
    transition: all 0.5s;
    cursor: pointer;
    font-size: 1.1rem;
  }

  .hero__image {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    margin: 2 2rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;

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
    margin: 2rem -1rem 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;

    .hero__left {
      flex-basis: 45%;
    }

    .hero__right {
      flex-basis: 55%;
      text-align: right;
    }

    .hero__title {
      font-size: 2.5rem;
    }

    .hero__genre {
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
