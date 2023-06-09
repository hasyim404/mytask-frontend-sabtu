import styled, { css } from "styled-components";

const Form = styled.form`
  @media (min-width: 768px) {
    padding: 0 7rem;
  }

  @media (min-width: 992px) {
    padding: 0 auto;
  }
`;

const Label = styled.label`
  font-weight: 500;
  margin-bottom: 0.3rem;

  /* Block */
  ${function (props) {
    return (
      props.block &&
      css`
        display: block;
      `
    );
  }}
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  outline: none;
  border-radius: 10px;
  border: 2px solid ${function (props) {
      if (props.borderColor) {
        return props.theme.colors[props.borderColor].main;
      } else {
        return props.theme.colors.dark.main;
      }
    }};
`;

export { Form, Label, Input };
