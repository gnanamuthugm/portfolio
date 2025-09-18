import React from "react";
import { Col, Row } from "react-bootstrap";
import ReactTooltip from "react-tooltip"; // ✅ Correct import

import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiGithub,
  SiGooglecloud,
  SiWordpress,
  SiDrupal,
} from "react-icons/si";

const tools = [
  { icon: <SiVisualstudiocode color="#007ACC" />, name: "VS Code" },
  { icon: <SiPostman color="#FF6C37" />, name: "Postman" },
  { icon: <SiSlack color="#4A154B" />, name: "Slack" },
  { icon: <SiVercel />, name: "Vercel" },
  { icon: <SiGithub />, name: "GitHub" },
  { icon: <SiWordpress color="#21759B" />, name: "WordPress" },
  { icon: <SiDrupal color="#0678BE" />, name: "Drupal" },
];



function Toolstack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {tools.map((tool, index) => (
          <Col
            key={index}
            xs={4}
            md={2}
            className="tech-icons"
            data-tip={tool.name}      // ✅ Use data-tip
            data-for="tools-tooltip"  // ✅ Use data-for
          >
            {tool.icon}
          </Col>
        ))}
      </Row>
      <ReactTooltip id="tools-tooltip" effect="solid" />
    </>
  );
}

export default Toolstack;
