import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.navbar__brand}>
          <h4>Covid ID</h4>
          {/* <p className={""}>
            <a href="https://github.com/hasyim404/mytask-frontend-sabtu"></a>
          </p> */}
        </div>
        <div>
          <ul className={styles.navbar__list}>
            <li className={styles.navbar__item}>
              <Link to="/">Global</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link to="/covid/indonesia">Indonesia</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link to="/covid/provinsi">Provinsi</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link to="/covid/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
