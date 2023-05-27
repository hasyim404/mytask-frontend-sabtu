import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.navbar__brand}>
          <h4>Movie App</h4>
        </div>
        <div>
          <ul className={styles.navbar__list}>
            <li className={styles.navbar__item}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link to="/movie/create">Add Movie</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link to="/movie/populer">Populer</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link to="/movie/now-playing">Now Playing</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link to="/movie/top-rated">Top Rated</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
