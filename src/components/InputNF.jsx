import { useState } from "react";

function InputNF({ addNota }) {
  const [num, setNum] = useState("");
  const [vol, setVol] = useState("");

  function changeNum(e) {
    setNum(e.target.value);
  }

  function changeVol(e) {
    setVol(e.target.value);
  }

  function reset() {
    setNum("");
    setVol("");
  }

  function handleClick() {
    addNota(num, vol);
    reset();
  }

  return (
    <>
      <div>
        <span>Numero:</span>
        <input type="text" value={num} onChange={changeNum} />
        <span>Volumes:</span>
        <input type="text" value={vol} onChange={changeVol} />
        <button onClick={handleClick}>Adicionar</button>
      </div>
    </>
  );
}

export default InputNF;
