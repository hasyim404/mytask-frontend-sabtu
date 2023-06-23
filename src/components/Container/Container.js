import styled from "styled-components";

function Container(props) {
  const StyledContainer = styled.div`
    /* Small Screen */
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;

    @media (min-width: 768px) {
      /* 
      * Nothing change for now
      */
    }

    @media (min-width: 992px) {
      /* 
      * Nothing change for now
      */
    }
  `;
  return (
    <>
      <StyledContainer>{props.children}</StyledContainer>
    </>
  );
}

export default Container;
