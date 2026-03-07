import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Gnanamuthu_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginBottom: "40px",
          }}
        >
          <p
            style={{
              color: "#cd5ff8",
              fontSize: "1.88rem",
              fontStyle: "italic",
              textAlign: "center",
              maxWidth: "800px",
              lineHeight: "1.6",
              padding: "0 20px",
            }}
            className="resume-heading"
          >
            "Thank you for visiting! I believe a great resume tells a story—feel free to explore mine below."
          </p>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "40px" }}>
          <a
            href={pdf}
            download="Gnanamuthu_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ maxWidth: "300px", textDecoration: "none" }}
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
