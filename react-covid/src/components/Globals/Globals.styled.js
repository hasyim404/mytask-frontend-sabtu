import styled from "styled-components";

const StyledGlobals = styled.div`
  .container {
    background-color: #f8f9fa;
    padding: 1rem 1rem 3rem 1rem;
  }

  .globals__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .globals {
    text-align: center;
  }

  .globals__title {
    color: #06d6a0;
    margin-bottom: -1rem;
    font-size: 2.5rem;
  }

  .globals__sub_title {
    color: #118ab2;
    margin-bottom: 2rem;
    font-size: 1.2rem;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    /* 
  \  Nothing Changes  \
  */
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .globals__title {
      font-size: 3rem;
    }

    .globals__sub_title {
      font-size: 1.3rem;
    }

    .globals__main {
      flex-direction: row;
      justify-content: center;
    }
  }
`;

export default StyledGlobals;
