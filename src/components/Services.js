import React, { useState } from "react";
import "../styles/Services.css";
import { AiOutlineArrowRight, AiOutlineCheckCircle } from "react-icons/ai";
import { BsGrid1X2 } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";

const Service = ({ title, subtitle }) => {
  return (
    <>
      <div>
        <i className="uil uil-web-grid services__icon">
          <BsGrid1X2 />
        </i>
        <h3 className="services__title">
          {title} <br />
          {subtitle}
        </h3>
      </div>
    </>
  );
};

const ServiceModal = ({ description }) => {
  return (
    <ul className="services__modal-services grid">
      {description?.map((item, index) => (
        <li className="services__modal-service" key={index}>
          <i className="services__modal-icon">
            <AiOutlineCheckCircle />
          </i>
          <p>{item}</p>
        </li>
      ))}
    </ul>
  );
};

function Services({ data }) {
  if (data) {
    var description1 = data[0].description;
    var description2 = data[1].description;
    var description3 = data[2].description;
  }

  const [showModal, setShowModal] = useState(0);

  const toggleModal = (index) => {
    setShowModal(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        {/* <!-- services 1 --> */}
        <div className="services__content">
          <Service subtitle="Designer" title="Ui/Ux" />
          <span
            className="
            button button--flex button--small button--link
            services__button"
            onClick={() => toggleModal(1)}
          >
            View more
            <i className=" button__icon">
              <AiOutlineArrowRight />
            </i>
          </span>
          <div
            className={`services__modal ${
              showModal === 1 ? "active-modal" : ""
            }`}
          >
            <div className="services__modal-content">
              <h4 className="services__modal-title">
                Ui/Ux <br />
                Designer
              </h4>
              <i
                className="services__modal-close"
                onClick={() => setShowModal(0)}
              >
                <GrFormClose />
              </i>

              <ServiceModal description={description1} key={0} />
            </div>
          </div>
        </div>

        {/* <!-- services 2 --> */}
        <div className="services__content">
          <Service subtitle="Developer" title="Android" />
          <span
            className="
            button button--flex button--small button--link
            services__button"
            onClick={() => toggleModal(2)}
          >
            View more
            <i className=" button__icon">
              <AiOutlineArrowRight />
            </i>
          </span>
          <div
            className={`services__modal ${
              showModal === 2 ? "active-modal" : ""
            }`}
          >
            <div className="services__modal-content">
              <h4 className="services__modal-title">
                Android
                <br />
                Develoepr
              </h4>
              <i
                className="services__modal-close"
                onClick={() => setShowModal(0)}
              >
                <GrFormClose />
              </i>

              <ServiceModal description={description2} key="2" />
            </div>
          </div>
        </div>

        {/* <!-- services 3 --> */}
        <div className="services__content">
          <Service subtitle="Developer" title="Web" />
          <span
            className="
            button button--flex button--small button--link
            services__button"
            onClick={() => toggleModal(3)}
          >
            View more
            <i
              className=" button__icon"
              onClick={() => setShowModal(!showModal)}
            >
              <AiOutlineArrowRight />
            </i>
          </span>
          <div
            className={`services__modal ${
              showModal === 3 ? "active-modal" : ""
            }`}
          >
            <div className="services__modal-content">
              <h4 className="services__modal-title">
                Web
                <br />
                Developer
              </h4>
              <i
                className="services__modal-close"
                onClick={() => setShowModal(0)}
              >
                <GrFormClose />
              </i>

              <ServiceModal description={description3} key="3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;
