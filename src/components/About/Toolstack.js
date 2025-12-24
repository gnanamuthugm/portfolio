import React from "react";
import { Col, Row } from "react-bootstrap";
import ReactTooltip from "react-tooltip";

import {
  SiVisualstudiocode,
  SiPostman,
  SiGithub,
  SiSlack,
  SiGit,
  SiJira,
  SiTrello
} from "react-icons/si";
import { FaChrome } from "react-icons/fa";

const tools = [
  { icon: <SiVisualstudiocode color="#007ACC" />, name: "VS Code" },
  { icon: <SiPostman color="#FF6C37" />, name: "Postman" },
  { icon: <SiGithub color="#FFFFFF" />, name: "GitHub" },
  { icon: <SiGit color="#F05032" />, name: "Git" },
  { icon: <SiJira color="#0052CC" />, name: "JIRA" },
  { icon: <SiTrello color="#0079BF" />, name: "Trello" },
  { icon: <FaChrome color="#4285F4" />, name: "Chrome DevTools" },
  { icon: <SiSlack color="#4A154B" />, name: "Slack" },
];

function ToolsStack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {tools.map((tool, index) => (
          <Col
            key={index}
            xs={4}
            md={2}
            className="tech-icons"
            data-tip={tool.name}
            data-for="tools-tooltip"
          >
            {tool.icon}
          </Col>
        ))}
      </Row>
      <ReactTooltip id="tools-tooltip" effect="solid" />
    </>
  );
}

export default ToolsStack;
