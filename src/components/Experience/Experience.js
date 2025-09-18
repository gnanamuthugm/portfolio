import React from "react";
import "./Experience.css";

const experiences = [
  {
    end: "Apr 2022",
    start: "Jun 2025",
    company: "Sensiple Software Solutions Pvt. Ltd.",
    role: "Conversational AI Engineer",
    color: "green",
  },
  // {
  //   end: "Jul 2021",
  //   start: "Mar 2022",
  //   company: "QSpiders, Chennai (Chrompet)",
  //   role: "Java Fullstack Development Course",
  //   color: "lightblue",
  // },
  {
    end: "Jun 2019",
    start: "Jun 2021",
    company: "Hyva India Pvt. Ltd.",
    role: "Planning Engineer",
    color: "yellow",
  }
];

function Experience() {
  return (
    <div className="timeline-container">
      <h1 className="timeline-title">🧑‍💻 My Experience</h1>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            {/* Start Date (S - near card) */}
            <div className="period-box start">{exp.start}</div>

            {/* Company Card */}
            <div className="content" style={{ backgroundColor: exp.color }}>
              <h3>{exp.company}</h3>
              <h4>{exp.role}</h4>
            </div>

            {/* End Date (E - near central line) */}
            <div className="period-box end">{exp.end}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
