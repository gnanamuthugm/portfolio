import React, { useState, useEffect } from "react";
import "./EmploymentDetails.css";
import Particle from "../Particle";

const experiences = [
  {
    start: "25 June 2026",
    end: "Present",
    company: "Cognizant Pvt. Ltd.",
    role: "Tech Lead",
    location: "Chennai",
    color: "green",
    employerDetails: {
      organizationName: "Cognizant Technology Solutions",
      country: "India",
      state: "Tamil Nadu",
      city: "Chennai",
      employerPhone: "04442096000",
      employeeId: "5021200",
      jobTitle: "Tech Lead",
      employmentType: "Hybrid",
      supervisorName: "Selvaganeasan R",
      supervisorTitle: "Associate Director",
      supervisorPhone: "8754401054",
      supervisorEmail: "Selvaganesan.Rajashanmugam@cognizant.com",
      hrName: "Harshitha G",
      hrPhone: "8970116759",
      hrEmail: "Harshitha.GS2@cognizant.com",
      leavingReason: "N/A - Currently Employed",
      employerAddress: "Cognizant Technology Solutions, MEPZ - SEZ, Tambaram, Chennai, Tamil Nadu 600045",
      zipcode: "600045",
    },
  },
  {
    start: "September 2025",
    end: "22 June 2026",
    company: "Nisum Consulting Pvt Ltd",
    role: "Senior Software Engineer",
    location: "Hyderabad",
    color: "blue",
    employerDetails: {
      organizationName: "Nisum Consulting Pvt Ltd",
      country: "India",
      state: "Telangana",
      city: "Hyderabad",
      employerPhone: "9182546630",
      employeeId: "42167",
      jobTitle: "Senior Software Engineer",
      employmentType: "Full Time",
      supervisorName: "Uma Rao",
      supervisorTitle: "Senior Executive",
      supervisorPhone: "9182546630",
      supervisorEmail: "uronanki@nisum.com",
      hrName: "Premkumar Bejugam",
      hrPhone: "9980557080",
      hrEmail: "pbejugam@nisum.com",
      leavingReason: "Location Preference",
      employerAddress: "Nisum Consulting Private Limited Corner 29, Plot #16 and #29, Survey #54, Near KIMS Hospital, Kondapur Main Junction, Kondapur, Serilingampally, Hyderabad - 500084, Telangana, India.",
      zipcode: "500084",
    },
  },
  {
    start: "April 2022",
    end: "June 2025",
    company: "Sensiple Software Solutions Pvt. Ltd.",
    role: "Junior Developer",
    location: "Chennai",
    color: "orange",
    employerDetails: {
      organizationName: "Sensiple Software Solutions Pvt Ltd",
      country: "India",
      state: "Tamil Nadu",
      city: "Chennai",
      employerPhone: "9566334852",
      employeeId: "3137",
      jobTitle: "Junior Developer",
      employmentType: "Full Time",
      supervisorName: "Suresh Vadivel",
      supervisorTitle: "Manager",
      supervisorPhone: "9080408071",
      supervisorEmail: "sureshvadivel.a@sensiple.com",
      hrName: "Rajeshwari",
      hrPhone: "9566334852",
      hrEmail: "rajesh@sensiple.com",
      leavingReason: "Family Reasons",
      employerAddress: "Sensiple Software Solutions Pvt Ltd, Plot: 9/A15, SIPCOT IT Park, Padur Post, Siruseri Chennai - 603103",
      zipcode: "603103",
    },
  },
  {
    start: "January 2020",
    end: "June 2021",
    company: "TeamLease Services Limited",
    role: "Jr Engineer PPC",
    location: "Bangalore",
    color: "yellow",
    employerDetails: {
      organizationName: "TeamLease Services Limited",
      country: "India",
      state: "Karnataka",
      city: "Bangalore",
      employerPhone: "8033002345",
      employeeId: "1792759",
      jobTitle: "Jr Engineer PPC",
      employmentType: "Full Time",
      supervisorName: "Sugumar",
      supervisorTitle: "Manager",
      supervisorPhone: "9036026880",
      supervisorEmail: "k.s@hyva.com",
      hrName: "Arun",
      hrPhone: "9148841112",
      hrEmail: "a.m@hyva.com",
      leavingReason: "Career Growth",
      employerAddress: "TeamLease Services Limited, BMTC Commercial Complex, 6th Floor, 80 Feet Road, Koramangala, Bangalore, Karnataka - 560095",
      zipcode: "560095",
    },
  },
];

function parseMonthYear(str) {
  if (!str || str.trim().toLowerCase() === "present") {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  }

  const date = new Date(str);

  if (!isNaN(date.getTime())) {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }

  const monthMap = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  };

  const parts = str.trim().split(" ");

  return new Date(Number(parts[1]), monthMap[parts[0]], 1);
}

function fmt(value, unit) {
  if (value === 0) return null;
  return `${value} ${unit}${value === 1 ? "" : "s"}`;
}

function getDurationParts(startStr, endStr) {
  const start = parseMonthYear(startStr);
  const end = parseMonthYear(endStr);

  let totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  return { years, months };
}

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

function EmploymentDetails() {
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
        <div className="title-row">
          <h1 className="timeline-title">
            🧑‍💻 Employment Details
            {/* <span className="total-exp-inline">
              {yearPart && <span className="total-exp-value">{yearPart}</span>}
              {monthPart && (
                <span className="total-exp-value">{monthPart}</span>
              )}
            </span> */}
          </h1>
        </div>

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
                    exp.color === "green"
                      ? "#28a745"
                      : exp.color === "blue"
                        ? "#1e90ff"
                        : exp.color === "orange"
                          ? "#ffa500"
                          : "#ffff00",
                }}
              >
                <h3>{exp.company}</h3>
                <h4>{exp.role}</h4>
                <div className="badge-row">
                  <DurationBadge startStr={exp.start} endStr={exp.end} />

                  <div className="location-badge">
                    <span className="location-icon">📍</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {exp.employerDetails && (
                <div
                  className={`employer-box employer-box-${exp.company.toLowerCase().replace(/\s+/g, '-')}`}
                  style={{
                    backgroundColor:
                      exp.color === "green"
                        ? "#28a745"
                        : exp.color === "blue"
                          ? "#1e90ff"
                          : exp.color === "orange"
                            ? "#ffa500"
                            : "#ffff00",
                  }}
                >
                  <div className="employer-detail-badge">
                    <div className="employer-detail-center">
                      <strong>Employment Type:</strong> {exp.employerDetails.employmentType}
                    </div>
                    <div className="employer-details-row">
                      <div className="employer-details-column">
                        <div className="employer-detail-section-title">Manager Details:</div>
                        <div className="employer-detail-item">
                          <strong>Name:</strong> {exp.employerDetails.supervisorName}
                        </div>
                        <div className="employer-detail-item">
                          <strong>No:</strong> {exp.employerDetails.supervisorPhone}
                        </div>
                        <div className="employer-detail-item">
                          <strong>Mail ID:</strong> {exp.employerDetails.supervisorEmail}
                        </div>
                      </div>
                      <div className="employer-details-column">
                        <div className="employer-detail-section-title">HR Details:</div>
                        <div className="employer-detail-item">
                          <strong>Name:</strong> {exp.employerDetails.hrName}
                        </div>
                        <div className="employer-detail-item">
                          <strong>No:</strong> {exp.employerDetails.hrPhone}
                        </div>
                        <div className="employer-detail-item">
                          <strong>Mail ID:</strong> {exp.employerDetails.hrEmail}
                        </div>
                      </div>
                    </div>
                    <div className="employer-detail-center">
                      <strong>Leaving Reason:</strong> {exp.employerDetails.leavingReason}
                    </div>
                  </div>
                </div>
              )}

              <div className="period-box start">{exp.start}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EmploymentDetails;
