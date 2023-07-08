import styled from "styled-components";

const StyledRegion = styled.div`
  .region__card {
    width: 180px;
    color: #073b4c;
    border: 1px solid rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    box-shadow: 0 3px 5px rgb(188, 188, 188);
    background-color: #fff;
    padding: 2rem 4rem;
    margin: 0.5rem 0rem;
  }

  .region__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  .region__items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 15px;
  }

  .region__items span {
    font-size: 1.3rem;
  }

  .region__items p {
    margin: 0;
  }

  .region__container img {
    width: 30px;
    margin-top: 1rem;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .region__card {
      padding: 1.5rem 4.5rem;
      margin: 0.5rem 0rem;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .region__card {
      margin: 2rem 1.5rem;
      padding: 2rem 4.5rem;
    }

    .card__main {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

export default StyledRegion;
