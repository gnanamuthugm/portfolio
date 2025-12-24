import React from "react";
import { Col, Row } from "react-bootstrap";
import ReactTooltip from "react-tooltip";

import { SiSalesforce } from "react-icons/si";
import { FaPlug } from "react-icons/fa";
import { MdOutlineSyncAlt } from "react-icons/md";

const crmStack = [
  { icon: <SiSalesforce color="#00A1E0" />, name: "Salesforce (CTI & Case Creation)" },
  { icon: <FaPlug color="#4CAF50" />, name: "REST APIs" },
  { icon: <MdOutlineSyncAlt color="#673AB7" />, name: "Webhooks & Integrations" },
];

function CRMIntegrationStack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {crmStack.map((item, index) => (
          <Col
            key={index}
            xs={4}
            md={2}
            className="tech-icons"
            data-tip={item.name}
            data-for="crm-tooltip"
          >
            {item.icon}
          </Col>
        ))}
      </Row>
      <ReactTooltip id="crm-tooltip" effect="solid" />
    </>
  );
}

export default CRMIntegrationStack;
