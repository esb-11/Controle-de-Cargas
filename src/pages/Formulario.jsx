import { useState } from "react";
import Destino from "../components/Destino";
import InputDest from "../components/InputDest";
import DB from "../DB";

function Formulario() {
  const [destinos, setDestinos] = useState(DB.getDestinos());

  function addDest(dest) {    
    setDestinos([...DB.getDestinos(), dest]);
  }

  return (
    <>
      <h1>Formulario</h1>

      {destinos.map((dest) => (
        <Destino dest={dest} key={dest} hasInput={true} ></Destino>
      ))}

      <InputDest addDest={addDest}></InputDest>
    </>
  );
}

export default Formulario;
