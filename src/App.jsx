import { useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import Formulario from "./components/Formulario";
import Display from "./components/Display";
import PDF from "./components/PDF";
import "./styles/App.css";
import html2pdf from "html2pdf.js";

function App() {
  const [notas, setNotas] = useState([]);

  function deleteNf(id) {
    const newArray = notas.filter((value) => value.id != id);
    setNotas(newArray);
  }

  function addNf(notaFiscal) {
    setNotas([...notas, notaFiscal]);
  }

  function makePDF(notas) {
    const doc = document.createElement("div");
    doc.innerHTML = renderToStaticMarkup(<PDF notas={notas}></PDF>);
    const opt = {
      margin: [0.5, 0.75],
      filename: "myfile.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().set(opt).from(doc).save();
  }

  return (
    <div className="app">
      <div className="menu">
        <Formulario addNf={addNf}></Formulario>
        <button
          onClick={() => {
            makePDF(notas);
          }}
        >
          Download PDF
        </button>
      </div>
      <Display notas={notas} deleteNf={deleteNf}></Display>
    </div>
  );
}

export default App;
