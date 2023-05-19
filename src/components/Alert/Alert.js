import styles from "./Alert.module.css";

function Alert(props) {
  const { children } = props;

  return (
    <div>
      <span className={styles.alert}>{children}</span>
    </div>
  );
}

<Alert>
  {/* ini children */}
  <img />
  <h2>Oke</h2>
  <p>Hai</p>
</Alert>

export default Alert;
