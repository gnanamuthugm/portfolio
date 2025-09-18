import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Electric from "../../Assets/Projects/electric_outage.png";
import Healthcare from "../../Assets/Projects/healthcare.png";
import Covid from "../../Assets/Projects/covid.png";
import DoctorDirectory from "../../Assets/Projects/Doctor_directory.png";
import PrescriptionRefill from "../../Assets/Projects/Prescription_refill.png";
import BloodDonation from "../../Assets/Projects/blood_donation.png";
import InsuranceClaim from "../../Assets/Projects/insurance.png";
import DentalClinic from "../../Assets/Projects/dental_clinic.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Healthcare}
              isBlog={false}
              title="Healthcare Appointment Assistant"
              description="Built a virtual assistant using Dialogflow CX to help patients schedule appointments, access lab results, and reschedule visits. Integrated webhooks for real-time validations and seamless backend communication."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Covid}
              isBlog={false}
              title="COVID Vaccination"
              description="Developed a smart voice/chat assistant for viewing vaccination slots, downloading certificates, and rescheduling appointments. Powered by Dialogflow CX with a custom Node.js webhook integration."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Electric}
              isBlog={false}
              title="Electric Outage Reporting"
              description="Created an IVR solution for electric utility customers to report outages and receive SMS updates. Built with Dialogflow CX, Google Cloud Functions, and Twilio for real-time alerts."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DoctorDirectory}
              isBlog={false}
              title="Doctor Directory & FAQs"
              description="Very relevant. The bot helps users find doctors, check availability, and answer common medical questions — ideal for a “Doctor Directory & FAQ” tool."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PrescriptionRefill}
              isBlog={false}
              title="Prescription Refill Assistant"
              description="Fully relevant. The description matches a pharmacy automation assistant that helps with refills, eligibility checks, status notifications, and integration with pharmacy systems."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BloodDonation}
              isBlog={false}
              title="Blood Donation"
              description="On point. It talks about scheduling blood donations, matching donors by type and location, and multilingual support — everything you'd expect for an NGO-focused donation assistant."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={InsuranceClaim}
              isBlog={false}
              title="Insurance Claim Assistant"
              description="Very accurate. Describes how the voicebot guides users through claims, checks statuses, and uploads documents — all essential parts of the insurance claims process."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DentalClinic}
              isBlog={false}
              title="Dental Clinic Virtual Assistant"
              description="Relevant and specific. Scheduling cleanings, oral hygiene Q&A, and reminders via SMS/email are perfect fits for a dental clinic bot."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
