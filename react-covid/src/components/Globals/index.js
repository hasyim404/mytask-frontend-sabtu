import styles from "./Globals.module.css";
import Global from "../Global";
import { Title, Sub_Title } from "../Hero";

function Globals(props) {
  const { globals } = props;
  return (
    <div className={styles.container}>
      <div className={styles.globals}>
        <Title title="Indonesia" />
        <Sub_Title sub_title="Data Covid Berdasarkan Indonesia" />

        {/* Show Data */}
        <div className={styles.globals__main}>
          {globals.indonesia.map(function (global) {
            return <Global key={global.status} global={global} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Globals;
