import React, { useState } from "react";
import "./Experience.css";

const experiences = [
  {
    start: "September 2025",
    end: "Present",
    company: "Nisum Consulting Pvt. Ltd.",
    role: "Conversational AI Engineer",
    color: "blue",
    description: "Working on AI and NLP solutions for enterprise clients."
  },
  {
    start: "April 2022",
    end: "June 2025",
    company: "Sensiple Software Solutions Pvt. Ltd.",
    role: "Conversational AI Engineer",
    color: "orange",
    description: "Developed chatbots and conversational interfaces."
  },
  {
    start: "July 2019",
    end: "June 2021",
    company: "Hyva India Pvt. Ltd.",
    role: "Planning Engineer",
    color: "yellow",
    description: "Managed production planning and scheduling."
  }
];

function Experience() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="timeline-container">
      <h1 className="timeline-title">🧑‍💻 My Experience</h1>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <div className="period-box end">{exp.end}</div>
            
            <div 
              className={`content ${activeIndex === index ? 'active' : ''}`}
              style={{ 
              backgroundColor: exp.color === 'blue' ? '#1e90ff' : 
                             exp.color === 'orange' ? '#ffa500' : '#ffff00'
            }}
            >
              <h3>{exp.company}</h3>
              <h4>{exp.role}</h4>
              {activeIndex === index && (
                <p className="description">{exp.description}</p>
              )}
            </div>

            <div className="period-box start">{exp.start}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;