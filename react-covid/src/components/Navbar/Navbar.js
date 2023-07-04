import { Link } from "react-router-dom";

import StyledNavbar from "./Navbar.styled";
import { WebTitle } from "../ui/Typography";

function Navbar() {
  return (
    <StyledNavbar>
      <div className="container">
        <nav className="navbar">
          {/* klo fontColor diubah gk ngaruh karena ketimpa sama <Link/>, tapi work */}
          <WebTitle fontColor="white">
            <Link to="/">Covid ID</Link>
          </WebTitle>

          {/* normal */}
          {/* <WebTitle fontColor="danger">Covid ID</WebTitle> */}
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
