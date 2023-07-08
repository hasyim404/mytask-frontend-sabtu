import { Link } from "react-router-dom";

import StyledFooter from "./Footer.styled";
import { WebTitle } from "../ui/Typography";

function Footer() {
  return (
    <StyledFooter>
      <div className="container">
        <nav className="footer">
          <div className="footer__brand">
            <WebTitle fontColor="white">Covid ID</WebTitle>
            <p className="footer__for_foot">
              Develope By&nbsp;
              <a href="https://github.com/hasyim404/mytask-frontend-sabtu">
                hasyim404
              </a>
            </p>
          </div>
          <div>
            <ul className="footer__list">
              <li className="footer__item">
                <Link to="/">Global</Link>
              </li>
              <li className="footer__item">
                <Link to="/covid/indonesia">Indonesia</Link>
              </li>
              <li className="footer__item">
                <Link to="/covid/provinsi">Provinsi</Link>
              </li>
              <li className="footer__item">
                <Link to="/covid/about">About</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </StyledFooter>
  );
}

export default Footer;
