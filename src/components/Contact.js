import React from "react";
import "../styles/Contact.css";
import {
  HiOutlineMail,
  HiOutlinePhoneMissedCall,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { AiOutlineSend } from "react-icons/ai";

const ContactInformation = ({ Icon, title, subtitle }) => {
  return (
    <div className="contact__information">
      <i className="uil uil-phone contact__icon">
        <Icon />
      </i>

      <div>
        <h3 className="contact__title">{title}</h3>
        <span className="contact__subtitle">{subtitle}</span>
      </div>
    </div>
  );
};

function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div>
          <ContactInformation
            Icon={HiOutlinePhoneMissedCall}
            title="Call me"
            subtitle="991-234-567"
          />

          <ContactInformation
            Icon={HiOutlineMail}
            title="Email"
            subtitle="sam@gamil.com"
          />

          <ContactInformation
            Icon={HiOutlineLocationMarker}
            title="Location"
            subtitle="Bangalore - India 563500"
          />
        </div>
        <form className="contact__form grid">
          <div className="contact__inputs grid">
            <div className="contact__content">
              <lable htmlFor="" className="contact__lable">
                Name
              </lable>
              <input type="text" className="contact__input" name="name" />
            </div>

            <div className="contact__content">
              <lable htmlFor="" className="contact__lable">
                Email
              </lable>
              <input type="email" className="contact__input" name="name" />
            </div>
          </div>
          <div className="contact__content">
            <lable htmlFor="" className="contact__lable">
              Project
            </lable>
            <input type="text" className="contact__input" name="name" />
          </div>
          <div className="contact__content">
            <lable htmlFor="" className="contact__lable">
              Message
            </lable>
            <textarea
              name=""
              id=""
              cols="0"
              rows="7"
              className="contact__input"
            ></textarea>
          </div>

          <div>
            <a href="/" className="button button--flex">
              Send Message
              <i className="button__icon">
                <AiOutlineSend />
              </i>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
