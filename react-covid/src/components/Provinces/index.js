import styles from "./Provinces.module.css";
import { Title, Sub_Title } from "../Hero";

function Titles() {
  const titles = ["Kota", "Kasus", "Sembuh", "Meninggal", "Dirawat"];

  return (
    <tr>
      <th className={styles.provinces__no}>No</th>
      {titles.map((titles, index) => {
        return <th key={index}>{titles}</th>;
      })}
    </tr>
  );
}

function Table(props) {
  const { dataprov } = props;

  return (
    <div className={styles.provinces__table}>
      <table>
        <thead>
          <Titles dataprov={dataprov} />
        </thead>
        <tbody>
          {dataprov.provinces.length > 0 &&
            dataprov.provinces.map((data, no) => {
              return <DataCovid key={data.kota} data={data} no={no} />;
            })}
        </tbody>
      </table>
    </div>
  );
}

function DataCovid(props) {
  const { data } = props;
  const { no } = props;

  return (
    <tr>
      <td>{no + 1}.</td>
      <td>{data.kota}</td>
      <td>{data.kasus}</td>
      <td>{data.sembuh}</td>
      <td>{data.meninggal}</td>
      <td>{data.dirawat}</td>
    </tr>
  );
}

function Provinces(props) {
  const { dataprov } = props;

  return (
    <div className={styles.container}>
      <div className={styles.provinces}>
        <Title title="Provinsi" />
        <Sub_Title sub_title="Data Covid Berdasarkan Provinsi" />

        {/* Table */}
        <Table dataprov={dataprov} />
      </div>
    </div>
  );
}

export default Provinces;
