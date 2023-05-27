import styled from "styled-components";

const StyledFooter = styled.div`
  /* Small Screen */
  background-color: #4361ee;
  color: #fff;
  padding: 1.5rem 0;
  text-align: center;

  .footer__title {
    font-size: 2.4rem;
    /* margin-bottom: -2rem; */
  }

  .footer__author {
    font-size: 1.3rem;
  }

  .footer__author a {
    color: #fff;
    text-decoration: none;
  }

  .footer__author a:hover {
    color: rgb(234, 234, 234);
    text-decoration-line: underline;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    /*
    * Nothing TODO here.
    * We dont change styling footer. 
    */
  }

  /* Large Screen */
  @media (min-width: 992px) {
    /*
    * Nothing TODO here.
    * We dont change styling footer. 
    */
  }
`;

export default StyledFooter;
