import html2pdf from "html2pdf.js";
import { createRoot } from "react-dom/client";
import { renderToStaticMarkup } from "react-dom/server";
import Impressao from "./pages/Impressao"

export async function makePDF() {
  const element = document.createElement("div");
  const dest = renderToStaticMarkup(<Impressao></Impressao>);
  element.innerHTML = dest;
  
  const opt = {
    margin: 1,
    filename: "myfile.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  html2pdf().set(opt).from(element).save();
}
