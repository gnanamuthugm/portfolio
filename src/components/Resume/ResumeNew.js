import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Gnanamuthu_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginBottom: "-20px",
          }}
        >
          <p
            style={{
              color: "#cd5ff8",
              paddingRight: "45%",
              marginLeft: "45%",
              fontSize: "1.88rem",
              fontStyle: "italic",
              textAlign: "center",
            }}
            className="resume-heading"
          >
            “Thank you for visiting! I believe a great resume tells a story—feel
            free to explore mine below. I build AI that talks back (in a good
            way).”
          </p>
        </Row>

        <Row className="resume">
          {/* <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document> */}
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            className="d-flex flex-column align-items-center" // ensures vertical stacking & centered
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                scale={width > 786 ? 1.2 : 0.6}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="mb-4" // margin between pages
              />
            ))}
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <a
            href={pdf}
            download="Gnanamuthu_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ maxWidth: "250px", textDecoration: "none" }}
          >
            <Button variant="primary" style={{ width: "100%" }}>
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </a>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
