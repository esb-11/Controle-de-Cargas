import Destino from "../components/Destino";
import DB from "../DB";

function Impressao() {
  const destinos = DB.getDestinos();

  return (
    <>
      <h1>Impressao</h1>

      {destinos.map((dest) => (
        <Destino dest={dest} key={dest}></Destino>
      ))}
    </>
  );
}

export default Impressao;
