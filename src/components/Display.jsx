import DestinoTabela from "./DestinoTabela";

function groupByDestino(notas) {
  const result = {};
  const keys = [];

  notas.forEach((nf) => {
    if (!result[nf.destino]) {
      result[nf.destino] = [];
      keys.push(nf.destino);
    }
    result[nf.destino].push(nf);
  });

  return [result, keys];
}

function Display({ notas, deleteNf }) {
  const [nfByDestino, destinos] = groupByDestino(notas);

  return (
    <>
      <div className="display">
        {destinos.map((destino) => (
          <DestinoTabela
            key={destino}
            destino={destino}
            notas={nfByDestino[destino]}
            deleteNf={deleteNf}
          ></DestinoTabela>
        ))}
      </div>
    </>
  );
}

export default Display;
