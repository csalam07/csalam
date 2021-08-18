import React, { useState } from "react";
import "../styles/Qualification.css";
import { FaGraduationCap } from "react-icons/fa";
import { BiBriefcase } from "react-icons/bi";

const QualificationData = ({ title, subtitle, date }) => {
  return (
    <div>
      <h3 className="qualification__title">{title}</h3>
      <span className="qualification__subtitle">{subtitle}</span>
      <div className="qualification__calendar">
        <i className="uil uil-calendar-alt"></i>
        {date}
      </div>
    </div>
  );
};

function Qualification({ data }) {
  if (data) {
  }

  const [toggleTab, setToggleTab] = useState(1);

  const handleTabClick = (index) => {
    setToggleTab(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={`qualification__buttons button--flex ${
              toggleTab === 1 ? "qualification__active" : ""
            }`}
            data-target="#education"
            onClick={() => handleTabClick(1)}
          >
            <i className="qualification__icon">
              <FaGraduationCap />
            </i>
            Education
          </div>

          <div
            className={`qualification__buttons button--flex ${
              toggleTab === 2 ? "qualification__active" : ""
            }`}
            data-target="#education"
            onClick={() => handleTabClick(2)}
          >
            <i className="qualification__icon">
              <BiBriefcase />
            </i>
            Work
          </div>
        </div>
        <div>
          <div className="qualification__sections">
            <div
              className={`qualification__content ${
                toggleTab === 1 ? "qualification__active" : ""
              }`}
              data-content
              id="education"
            >
              <div className="qualification__data">
                <QualificationData
                  title={data?.education[0]?.degree}
                  subtitle={data?.education[0]?.school}
                  date={data?.education[0]?.year}
                />
                <div>
                  <span className="qualification__rounder"> </span>
                  <span className="qualification__line"> </span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"> </span>
                  <span className="qualification__line"> </span>
                </div>
                <QualificationData
                  title={data?.education[1]?.degree}
                  subtitle={data?.education[1]?.school}
                  date={data?.education[1]?.year}
                />
              </div>

              <div className="qualification__data">
                <QualificationData
                  title={data?.education[2]?.degree}
                  subtitle={data?.education[2]?.school}
                  date={data?.education[2]?.year}
                />

                <div>
                  <span className="qualification__rounder"> </span>
                  <span className="qualification__line"> </span>
                </div>
              </div>
            </div>

            <div
              className={`qualification__content ${
                toggleTab === 2 ? "qualification__active" : ""
              }`}
              data-content
              id="work"
            >
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"> </span>
                  <span className="qualification__line"> </span>
                </div>
                <QualificationData
                  title={data?.work[0]?.jobTitle}
                  subtitle={data?.work[0]?.description}
                  date={data?.work[0]?.year}
                />
              </div>

              <div className="qualification__data">
                <QualificationData
                  title={data?.work[1]?.jobTitle}
                  subtitle={data?.work[1]?.description}
                  date={data?.work[1]?.year}
                />

                <div>
                  <span className="qualification__rounder"> </span>
                  <span className="qualification__line"> </span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"> </span>
                  <span className="qualification__line"> </span>
                </div>
                <QualificationData
                  title={data?.work[2]?.jobTitle}
                  subtitle={data?.work[2]?.description}
                  date={data?.work[2]?.year}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
