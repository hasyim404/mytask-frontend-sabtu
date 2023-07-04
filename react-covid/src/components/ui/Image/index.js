import styled, { css } from "styled-components";

const Image = styled.img`
  height: auto;
  max-width: ${function (props) {
    if (props.variant) {
      return props.theme.images[props.variant].maxWidth;
    } else {
      return props.theme.images.md.maxWidth;
    }
  }};
  border-radius: ${function (props) {
    if (props.border) {
      return props.theme.images[props.border].border;
    } else {
      return props.theme.images.none.border;
    }
  }};

  /* Rounded Circle */
  ${function (props) {
    return (
      props.circle &&
      css`
        height: auto;
        border-radius: 100%;
      `
    );
  }}
`;

export default Image;
