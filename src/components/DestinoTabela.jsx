import NotaFiscal from "./NotaFiscal";

function makeRows(notas, deleteNf) {
  const rows = [];

  let p1 = 0;
  let p2 = 1;

  while (p1 < notas.length) {
    const nf1 = notas[p1];
    const nf2 = notas[p2];
    rows.push(
      <tr key={nf1.id}>
        <NotaFiscal deleteNf={deleteNf} nf={nf1} righSide={false}></NotaFiscal>
        {nf2 && (
          <NotaFiscal deleteNf={deleteNf} nf={nf2} righSide={true}></NotaFiscal>
        ) || <><td></td><td></td></>}
      </tr>
    );
    p1 += 2;
    p2 += 2;
  }

  return rows;
}

function DestinoTabela({ destino, notas, deleteNf }) {
  const rows = makeRows(notas, deleteNf);

  return (
    <>
      <table>
        <thead>
          <tr className="title-row">
            <th colSpan={4} className="destino-title">
              <h3>Destino: {destino}</h3>
            </th>
          </tr>
          <tr>
            <th>Numero</th>
            <th>Volumes</th>
            <th>Numero</th>
            <th>Volumes</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
}

export default DestinoTabela;
