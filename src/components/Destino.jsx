import { useState } from "react";
import DB from "../DB";
import NotaFiscal from "./NotaFiscal";
import InputNF from "./InputNF";

function makeTable(notas) {
  const table = [[]];
  let row = 0;

  for (let i = 0; i < notas.length; i++) {
    table[row].push(
      <NotaFiscal
        num={notas[i].num}
        vol={notas[i].vol}
        key={notas[i].id}
      ></NotaFiscal>
    );

    if (table[row].length >= 2 && i + 1 < notas.length) {
      table.push([]);
      row += 1;
    }
  }

  return table;
}

function Destino({ dest, hasInput }) {
  const [notas, setNotas] = useState(DB.getNotas(dest));
  const table = notas ? makeTable(notas) : [];
    
  function addNota(num, vol) {
    DB.addNota(dest, num, vol);
    setNotas([...DB.getNotas(dest)]);
  }

  return (
    <div className="dest-container">
      <table>
        <thead>
          <tr>
            <th colSpan={4}>{dest}</th>
          </tr>
          <tr>
            <th>Nota Fiscal</th>
            <th>Volumes</th>
            <th>Nota Fiscal</th>
            <th>Volumes</th>
          </tr>
        </thead>
        <tbody>
          {table.map((row) => (
            <tr key={row[0].key}>{row}</tr>
          ))}
        {hasInput ? (<tr>
          <td colSpan={4}>
            <InputNF addNota={addNota}></InputNF>
          </td>
        </tr>) : null}
        </tbody>
      </table>
    </div>
  );
}

export default Destino;
