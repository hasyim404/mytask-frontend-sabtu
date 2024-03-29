import styled from "styled-components";

const StyledMovies = styled.div`
  /* Small Screen */
  margin: 1rem;

  .movies {
    margin: 5rem 0;
    text-align: center;
  }

  .movies__title {
    margin-bottom: 2rem;
  }

  .movie__container {
    display: flex;
    flex-direction: column;
  }

  button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #4361ee;
    color: #fff;
    cursor: pointer;
    transition-duration: 0.3s;
  }

  button:hover {
    background-color: #647ded;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .movie__container {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

    .movie {
      flex-basis: 50%;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;

    .movie {
      flex-basis: 25%;
      padding: 1rem;
    }
  }
`;

export default StyledMovies;
