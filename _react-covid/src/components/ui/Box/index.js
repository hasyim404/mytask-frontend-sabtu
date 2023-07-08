import styled from "styled-components";

const Box = styled.div`
  width: 150px;
  height: 190px;
  display: flex;
  box-shadow: 0 3px 5px rgb(188, 188, 188);
  justify-content: center;
  border-radius: 20px;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  padding: 2rem 4rem;
  margin: 1rem 0;
  background-color: ${function (props) {
    if (props.color) {
      return props.theme.colors[props.color].main;
    } else {
      return props.theme.colors.white.main;
    }
  }};

  @media (min-width: 768px) {
    width: 300px;
  }

  @media (min-width: 992px) {
    width: auto;
    margin: 2rem 1rem;
  }
`;

const Status = styled.h5`
  font-size: 30px;
  text-transform: capitalize;
  color: ${function (props) {
    if (props.fontColor) {
      return props.theme.colors[props.fontColor].main;
    } else {
      return props.theme.colors.white.main;
    }
  }};
`;

const Total = styled.span`
  display: block;
`;

export { Box, Status, Total };
