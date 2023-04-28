import styles from "../Footer/Footer.module.css";

function FootBrand() {
  return (
    <div className={styles.footer__brand}>
      <h4>Covid ID</h4>
      <p className={styles.footer__for_foot}>
        Develope By&nbsp;
        <a href="https://github.com/hasyim404/mytask-frontend-sabtu">
          hasyim404
        </a>
      </p>
    </div>
  );
}

function FootList() {
  return (
    <ul className={styles.footer__list}>
      <li className={styles.footer__item}>Global</li>
      <li className={styles.footer__item}>Indonesia</li>
      <li className={styles.footer__item}>Provinsi</li>
      <li className={styles.footer__item}>About</li>
    </ul>
  );
}

function Footer() {
  return (
    <div className={styles.container}>
      <nav className={styles.footer}>
        <FootBrand />
        <div>
          <FootList />
        </div>
      </nav>
    </div>
  );
}

export default Footer;
