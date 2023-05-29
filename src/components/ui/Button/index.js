import styled, { css } from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: 10px;
  cursor: pointer;

  /* Tangkap prop fontColor */
  color: ${function (props) {
    if (props.fontColor) {
      return props.theme.colors[props.fontColor].main;
    } else {
      return props.theme.colors.light.main;
    }
  }};

  /* Tangkap prop size */
  padding: ${function (props) {
    if (props.size) {
      return props.theme.buttons[props.size].padding;
    } else {
      return props.theme.buttons.md.padding;
    }
  }};

  font-size: ${function (props) {
    if (props.size) {
      return props.theme.buttons[props.size].fontSize;
    } else {
      return props.theme.buttons.md.fontSize;
    }
  }};

  /* Tangkap props variant */
  background-color: ${function (props) {
    if (props.variant) {
      return props.theme.colors[props.variant].main;
    } else {
      return props.theme.colors.primary.main;
    }
  }};

  /* 
  * Hover button / 
  * -------------
  * sudo selector 
  */
  &:hover {
    background-color: ${function (props) {
      if (props.variant) {
        return props.theme.colors[props.variant].hover;
      } else {
        return props.theme.colors.primary.hover;
      }
    }};
  }

  /* Tangkap props full */
  ${function (props) {
    return (
      props.full &&
      css`
        width: 100%;
        display: block;
      `
    );
  }}
`;

export default Button;
