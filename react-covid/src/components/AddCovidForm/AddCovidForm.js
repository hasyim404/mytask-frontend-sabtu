import { useDispatch } from "react-redux";
import form_img from "../../assets/img/form_img.svg";
import Alert from "../Alert";
import StyledCovidForm from "./AddCovidForm.styled";
import { useState } from "react";
import { addProvinces } from "../../features/provincesSlices";
import data from "../../utils/constants/provinces";

function Label(props) {
  const { LFor, LName } = props;

  return (
    <>
      <label htmlFor={LFor}>{LName}</label>
    </>
  );
}

function AddCovidForm() {
  const dispatch = useDispatch();
  const kotaa = data;
  const cases = ["Kasus", "Sembuh", "Meninggal", "Dirawat"];

  const [formData, setFormData] = useState({
    kota: "",
    status: "",
    jumlah: "",
  });

  // Fungsi handleChange semua input form
  function handleChange(e) {
    // console.log(e.target.name, e.target.value);
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // 1 Error 1 State
  const [formError, setFormError] = useState({
    isTitleError: false,
    isDateError: false,
    isImageError: false,
    isTypeError: false,
  });

  // Destructing
  const { kota, status, jumlah } = formData;

  function validate() {
    if (kota === "") {
      setFormError((err) => {
        return {
          ...err,
          kota: true,
        };
      });
      return false;
    } else if (status === "") {
      setFormError((err) => {
        return {
          ...err,
          status: true,
          kota: false,
        };
      });
      return false;
    } else if (jumlah === "") {
      setFormError((err) => {
        return {
          ...err,
          jumlah: true,
          status: false,
        };
      });
      return false;
    } else {
      setFormError((err) => {
        return {
          ...err,
          kota: false,
          status: false,
          jumlah: false,
        };
      });
      return true;
    }
  }

  function submitData() {
    const newData = {
      kota: kota,
      status: status,
      jumlah: jumlah,
    };

    dispatch(addProvinces(newData));
  }

  function handleSubmit(event) {
    event.preventDefault();

    validate() && submitData();
  }

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
            <form className="form__areas" action="" onSubmit={handleSubmit}>
              <Label LFor="provinsi" LName="Provinsi" />
              <select
                className="form__select"
                name="kota"
                id="kota"
                value={kota}
                // defaultValue={""}
                onChange={handleChange}
              >
                {/* Option */}
                {kotaa.provinces.map(function (provinsi) {
                  return (
                    <option key={provinsi.kota} value={provinsi.kota}>
                      {provinsi.kota}
                    </option>
                  );
                })}
              </select>
              <Alert>{formError.kota && "*Provinsi wajib dipilih"}</Alert>

              <Label LFor="status" LName="Status" />
              <select
                className="form__select"
                name="status"
                id="status"
                onChange={handleChange}
                // defaultValue={""}
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
              <Alert>{formError.status && "*Status wajib dipilih"}</Alert>

              <Label LFor="jumlah" LName="Jumlah" />
              <input
                name="jumlah"
                id="jumlah"
                type="number"
                value={jumlah}
                onChange={handleChange}
              />
              <Alert>{formError.jumlah && "*Jumlah wajib di isi"}</Alert>

              <button className="form__button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </StyledCovidForm>
  );
}

export default AddCovidForm;
