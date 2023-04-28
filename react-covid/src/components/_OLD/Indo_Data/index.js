import styles from "./Indo_Data.module.css";

function IndoData(props) {
  const { indo_data } = props;

  return (
    <>
      <h4 className={styles.indo_data__coll}>
        {indo_data.status} <span>{indo_data.total}</span>
      </h4>
    </>
  );
}

export default IndoData;
