import styled from "styled-components";

function Alert(props) {
  const { children } = props;
  const StyledAlert = styled.div`
    margin-top: -0.5rem;
    margin-bottom: 0.5rem;

    .alert {
      color: rgb(216, 23, 23);
      font-style: italic;
    }
  `;

  return (
    <StyledAlert>
      <span className="alert">{children}</span>
    </StyledAlert>
  );
}

export default Alert;
