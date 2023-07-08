import styled, { css } from "styled-components";

const Button = styled.button`
  display: inline-block;
  border-radius: 10px;
  border: none;
  transition: all 0.5s;
  cursor: pointer;
  background-color: ${function (props) {
    if (props.variant) {
      return props.theme.colors[props.variant].main;
    } else {
      return props.theme.colors.primary.main;
    }
  }};
  color: ${function (props) {
    if (props.fontColor) {
      return props.theme.colors[props.fontColor].main;
    } else {
      return props.theme.colors.white.main;
    }
  }};
  padding: ${function (props) {
    if (props.size) {
      return props.theme.buttons[props.size].padding;
    } else {
      return props.theme.buttons.lg.padding;
    }
  }};
  font-size: ${function (props) {
    if (props.size) {
      return props.theme.buttons[props.size].fontSize;
    } else {
      return props.theme.buttons.lg.fontSize;
    }
  }};

  &:hover {
    background-color: ${function (props) {
      if (props.variant) {
        return props.theme.colors[props.variant].hover;
      } else {
        return props.theme.colors.primary.hover;
      }
    }};

    ${function (props) {
      return (
        props.shadowBox &&
        css`
          box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.24),
            0 7px 11px 0 rgba(0, 0, 0, 0.19);
        `
      );
    }}
  }

  /* Btn Block */
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
