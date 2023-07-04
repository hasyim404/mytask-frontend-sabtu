import { Link } from "react-router-dom";

import StyledNavbar from "./Navbar.styled";

function Navbar() {
  return (
    <StyledNavbar>
      <div className="container">
        <nav className="navbar">
          <div className="navbar__brand">
            <h4>Covid ID</h4>
            {/* <p className={""}>
              <a href="https://github.com/hasyim404/mytask-frontend-sabtu"></a>
            </p> */}
          </div>
          <div>
            <ul className="navbar__list">
              <li className="navbar__item">
                <Link to="/">Global</Link>
              </li>
              <li className="navbar__item">
                <Link to="/covid/indonesia">Indonesia</Link>
              </li>
              <li className="navbar__item">
                <Link to="/covid/provinsi">Provinsi</Link>
              </li>
              <li className="navbar__item">
                <Link to="/covid/about">About</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
