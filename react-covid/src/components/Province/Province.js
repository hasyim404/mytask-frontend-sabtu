function Province(props) {
  const { province, index } = props;

  return (
    <tr>
      {/* {console.log(province)} */}
      <td>{index + 1}.</td>
      <td>{province.name}</td>
      <td>{province.numbers.confirmed.toLocaleString()}</td>
      <td>{province.numbers.recovered.toLocaleString()}</td>
      <td>{province.numbers.treatment.toLocaleString()}</td>
      <td>{province.numbers.death.toLocaleString()}</td>
    </tr>
  );
}

export default Province;
