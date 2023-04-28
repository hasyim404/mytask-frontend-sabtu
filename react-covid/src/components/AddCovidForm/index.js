import styles from "./AddCovidForm.module.css";
import form_img from "../../assets/img/form_img.svg";
import Alert from "../Alert";

function Label(props) {
  const { LFor, LName } = props;

  return (
    <>
      <label htmlFor={LFor}>{LName}</label>
    </>
  );
}

function AddCovidForm(props) {
  const { dataprov, setData } = props;
  const cases = ["Kasus", "Sembuh", "Meninggal", "Dirawat"];

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {/* Left */}
        <div className={styles.form__left}>
          <img className={styles.form__image} src={form_img} alt="" />
        </div>

        {/* Right */}
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Form Covid</h2>

          {/* Form */}
          <form
            className={styles.form__areas}
            action=""
            // onSubmit={handleSubmit}
          >
            {/* <label htmlFor="provinsi">Provinsi</label> */}
            <Label LFor="provinsi" LName="Provinsi" />
            <select
              className={styles.form__select}
              name="provinces"
              id="provinces"
              defaultValue={""}
              // value={provinces}
              // onChange={handleProvinces}
            >
              {/* Option */}
              {dataprov.provinces.map(function (province) {
                return (
                  <option key={province.kota} value={province.kota}>
                    {province.kota}
                  </option>
                );
              })}
            </select>

            <Label LFor="status" LName="Status" />
            <select
              className={styles.form__select}
              name="status"
              id="status"
              defaultValue={""}
              // value={val}
              // onChange={onc}
            >
              {/* Option */}
              {cases.map((casee, index) => {
                return (
                  <option key={index} value={casee}>
                    {casee}
                  </option>
                );
              })}
            </select>

            <Label LFor="jumlah" LName="Jumlah" />
            <input name="jumlah" id="jumlah" type="number" />

            <button className={styles.form__button} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCovidForm;
