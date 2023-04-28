import styles from "./Navbar.module.css";

function NavBrand() {
  return (
    <div className={styles.navbar__brand}>
      <h4>Covid ID</h4>
      {/* <p className={""}>
        <a href="https://github.com/hasyim404/mytask-frontend-sabtu"></a>
      </p> */}
    </div>
  );
}

function NavList() {
  return (
    <ul className={styles.navbar__list}>
      <li className={styles.navbar__item}>Global</li>
      <li className={styles.navbar__item}>Indonesia</li>
      <li className={styles.navbar__item}>Provinsi</li>
      <li className={styles.navbar__item}>About</li>
    </ul>
  );
}

function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <NavBrand />
        <div>
          <NavList />
        </div>
      </nav>
    </div>
  );
}

export { NavBrand, NavList, Navbar };
