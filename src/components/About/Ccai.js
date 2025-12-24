import React from "react";
import { Col, Row } from "react-bootstrap";
import ReactTooltip from "react-tooltip";

import { SiGooglecloud } from "react-icons/si";
import { MdSupportAgent, MdOutlineSyncAlt } from "react-icons/md";
import { FaRobot, FaPhoneAlt, FaExchangeAlt } from "react-icons/fa";

const conversationalAI = [
  { icon: <SiGooglecloud color="#4285F4" />, name: "Google CCAIP" },
  { icon: <FaRobot color="#00C853" />, name: "Dialogflow CX" },
  { icon: <FaRobot color="#5ee1f8ff" />, name: "Conversational Agent Design" },
  { icon: <MdSupportAgent color="#673AB7" />, name: "Agent Assist" },
  { icon: <MdOutlineSyncAlt color="#1E88E5" />, name: "Conversation Profiles" },
  { icon: <FaPhoneAlt color="#F44336" />, name: "IVR & Call Routing" },
  { icon: <FaExchangeAlt color="#009688" />, name: "VA to Live Agent Handoff" },
];

function ConversationalAIStack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {conversationalAI.map((item, index) => (
          <Col
            key={index}
            xs={4}
            md={2}
            className="tech-icons"
            data-tip={item.name}
            data-for="ca-tooltip"
          >
            {item.icon}
          </Col>
        ))}
      </Row>
      <ReactTooltip id="ca-tooltip" effect="solid" />
    </>
  );
}

export default ConversationalAIStack;
