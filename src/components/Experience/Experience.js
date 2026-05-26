import React, { useState, useEffect } from "react";
import "./Experience.css";
import Particle from "../Particle";

const experiences = [
  {
    start: "September 2025",
    end: "Present",
    company: "Nisum Consulting Pvt. Ltd.",
    role: "Senior Software Engineer",
    color: "blue",
  },
  {
    start: "April 2022",
    end: "June 2025",
    company: "Sensiple Software Solutions Pvt. Ltd.",
    role: "Junior Developer",
    color: "orange",
  },
  {
    start: "January 2020",
    end: "June 2021",
    company: "Hyva India Pvt. Ltd.",
    role: "Jr Engineer PPC",
    color: "yellow",
  },
];

// Parse "Month YYYY" or "Present" → Date (1st of that month)
function parseMonthYear(str) {
  if (!str || str.trim().toLowerCase() === "present") {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  }
  const monthMap = {
    January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
    July: 6, August: 7, September: 8, October: 9, November: 10, December: 11,
  };
  const parts = str.trim().split(" ");
  return new Date(parseInt(parts[1]), monthMap[parts[0]], 1);
}

// Singular / Plural: 1 year | 2 years | 1 month | 3 months
function fmt(value, unit) {
  if (value === 0) return null;
  return `${value} ${unit}${value === 1 ? "" : "s"}`;
}

// Returns { years, months }
// Logic: from start month up to (and including) current/end month
function getDurationParts(startStr, endStr) {
  const start = parseMonthYear(startStr);
  const end = parseMonthYear(endStr);

  // Difference in months — from start of startMonth to start of endMonth
  // e.g. Sep 2025 → Sep 2025 = 1 month (just started, 1 month counted)
  // Sep 2025 → Oct 2025 = 2 months, etc.
  let totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1; // +1 to count the starting month

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  return { years, months };
}

// Two-line badge: "1 year" on first line, "6 months" on second line
// If exactly 12 months → shows "1 year" only (no "0 months")
function DurationBadge({ startStr, endStr }) {
  const { years, months } = getDurationParts(startStr, endStr);
  const yearLine = fmt(years, "year");
  const monthLine = fmt(months, "month");

  return (
    <div className="duration-badge">
      {yearLine && <span className="dur-line">{yearLine}</span>}
      {monthLine && <span className="dur-line">{monthLine}</span>}
    </div>
  );
}

// Total experience — returns { yearPart, monthPart }
function calcTotalExp(expList) {
  let total = 0;
  expList.forEach((exp) => {
    const { years, months } = getDurationParts(exp.start, exp.end);
    total += years * 12 + months;
  });
  const y = Math.floor(total / 12);
  const m = total % 12;
  return {
    yearPart: fmt(y, "year"),
    monthPart: fmt(m, "month"),
  };
}

function Experience() {
  // Re-render every minute so "Present" company auto-updates month by month
  const [, forceUpdate] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => forceUpdate((n) => n + 1), 60000);
    return () => clearInterval(timer);
  }, []);

  const { yearPart, monthPart } = calcTotalExp(experiences);

  return (
    <section>
      <Particle />
      <div className="timeline-container">

        {/* ── Title + Total Experience box ── */}
        <div className="title-row">
          <h1 className="timeline-title">
            🧑‍💻 My Experience
            <span className="total-exp-inline">
              {yearPart && <span className="total-exp-value">{yearPart}</span>}
              {monthPart && <span className="total-exp-value">{monthPart}</span>}
            </span>
          </h1>
        </div>

        {/* ── Timeline ── */}
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="period-box end">{exp.end}</div>

              <div
                className="content"
                style={{
                  backgroundColor:
                    exp.color === "blue"
                      ? "#1e90ff"
                      : exp.color === "orange"
                      ? "#ffa500"
                      : "#ffff00",
                }}
              >
                <h3>{exp.company}</h3>
                <h4>{exp.role}</h4>
                <DurationBadge startStr={exp.start} endStr={exp.end} />
              </div>

              <div className="period-box start">{exp.start}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;
