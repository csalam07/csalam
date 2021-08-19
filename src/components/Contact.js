import React from "react";
import "../styles/Contact.css";
import {
  HiOutlineMail,
  HiOutlinePhoneMissedCall,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import ContactForm from "./ContactForm";

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

function Contact({ data }) {
  if (data) {
    var email = data.email;
    var phone = data.phone;
    var location = data.address;
  }
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div>
          <ContactInformation
            Icon={HiOutlinePhoneMissedCall}
            title="Call me"
            subtitle={phone}
          />

          <ContactInformation
            Icon={HiOutlineMail}
            title="Email"
            subtitle={email}
          />

          <ContactInformation
            Icon={HiOutlineLocationMarker}
            title="Location"
            subtitle={location}
          />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
