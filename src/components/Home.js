import React from "react";
import "../styles/Home.css";
import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import { RiSendPlane2Line } from "react-icons/ri";
import { CgMouse } from "react-icons/cg";
import Blob from "./Blob";
import Tilt from "react-parallax-tilt";

function Home({ data }) {
  if (data) {
    var name = data.name;
    var image = data.image;
    var description = data.description;
    var occupation = data.occupation;
    var social = data.social;
    var instagram = social.instagram;
    var facebook = social.facebook;
    var github = social.github;
  }
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a
              href={instagram}
              className="home__social-icon"
              target="_blank"
              rel="noreferrer"
            >
              <i className="">
                <FaInstagram />
              </i>
            </a>
            <a
              href={facebook}
              className="home__social-icon"
              target="_blank"
              rel="noreferrer"
            >
              <i className=" ">
                <FaFacebook />
              </i>
            </a>
            <a
              href={github}
              className="home__social-icon"
              target="_blank"
              rel="noreferrer"
            >
              <i className="">
                <FaGithub />
              </i>
            </a>
          </div>
          <div className="home__img">
            <Tilt>
              <Blob image={image} />
            </Tilt>
          </div>
          <div className="home__data">
            <h1 className="home__title">Hi, I am {name}</h1>
            <h3 className="home__subtitle">{occupation}</h3>
            <p className="home__description">{description}</p>
            <a href="#contact" className="button button--flex home__button">
              Contact Me{" "}
              <i className=" button__icon">
                <RiSendPlane2Line />
              </i>
            </a>
          </div>
        </div>
        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <i className=" home__scroll-mouse">
              <CgMouse />
            </i>
            {/* <span className="home_scroll-name">Scroll down</span>
            <i className=" home__scroll-arrow">
              <FiArrowDown />
            </i> */}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
