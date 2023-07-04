import form_img from "../../assets/img/form_img.svg";
import Alert from "../Alert";
import StyledCovidForm from "./AddCovidForm.styled";

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
    <StyledCovidForm>
      <div className="container">
        <div className="form">
          {/* Left */}
          <div className="form__left">
            <img className="form__image" src={form_img} alt="" />
          </div>

          {/* Right */}
          <div className="form__right">
            <h2 className="form__title">Form Covid</h2>

            {/* Form */}
            <form className="form__areas" action="">
              {/* <label htmlFor="provinsi">Provinsi</label> */}
              <Label LFor="provinsi" LName="Provinsi" />
              <select
                className="form__select"
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
                className="form__select"
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

              <button className="form__button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </StyledCovidForm>
  );
}

export default AddCovidForm;
