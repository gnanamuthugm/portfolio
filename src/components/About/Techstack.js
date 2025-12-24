import React from "react";
import { Col, Row } from "react-bootstrap";
import ReactTooltip from "react-tooltip";

import {
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiMongodb,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";

const programming = [
  { icon: <SiJavascript color="#F7DF1E" />, name: "JavaScript" },
  { icon: <SiNodedotjs color="#68A063" />, name: "Node.js" },
  { icon: <SiReact color="#61DAFB" />, name: "React" },
  { icon: <SiMongodb color="#4CAF50" />, name: "MongoDB" },
  { icon: <SiPostgresql color="#336791" />, name: "PostgreSQL / MySQL" },
  { icon: <SiMysql color="#00758F" />, name: "MySQL" },
];

function ProgrammingStack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {programming.map((item, index) => (
          <Col
            key={index}
            xs={4}
            md={2}
            className="tech-icons"
            data-tip={item.name}
            data-for="prog-tooltip"
          >
            {item.icon}
          </Col>
        ))}
      </Row>
      <ReactTooltip id="prog-tooltip" effect="solid" />
    </>
  );
}

export default ProgrammingStack;
