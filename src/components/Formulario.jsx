import { useState } from "react";
import FormInput from "./FormInput";

const DEFAULT_NF = {
  numero: "",
  volumes: "",
  destino: "",
  id: crypto.randomUUID(),
};

function Formulario({ addNf }) {
  const [notaFiscal, setNotaFiscal] = useState(DEFAULT_NF);

  function handleSubmit(e) {
    e.preventDefault();
    addNf(notaFiscal);
    reset();
  }

  function reset() {
    setNotaFiscal({
      ...notaFiscal,
      numero: "",
      volumes: "",
      id: crypto.randomUUID(),
    });
  }

  function setDestino(destino) {
    setNotaFiscal({ ...notaFiscal, destino });
  }

  function setNumero(numero) {
    setNotaFiscal({ ...notaFiscal, numero });
  }

  function setVolumes(volumes) {
    setNotaFiscal({ ...notaFiscal, volumes });
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          name={"Destino"}
          value={notaFiscal.destino}
          setValue={setDestino}
        ></FormInput>
        <FormInput
          name={"Numero"}
          value={notaFiscal.numero}
          setValue={setNumero}
        ></FormInput>
        <FormInput
          name={"Volumes"}
          value={notaFiscal.volumes}
          setValue={setVolumes}
        ></FormInput>
        <input type="submit" value="Adicionar" />
      </form>
    </>
  );
}

export default Formulario;
