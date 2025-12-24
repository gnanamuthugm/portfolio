import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Cloudstack from "./Cloudstack";
import ConversationalAIStack from "./Ccai";
import CRMIntegrationStack from "./crm";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          🧠 <strong className="purple">Conversational AI & CCAIP</strong>
        </h1>
        <ConversationalAIStack />

        <h1 className="project-heading">
          ☁️ <strong className="purple">Cloud Services</strong> I Work With
        </h1>
        <Cloudstack />

        <h1 className="project-heading">
          🧩 <strong className="purple">CRM & Integrations</strong>
        </h1>
        <CRMIntegrationStack />

        <h1 className="project-heading">
          💻 <strong className="purple">Programming & Databases</strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          🛠️ <strong className="purple">Tools</strong> I Use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
