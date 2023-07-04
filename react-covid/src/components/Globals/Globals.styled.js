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

  /* Medium Screen */
  @media (min-width: 768px) {
    /* 
  \  Nothing Changes  \
  */
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .globals__main {
      flex-direction: row;
      justify-content: center;
    }
  }
`;

export default StyledGlobals;
