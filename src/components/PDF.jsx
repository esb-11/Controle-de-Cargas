import Display from "./Display";
import "../styles/PDF.css";

function PDF({ notas }) {
  return (
    <>
      <div className="pdf">
        <div className="pdf-header">
          <div className="pdf-title">CONTROLE DE TRANSPORTE DE CARGA</div>
        </div>
        <div className="transporte-info">
          <div className="transportadora">
            <span>Transportadora: </span>
            <span>HG Log</span>
          </div>
          <div className="data">
            <span>data: </span>
            <span>12/12/2025</span>
          </div>
        </div>
        <Display notas={notas}></Display>
        <div className="pdf-footer">
          <p>Footer</p>
        </div>
      </div>
    </>
  );
}

export default PDF;
