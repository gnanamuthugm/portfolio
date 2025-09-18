import React from "react";
import { Col, Row } from "react-bootstrap";
import ReactTooltip from "react-tooltip";

import {
  DiJavascript1, DiReact, DiNodejs, DiMongodb, DiGit,
} from "react-icons/di";
import {
  SiNextdotjs, SiPostgresql, SiHtml5, SiCss3, SiBootstrap,
  SiTailwindcss, SiMysql,
} from "react-icons/si";

const techStackIcons = [
  { icon: <SiHtml5 color="#E34F26" />, name: "HTML5" },
  { icon: <SiCss3 color="#1572B6" />, name: "CSS3" },
  { icon: <SiBootstrap color="#7952B3" />, name: "Bootstrap" },
  { icon: <SiTailwindcss color="#06B6D4" />, name: "Tailwind CSS" },
  { icon: <DiJavascript1 color="#F7DF1E" />, name: "JavaScript" },
  { icon: <DiReact color="#61DAFB" />, name: "React" },
  { icon: <SiNextdotjs color="" />, name: "Next.js" },
  { icon: <DiNodejs color="#339933" />, name: "Node.js" },
  { icon: <DiGit color="#F05032" />, name: "Git" },
  { icon: <DiMongodb color="#47A248" />, name: "MongoDB" },
  { icon: <SiPostgresql color="#4169E1" />, name: "PostgreSQL" },
  { icon: <SiMysql color="#4479A1" />, name: "MySQL" },
];

function Techstack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {techStackIcons.map((tech, index) => (
          <Col
            key={index}
            xs={4}
            md={2}
            className="tech-icons"
            data-tip={tech.name}
            data-for="tech-tooltip"
          >
            {tech.icon}
          </Col>
        ))}
      </Row>
      <ReactTooltip id="tech-tooltip" effect="solid" />
    </>
  );
}

export default Techstack;
