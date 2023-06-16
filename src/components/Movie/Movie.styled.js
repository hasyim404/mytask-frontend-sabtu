import styled from "styled-components";

const StyledMovie = styled.div`
  margin-bottom: 1rem;

  a {
    text-decoration: none;
  }

  .movie__image {
    margin-bottom: 0.5rem;
  }

  .movie__image:hover {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
  }

  .movie__title {
    color: #4361ee;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .movie__date {
    color: #64748b;
    font-size: 1.1rem;
  }

  .movie__type {
    color: #b5179e;
    margin: -10px 0 5px 0;
    font-size: 1.1rem;
    text-transform: capitalize;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    flex-basis: 50%;
  }

  /* Large Screen */
  @media (min-width: 992px) {
    flex-basis: 25%;
    padding: 1rem;
  }
`;

export default StyledMovie;
