import styled from "styled-components";

const StyledGlobal = styled.div`
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

  h5 {
    font-size: 30px;
    text-transform: capitalize;
    color: black;
  }

  h5 span {
    display: block;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
  }

  /* Large Screen */
  @media (min-width: 992px) {
  }
`;

export default StyledGlobal;
