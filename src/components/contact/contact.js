import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import Instagram from "../../assets/images/instagram.png";
import Github from "../../assets/images/github.png";
import Linkedin from "../../assets/images/linkedin.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_amv2ht4", "template_j2r9epf", form.current, {
        publicKey: "_Cd67nPtxw_UPO45H",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email Sent!!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <h2 className="contactPageTitle">Contact Me</h2>
      <span className="contactDesc">
        Please fill out the form to discuss any work opportunities
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          className="name"
          type="text"
          placeholder="Your Name"
          name="from_name"
          required
        />
        <input
          className="email"
          type="email"
          placeholder="Your Email"
          name="from_email"
          required
        />
        <textarea
          className="msg"
          name="message"
          rows="5"
          placeholder="Your Message"
        ></textarea>
        <button className="submitBtn" type="submit" value="Send">
          Submit
        </button>
        <div className="links">
          <a href="https://github.com/im-harshal">
            <img src={Github} alt="Github" className="link" />
          </a>
          <a href="https://www.linkedin.com/in/hp97/">
            <img src={Linkedin} alt="LinkedIn" className="link" />
          </a>
          <a href="https://www.instagram.com/emharshal/">
            <img src={Instagram} alt="Instagram" className="link" />
          </a>
        </div>
      </form>
    </section>
  );
};

export default Contact;
