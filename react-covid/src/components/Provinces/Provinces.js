import StyledProvinces from "./Provinces.styled";

function Provinces(props) {
  const { dataprov } = props;
  const titles = ["Kota", "Kasus", "Sembuh", "Meninggal", "Dirawat"];

  return (
    <StyledProvinces>
      <div className="container">
        <div className="provinces">
          <h2 className="provinces__title">Provinsi</h2>
          <p className="globals__sub_title">Data Covid Berdasarkan Provinsi</p>

          {/* Table */}
          <div className="provinces__table">
            <table>
              <thead>
                <tr>
                  <th className="provinces__no">No</th>
                  {titles.map((titles, index) => {
                    return <th key={index}>{titles}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {dataprov.provinces.length > 0 &&
                  dataprov.provinces.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}.</td>
                        <td>{data.kota}</td>
                        <td>{data.kasus}</td>
                        <td>{data.sembuh}</td>
                        <td>{data.meninggal}</td>
                        <td>{data.dirawat}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </StyledProvinces>
  );
}

export default Provinces;
