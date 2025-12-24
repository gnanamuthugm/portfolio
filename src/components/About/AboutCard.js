import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">GNANAMUTHU GOVINTHAN</span> from{" "}
            <span className="purple">Chennai, India.</span>
            <br />
            <br />
            I'm a <b className="purple">Conversational AI Engineer</b> with over
            3+ years of experience building intelligent IVR and chatbot
            solutions using <b className="purple">Dialogflow CX</b>,{" "}
            <b className="purple">Node.js</b>, and{" "}
            <b className="purple">Google Cloud Platform</b>. I’ve designed and
            deployed voicebots that reduced call handling time by{" "}
            <b className="purple">25%</b>, improved resolution speed by{" "}
            <b className="purple">15%</b>, and automated more than{" "}
            <b className="purple">12 complex workflows</b> across telecom and
            utility projects.
            <br />
            <br />
            My expertise includes crafting multi-turn conversation flows,
            integrating APIs and webhooks, and enabling seamless live agent
            escalation with <b className="purple">CCAI</b> and{" "}
            <b className="purple">Agent Assist</b>. I'm passionate about
            creating natural language experiences that improve contact center
            performance and drive better customer engagement.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning AI Tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring AI Events
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "We can’t change yesterday, but we can build tomorrow"
          </p>
          <footer className="blockquote-footer">GNANAMUTHU GOVINTHAN</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
