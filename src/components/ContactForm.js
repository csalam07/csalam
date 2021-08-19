import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { BsCheckAll } from "react-icons/bs";
import emailjs from "emailjs-com";

function ContactForm() {
  const [showResult, setShowResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jsagzuy",
        "template_ucuhh4q",
        e.target,
        "user_sIqJp1RQ7DDudqNuvQogl",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
    setShowResult(true);
    setTimeout(() => {
      setShowResult(false);
    }, 5000);
  };

  return (
    <form
      className="contact__form grid"
      ic="contact__form"
      onSubmit={sendEmail}
    >
      <div className="contact__inputs grid">
        <div className="contact__content">
          <lable htmlFor="name" className="contact__lable">
            Name
          </lable>
          <input
            type="text"
            className="contact__input"
            name="fullName"
            required
          />
        </div>

        <div className="contact__content">
          <lable htmlFor="email" className="contact__lable">
            Email
          </lable>
          <input
            type="email"
            className="contact__input"
            name="email"
            required
          />
        </div>
      </div>
      <div className="contact__content">
        <lable htmlFor="subject" className="contact__lable">
          Project
        </lable>
        <input type="text" className="contact__input" name="project" required />
      </div>
      <div className="contact__content">
        <lable htmlFor="message" className="contact__lable">
          Message
        </lable>
        <textarea
          name="message"
          id=""
          cols="0"
          rows="7"
          className="contact__input"
          required
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          className={`button button--flex ${showResult && "success"}`}
        >
          {showResult ? "Message Sent" : "Send Message"}
          <i className="button__icon">
            {showResult ? <BsCheckAll /> : <AiOutlineSend />}
          </i>
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
