import styled from "styled-components";

const StyledGlobal = styled.div`
  /* .global__main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
} */

  .global__box {
    border: 1px solid rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    box-shadow: 0 3px 5px rgb(188, 188, 188);
    background-color: #fff;
    padding: 2rem 4rem;
    margin: 1rem 0;
    font-size: 30px;
    width: 50%;
    text-align: center;
    color: #073b4c;
    font-size: 30px;
  }

  .global__Positif span {
    font-size: 40px;
    font-weight: 600;
    color: #06d6a0;
  }

  .global__Sembuh span {
    font-size: 40px;
    font-weight: 600;
    color: #118ab2;
  }

  .global__Meninggal span {
    font-size: 40px;
    font-weight: 600;
    color: #ef476f;
  }

  .global__box span {
    display: block;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .global__box {
      padding: 2rem 5rem;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    /* .global__main {
    flex-direction: column;
    justify-content: center;
  } */

    .global__box {
      width: auto;
      margin: 2rem 1rem;
    }

    .global__box h5 {
      font-size: 30px;
    }
  }
`;

export default StyledGlobal;
