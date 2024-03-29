import styled from "styled-components";

const StyledProvinces = styled.div`
  .container {
    background-color: #fff;
    padding: 1rem 1rem 3rem 1rem;
  }

  .provinces {
    text-align: center;
  }

  .provinces__title {
    color: #06d6a0;
    margin-bottom: -1rem;
    font-size: 2.5rem;
  }

  .provinces__sub_title {
    color: #118ab2;
    margin-bottom: 2rem;
    font-size: 1.2rem;
  }

  .provinces__table {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
  }

  .provinces__table {
    overflow-x: auto;
  }

  .provinces__table table,
  th,
  td {
    border: 1px solid #64748b;
    border-collapse: collapse;
    text-align: center;
    vertical-align: center;
    padding: 1rem 2rem;
    /* border-spacing: 1rem; */
  }

  .provinces__table th {
    color: #06d6a0;
  }

  .provinces__table td {
    color: #64748b;
  }

  .provinces__no {
    padding: 0;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .provinces__table {
      justify-content: center;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .provinces__title {
      font-size: 3rem;
    }

    .provinces__sub_title {
      font-size: 1.3rem;
    }
  }
`;

export default StyledProvinces;
