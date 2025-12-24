import React from "react";
import { Col, Row } from "react-bootstrap";
import ReactTooltip from "react-tooltip";

import { SiGooglecloud, SiAmazonaws } from "react-icons/si";
import { MdStorage, MdOutlineManageAccounts } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdOutlineSyncAlt } from "react-icons/md";
import { MdBuild, MdOutlineSupportAgent } from "react-icons/md";
import { MdMonitorHeart, MdBugReport } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";

const cloudServices = [
  // Core Cloud
  { icon: <SiGooglecloud color="#4285F4" />, name: "Google Cloud Platform" },
  { icon: <MdOutlineManageAccounts color="#009688" />, name: "IAM" },

  // Compute & Messaging
  { icon: <MdStorage color="#7E57C2" />, name: "Cloud Functions" },
  { icon: <MdBuild color="#1E88E5" />, name: "Cloud Run" },
  { icon: <MdOutlineSyncAlt color="#1E88E5" />, name: "Pub/Sub" },

  // Storage & Data
  { icon: <FaCloudUploadAlt color="#4285F4" />, name: "Cloud Storage" },
  { icon: <FaDatabase color="#6C63FF" />, name: "Cloud Datastore / Firestore" },

  // Observability
  { icon: <MdMonitorHeart color="#4CAF50" />, name: "Cloud Monitoring" },
  { icon: <MdBugReport color="#F44336" />, name: "Log Explorer" },

  // Support & Ops
  { icon: <MdOutlineSupportAgent color="#FF9800" />, name: "Google Support Case Creation" },

  // Secondary Cloud
  { icon: <SiAmazonaws color="#FF9900" />, name: "AWS (Basic)" },
];

function CloudStack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {cloudServices.map((service, index) => (
          <Col
            key={index}
            xs={4}
            md={2}
            className="tech-icons"
            data-tip={service.name}
            data-for="cloud-tooltip"
          >
            {service.icon}
          </Col>
        ))}
      </Row>
      <ReactTooltip id="cloud-tooltip" effect="solid" />
    </>
  );
}

export default CloudStack;
