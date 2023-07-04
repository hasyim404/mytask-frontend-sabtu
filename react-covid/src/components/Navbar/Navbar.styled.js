import styled from "styled-components";

const StyledNavbar = styled.div`
  /* Small Screen */
  .container {
    background-color: #06d6a0;
    padding: 0 1rem;
    color: #fff;
  }

  .navbar {
    display: flex;
    flex-direction: column;
  }

  .navbar__brand {
    font-size: 2.4rem;
    margin-bottom: -2rem;
  }

  .navbar__list {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  .navbar__list li {
    cursor: pointer;
  }

  .navbar__list li:hover {
    color: rgb(234, 234, 234);
    text-decoration-line: underline;
  }

  .navbar__item {
    margin-bottom: 1rem;
    margin-left: -2rem;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .container {
      padding: 0 2rem;
    }
    .navbar {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .navbar__brand {
      margin-bottom: 0;
    }

    .navbar__list {
      flex-direction: row;
    }

    .navbar__item {
      font-size: 1.1rem;
      margin: 0 1rem;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .navbar {
      padding: 0 5.5rem;
    }

    .navbar__brand {
      font-size: 2.4rem;
    }

    .navbar__item {
      font-size: 1.3rem;
    }
  }
`;

export default StyledNavbar;
