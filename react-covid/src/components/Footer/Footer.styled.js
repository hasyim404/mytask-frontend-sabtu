import styled from "styled-components";

const StyledFooter = styled.div`
  /* Small Screen */
  .container {
    background-color: #06d6a0;
    padding: 0 1rem;
    color: #fff;
  }

  .footer {
    display: flex;
    flex-direction: column;
  }

  .footer__brand {
    font-size: 2.4rem;
    margin-bottom: -2rem;
  }

  .footer__list {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  .footer__list li {
    cursor: pointer;
  }

  .footer__list li:hover {
    color: rgb(234, 234, 234);
    text-decoration-line: underline;
  }

  .footer__item {
    margin-bottom: 1rem;
    margin-left: -2rem;
  }

  .footer__item a {
    text-decoration: none;
    color: white;
  }

  .footer__for_foot {
    font-size: 1.3rem;
    margin-top: -3rem;
    padding-bottom: 2rem;
  }

  .footer__for_foot a {
    color: #fff;
    text-decoration: none;
  }

  .footer__for_foot a:hover {
    color: rgb(234, 234, 234);
    text-decoration: underline;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .container {
      padding: 0 2rem;
    }
    .footer {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .footer__brand {
      margin-bottom: 0;
    }

    .footer__list {
      flex-direction: row;
    }

    .footer__item {
      font-size: 1.1rem;
      margin: 0 1rem;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .footer {
      padding: 0 5.5rem;
    }

    .footer__brand {
      font-size: 2.4rem;
    }

    .footer__item {
      font-size: 1.3rem;
    }
  }
`;

export default StyledFooter;
