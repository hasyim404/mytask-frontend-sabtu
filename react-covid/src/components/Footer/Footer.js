import { Link } from "react-router-dom";

import styles from "../Footer/Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <nav className={styles.footer}>
        <div className={styles.footer__brand}>
          <h4>Covid ID</h4>
          <p className={styles.footer__for_foot}>
            Develope By&nbsp;
            <a href="https://github.com/hasyim404/mytask-frontend-sabtu">
              hasyim404
            </a>
          </p>
        </div>
        <div>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>
              <Link to="/">Global</Link>
            </li>
            <li className={styles.footer__item}>
              <Link to="/covid/indonesia">Indonesia</Link>
            </li>
            <li className={styles.footer__item}>
              <Link to="/covid/provinsi">Provinsi</Link>
            </li>
            <li className={styles.footer__item}>
              <Link to="/covid/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
