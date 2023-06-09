import { useState, useEffect } from "react";

function Counter() {
  let [angka, setAngka] = useState(0);

  function addAngka() {
    setAngka(angka + 1);
    console.log("## angka:", angka);
  }

  useEffect(
    function () {
      console.log("## component di-mount/update");

      // Akses DOM
      document.title = `Angka: ${angka}`;
    },
    [angka]
  );

  console.log("## componen di-render");

  return (
    <div id="counter">
      <p>Hasil: {angka}</p>
      <button onClick={addAngka}>Add</button>
    </div>
  );
}

export default Counter;
