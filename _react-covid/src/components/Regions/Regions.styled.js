import styled from "styled-components";

const StyledRegions = styled.div`
  .container {
    background-color: #f8f9fa;
    padding: 1rem 1rem 3rem 1rem;
  }

  .regions__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .regions {
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
    .regions__main {
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
    }
  }
`;

export default StyledRegions;
