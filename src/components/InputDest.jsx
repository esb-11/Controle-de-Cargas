import { useState } from "react";

function InputDest({addDest}) {
  const [dest, setDest] = useState("");

  function handleChange(e) {
    setDest(e.target.value);
  }

  function handleClick() {
    if (dest == "") return;
    setDest("");
    addDest(dest);
  }

  return (
    <div>
      <span>Destino</span>
      <input type="text" value={dest} onChange={handleChange} />
      <button onClick={handleClick}>Adicionar</button>
    </div>
  );
}

export default InputDest;
