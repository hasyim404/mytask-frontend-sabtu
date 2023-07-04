import styled from "styled-components";

const WebTitle = styled.h4`
  font-size: 2.4rem;
  margin-bottom: 3rem;
  color: ${function (props) {
    if (props.fontColor) {
      return props.theme.colors[props.fontColor].main;
    } else {
      return props.theme.colors.primary.main;
    }
  }};
`;

const Heading = styled.h2`
  margin-bottom: -1rem;
  font-size: 2.5rem;
  color: ${function (props) {
    if (props.fontColor) {
      return props.theme.colors[props.fontColor].main;
    } else {
      return props.theme.colors.primary.main;
    }
  }};

  @media (min-width: 992px) {
    font-size: 3rem;
  }
`;

const Sub = styled.p`
  margin-bottom: 2rem;
  font-size: 1.2rem;
  color: ${function (props) {
    if (props.fontColor) {
      return props.theme.colors[props.fontColor].main;
    } else {
      return props.theme.colors.primary.main;
    }
  }};

  @media (min-width: 992px) {
    font-size: 1.3rem;
  }
`;

const Desc = styled.p`
  margin-bottom: 3rem;
  color: ${function (props) {
    if (props.fontColor) {
      return props.theme.colors[props.fontColor].main;
    } else {
      return props.theme.colors.primary.main;
    }
  }};

  @media (min-width: 992px) {
    font-size: 1.2rem;
  }
`;

export { WebTitle, Heading, Sub, Desc };
