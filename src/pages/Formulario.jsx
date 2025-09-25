import Destino from "../components/Destino";
import DB from "../data";

function Formulario() {
  const destinos = DB.getDestinos();

  return (
    <>
      <h1>Formulario</h1>

      {destinos.map((dest) => (
        <Destino dest={dest} key={dest}></Destino>
      ))}
    </>
  );
}

export default Formulario;
