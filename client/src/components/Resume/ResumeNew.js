import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/CV ESP Tomas Alejandro Farias - DEV.pdf"
import pdfEng from "../../Assets/CV ENG Tomas Alejandro Farias - DEV.pdf"
import {useDispatch, useSelector} from 'react-redux';
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/soumyajit4419/portfolio/master/src/Assets/Soumyajit_Behera-BIT_MESRA.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const ingles = useSelector((state) => state.ingles)
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        {
          ingles ?
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button variant="primary" href={pdfEng} target="_blank">
              <AiOutlineDownload />
              &nbsp;{ingles ? 'Download CV' : 'Descargar CV'}
            </Button>
          </Row>
          :
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button variant="primary" href={pdf} target="_blank">
              <AiOutlineDownload />
              &nbsp;{ingles ? 'Download CV' : 'Descargar CV'}
            </Button>
          </Row>
        }
        {
          ingles ?
          <Row className="resume">
            <Document file={pdfEng}>
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </Row>
          :
        <Row className="resume">
          <Document file={pdf}>
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
        }

        {
          ingles ?
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button variant="primary" href={pdfEng} target="_blank">
              <AiOutlineDownload />
              &nbsp;{ingles ? 'Download CV' : 'Descargar CV'}
            </Button>
          </Row>
          :
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button variant="primary" href={pdf} target="_blank">
              <AiOutlineDownload />
              &nbsp;{ingles ? 'Download CV' : 'Descargar CV'}
            </Button>
          </Row>
        }
      </Container>
    </div>
  );
}

export default ResumeNew;
