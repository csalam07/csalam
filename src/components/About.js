import React from "react";
import "../styles/About.css";
import { AiOutlineFilePdf } from "react-icons/ai";
import Tilt from "react-parallax-tilt";

const AboutIno = ({ title, name, subName }) => {
  return (
    <div>
      <span className="about__info-title">{title}+</span>
      <span className="about__info-name">
        {name} <br />
        {subName}
      </span>
    </div>
  );
};

function About({ data }) {
  if (data) {
    var description = data.description;
    var image = data.image;
    var experience = data.experience;
    var projects = data.projects;
    var cv = data.cv;
  }
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <Tilt>
          <img src={`/images/${image}`} className="about__img" alt="csalam" />
        </Tilt>

        <div className="about__data">
          <p className="about__description">{description}</p>

          <div className="about__info">
            <AboutIno title={experience} name="Months" subName="Experience" />
            <AboutIno title={projects} name="Completed" subName="projects" />
            <AboutIno title="5" name="Open Source" subName="contribution" />
          </div>
          <div className="about__buttons">
            <a href={`assets/pdf/${cv}`} className="button button--flex">
              Dowlaod CV
              <i className="button__icon">
                <AiOutlineFilePdf />
              </i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
