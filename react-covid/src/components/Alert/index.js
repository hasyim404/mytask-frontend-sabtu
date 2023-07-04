import styled from "styled-components";

const StyledAlert = styled.div`
  .alert {
    color: #ef476f;
  }
`;

function Alert(props) {
  const { children } = props;

  return (
    <StyledAlert>
      <span className="alert">{children}</span>
    </StyledAlert>
  );
}

export default Alert;
