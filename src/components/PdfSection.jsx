import React, { useState } from "react";
import pdfFile from "../assets/QEGO.pdf";
import pdfFileOld from "../assets/QEGO Old.pdf";
import "./PDFSection.css";
import { toast } from "react-toastify";

const PdfSection = () => {
  const [pdfFileName, setPdfFileName] = useState(pdfFile);
  const [isClickedWaves, setIsClickedWaves] = useState(false);
  const [isClickedQEGO, setIsClickedQEGO] = useState(false);
  return (
    <div
      id="pdf"
      className="md:h-screen h-full w-screen flex gap-x-10 md:flex-row flex-col-reverse gap-y-5 md:gap-y-0 px-5 md:px-10 py-10 md:py-20 "
    >
      <div className="w-full md:w-2/4 h-full">
        <a href={pdfFileName} target="_blank" rel="noopener noreferrer">
          <object
            data={pdfFileName}
            type="application/pdf"
            className="w-full h-96 md:h-full"
          >
            <p>
              It appears you don't have a PDF plugin for this browser. No
              biggie... you can{" "}
              <a href={pdfFileName}>click here to download the PDF file.</a>
            </p>
          </object>
        </a>
      </div>

      <div className="flex flex-col items-start w-full gap-y-20 md:w-2/4 mt-5">
        <div className="flex flex-col gap-y-10 items-start">
          <span
            style={{ fontWeight: 800 }}
            className="text-3xl md:text-6xl font-bold text-[#0e4753]"
          >
            Prespective
          </span>
          <span className="traditional-css-equivalent">
            Get the insights of the future through
            <br></br>Our Perspectives
            <br></br>in various categories
          </span>
          <div className="button-row">
            <div className="dropdown">
              <button className="title">Quantum</button>
              <div className="category">
                <a
                  onMouseEnter={() => setPdfFileName(pdfFile)}
                  onMouseLeave={() => {
                    !isClickedQEGO && setPdfFileName(pdfFileOld);
                  }}
                  onClick={() => {
                    setPdfFileName(pdfFile);
                    setIsClickedQEGO(true);
                    setIsClickedWaves(false);
                  }}
                >
                  QEGO
                </a>
                <a
                  onMouseEnter={() => setPdfFileName(pdfFileOld)}
                  onMouseLeave={() => {
                    !isClickedWaves && setPdfFileName(pdfFile);
                  }}
                  onClick={() => {
                    setPdfFileName(pdfFileOld);
                    setIsClickedWaves(true);
                    setIsClickedQEGO(false);
                  }}
                >
                  WAVES
                </a>
              </div>
            </div>
            <div className="dropdown">
              <button className="title">Energy</button>
              <div className="category">
                <a
                  onClick={() => {
                    toast.warning("This Project will be out by June 2024");
                  }}
                >
                  PEG
                </a>
                <a
                  onClick={() => {
                    toast.warning("This Project will be out by May 2024");
                  }}
                >
                  B-EARTH
                </a>
              </div>
            </div>
            <div className="dropdown">
              <button className="title">Machines</button>
              <div className="category">
                <a
                  onClick={() => {
                    toast.warning("This Project will be out by Augast 2024");
                  }}
                >
                  D-DRONE
                </a>
                <a
                  onClick={() => {
                    toast.warning("This Project will be out by May 2024");
                  }}
                >
                  SARA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfSection;
