import React, { useEffect, useState } from "react";
import "../styles/Portfolio.css";
import "../styles/Services.css";
import {
  AiOutlineArrowRight,
  AiOutlineSend,
  AiOutlineClose,
} from "react-icons/ai";

import Tilt from "react-parallax-tilt";

const Service = ({ title }) => {
  return (
    <div>
      <h3 className="services__title">
        {title} <br />
      </h3>
    </div>
  );
};

const ServiceModal = ({ item, setShowModal }) => {
  return (
    <div className="pp-inner">
      <div className="pp-content">
        <div className="pp-header">
          <button className="btn pp-close" onClick={() => setShowModal(false)}>
            <i className="fas fa-times">
              <AiOutlineClose />
            </i>
          </button>
          <Tilt>
            <div className="pp-thumbnail">
              <img src={`/projects/${item.image}`} alt={item.title} />
            </div>
          </Tilt>

          <h3>{item.title}</h3>
        </div>
        <div className="pp-body">
          <div className="description">
            <p>{item.description}</p>
          </div>
          <div className="general-info">
            <ul>
              <li>
                Created - <span>{item.date}</span>
              </li>
              <li>
                technlogies used - <span>{item.category}</span>
              </li>
              <li>
                Role - <span>role</span>
              </li>
              <li>
                View Onlined -{" "}
                <span>
                  <a href={item.url} rel="noreferrer" target="_blank">
                    {item.url}
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

function Portfolio({ data }) {
  const [showModal, setShowModal] = useState(0);
  const [active, setActive] = useState();

  const [items, setItems] = useState(data);

  const toggleModal = (index) => {
    setShowModal(index);
  };

  const filteredItems = (categItem) => {
    const updatedItems = data?.filter((currElem) => {
      return currElem.category === categItem;
    });
    setItems(updatedItems);
    setActive(categItem);
  };

  const allItems = () => {
    setItems(data);
    setActive("all");
  };

  useEffect(() => {
    setItems(data);
    setActive("all");
  }, [data]);
  return (
    <>
      <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent work</span>

        <div className="portfolio__header">
          <p
            className={` ${active === "all" ? "btn--active" : ""}`}
            onClick={allItems}
          >
            All
          </p>
          <p
            className={` ${active === "reactjs" ? "btn--active" : ""}`}
            onClick={() => filteredItems("reactjs")}
          >
            React
          </p>
          <p
            className={` ${active === "nextjs" ? "btn--active" : ""}`}
            onClick={() => filteredItems("nextjs")}
          >
            Nextjs
          </p>
          <p
            className={` ${active === "mobile" ? "btn--active" : ""}`}
            onClick={() => filteredItems("mobile")}
          >
            Mobile
          </p>
        </div>

        <div className="work__container container bd-grid">
          {items?.map((item) => (
            <div
              key={item.id}
              className="services__content"
              style={{
                backgroundImage: `url('/projects/${item.image}')`,
                borderRadius: "10px",
                backgroundSize: "100% 100%",
              }}
            >
              <Service subtitle={item.title} title={item.category} />
              <span
                className="
          button button--flex button--small button--link
          services__button"
                onClick={() => toggleModal(item.id)}
              >
                View more
                <i className=" button__icon">
                  <AiOutlineArrowRight />
                </i>
              </span>
              <div
                className={`services__modal ${
                  showModal === item.id ? "active-modal" : ""
                }`}
              >
                <div className="portfolio-popup">
                  <ServiceModal
                    item={item}
                    key={item.id}
                    setShowModal={setShowModal}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="work__container container bd-grid">
          {projects?.map((project) => (
            <SinglePortfolio
              key={project.id}
              id={project.id}
              image="portfolio1.jpg"
              setShowModal={setShowModal}
              title={project.title}
              description={project.description}
              category={project.category}
              url={project.url}
            />
          ))}
          {showModal && (
            <div className="work__modal">
              <div className="modal__container">
                <Popup
                  date="2014"
                  technlogies="react"
                  role="software engineer"
                  link="www.ggogle.com"
                  image="/img/portfolio1.jpg"
                  description="lorem14 nkvbdkjv dacnadbvkadv ncjkadbd vdjkvbjdbgvd fafdbgafhdabfdabfjkad ad fdifbdjkbvd hdafgahdf abdvbjdbvdj"
                  title="website"
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              </div>
            </div>
          )}
        </div> */}
      </section>

      <section className="project section">
        <div className="project__bg">
          <div className="project__container container grid">
            <div className="project__data">
              <h2 className="project__title">You hav a new project</h2>
              <p className="project__description">
                Connect me now and get a 30% discount on your new project
              </p>
              <a href="/" className="button button--flex button--white">
                Connect Me
                <i className="uil uil-message project__icon button__icon">
                  <AiOutlineSend />
                </i>
              </a>
            </div>
            <Tilt>
              <img
                src="/images/6_adobespark.png"
                alt=""
                className="project__img"
              />
            </Tilt>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
