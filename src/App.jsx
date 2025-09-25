import Formulario from "./pages/Formulario";
import { makePDF } from "./makePDF.jsx";

function App() {
  return (
    <>
      <Formulario></Formulario>
      <button onClick={makePDF}>Make PDF</button>
    </>
  );
}

export default App;
