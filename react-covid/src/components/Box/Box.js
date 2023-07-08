import StyledBox from "./Box.styled";

function Box(props) {
  return <StyledBox>{props.children}</StyledBox>;
}

export default Box;
