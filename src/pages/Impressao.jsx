import Destino from "../components/Destino";
import DB from "../DB";

function Impressao() {
  const destinos = DB.getDestinos();

  return (
    <>
      <h1>Controle de Transporte de Cargas</h1>

      {destinos.map((dest) => (
        <Destino dest={dest} key={dest} hasInput={false}></Destino>
      ))}
    </>
  );
}

export default Impressao;
