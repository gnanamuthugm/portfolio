import React from "react";
import { Col, Row } from "react-bootstrap";
import ReactTooltip from "react-tooltip"; // ✅ Tooltip

import {
  SiGooglecloud,
  SiAmazonaws,
  SiFirebase,
  SiGoogleanalytics,
} from "react-icons/si";
import { FaDatabase, FaMicrophoneAlt, FaCloudUploadAlt } from "react-icons/fa";
import { MdStorage, MdOutlineManageAccounts, MdInsights } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";
import { MdRecordVoiceOver } from "react-icons/md";
import { MdOutlineSyncAlt } from "react-icons/md";

const cloudServices = [
  { icon: <SiGooglecloud color="#4285F4" />, name: "Google Cloud Platform" },
  { icon: <MdOutlineManageAccounts color="#009688" />, name: "IAM" },
  { icon: <SiFirebase color="#FFCA28" />, name: "Cloud Function" },
  { icon: <MdStorage color="#7E57C2" />, name: "Cloud Run" },
  { icon: <BiLogIn color="#00BCD4" />, name: "Cloud Logging" },
  { icon: <FaMicrophoneAlt color="#F44336" />, name: "Speech to Text" },
  { icon: <MdRecordVoiceOver color="#4CAF50" />, name: "Text to Speech" },
  { icon: <FaCloudUploadAlt color="#4285F4" />, name: "Cloud Storage Bucket" },
  { icon: <FaDatabase color="#6C63FF" />, name: "Cloud Datastore" },
  { icon: <MdOutlineSyncAlt color="#1E88E5" />, name: "Pub/Sub" },
  { icon: <SiGoogleanalytics color="#4586F3" />, name: "BigQuery" },
  { icon: <MdInsights color="#673AB7" />, name: "Looker Studio" },
  { icon: <SiAmazonaws color="#FF9900" />, name: "AWS S3 Bucket" },
];

function Cloudstack() {
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

export default Cloudstack;
