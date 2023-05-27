import styled from "styled-components";

const StyledNavbar = styled.div`
  /* Small Screen */
  background-color: #4361ee;
  color: #fff;
  margin: 0 auto;
  padding: 1rem;

  .navbar {
    display: flex;
    flex-direction: column;
  }

  .navbar__brand {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }

  .navbar__list {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  .navbar__item a {
    margin-bottom: 1rem;
    cursor: pointer;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
  }

  .navbar__item a:hover {
    color: rgb(234, 234, 234);
    text-decoration-line: underline;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    padding: 1rem 2rem;

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
      margin: 0 1rem;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    padding: 1rem 5.5rem;

    .navbar__item {
      font-size: 1rem;
    }
  }
`;

export default StyledNavbar;
