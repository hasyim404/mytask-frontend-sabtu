import styles from "./Indo_Datas.module.css";
import IndoData from "../Indo_Data";

function IndoDatas(props) {
  const { indo_datas } = props;
  return (
    <div className={styles.container}>
      <div className={styles.indo_datas}>
        <h2 className={styles.indo_datas__title}>Indonesia</h2>
        <p className={styles.indo_datas__sub_title}>
          Data Covid Berdasarkan Indonesia
        </p>

        {/* Show Data */}

        <div className={styles.indo_datas__main}>
          {/* Looping */}
          {indo_datas.map(function (indo_data) {
            return <IndoData key={indo_data.id} indo_data={indo_data} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default IndoDatas;
