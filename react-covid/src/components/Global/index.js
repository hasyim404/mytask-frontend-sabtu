import styles from "./Global.module.css";

function Global(props) {
  const { global } = props;
  const cond =
    global.status == "Positif"
      ? styles.global__Positif
      : global.status == "Sembuh"
      ? styles.global__Sembuh
      : styles.global__Meninggal;

  return (
    <div className={styles.global__box}>
      <h5 className={cond}>
        {global.status} <span>{global.total.toLocaleString()}</span>
      </h5>
    </div>
  );
}

export default Global;
