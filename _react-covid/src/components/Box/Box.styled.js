import styled from "styled-components";

const StyledBox = styled.div`
  width: 150px;
  height: 190px;
  display: flex;
  box-shadow: 0 3px 5px rgb(188, 188, 188);
  justify-content: center;
  border-radius: 20px;
  align-items: center;
  /* font-size: 30px; */
  /* font-weight: bold; */
  padding: 2rem 4rem;
  margin: 1rem 0;
  background-color: #ffff;

  @media (min-width: 768px) {
    width: 300px;
  }

  @media (min-width: 992px) {
    width: 190px;
    margin: 2rem 1rem;
  }
`;

export default StyledBox;
