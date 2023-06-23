import { Link } from "react-router-dom";

import StyledNavbar from "./Navbar.styled";

const Navbar = () => {
  return (
    <StyledNavbar>
      <nav className="navbar">
        <div className="navbar__brand">
          <h4>Movie App</h4>
        </div>
        <div>
          <ul className="navbar__list">
            <li className="navbar__item">
              <Link to="/">Home</Link>
            </li>
            <li className="navbar__item">
              <Link to="/movie/create">Add Movie</Link>
            </li>
            <li className="navbar__item">
              <Link to="/movie/populer">Populer</Link>
            </li>
            <li className="navbar__item">
              <Link to="/movie/now-playing">Now Playing</Link>
            </li>
            <li className="navbar__item">
              <Link to="/movie/top-rated">Top Rated</Link>
            </li>
          </ul>
        </div>
      </nav>
    </StyledNavbar>
  );
};

export default Navbar;
