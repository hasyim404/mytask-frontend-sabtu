import styled, { css } from "styled-components";

const Heading = styled.h2`
  font-size: 2rem;

  /* Prop fontColor */
  color: ${function (props) {
    if (props.fontColor) {
      return props.theme.colors[props.fontColor].main;
    } else {
      return props.theme.colors.dark.main;
    }
  }};

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 992px) {
    /* 
    * Nothing Changes
    */
  }

  /* Tangkap props centered */
  ${function (props) {
    return (
      props.centered &&
      css`
        text-align: center;
      `
    );
  }}
`;

const Paragraph = styled.p`
  font-size: 1.1rem;

  /* Prop fontColor */
  color: ${function (props) {
    if (props.fontColor) {
      return props.theme.colors[props.fontColor].main;
    } else {
      return props.theme.colors.dark.main;
    }
  }};

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media (min-width: 992px) {
    /* 
    * Nothing Changes
    */
  }
`;

export { Heading, Paragraph };
