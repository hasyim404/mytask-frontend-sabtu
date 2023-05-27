import styled, { css } from "styled-components";

const Button = styled.button`
  /* padding: 0.8rem 2rem; */
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;

  /* Tangkap prop padding */
  padding: ${function (props) {
    if (props.size) {
      return props.theme.paddingBtn[props.size];
    } else {
      return props.theme.paddingBtn.md;
    }
  }};

  /* Tangkap prop font-size */
  font-size: ${function (props) {
    if (props.size) {
      return props.theme.fontSizeBtn[props.size];
    } else {
      return props.theme.fontSizeBtn.md;
    }
  }};

  /* Tangkap props variant */
  background-color: ${function (props) {
    if (props.variant) {
      return props.theme.colors[props.variant];
    } else {
      return props.theme.colors.primary;
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
        return props.theme.colorHover[props.variant];
      } else {
        return props.theme.colorHover.primary;
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
