import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

function Contact() {
  return (
    <>
  <section className="contact" id="Contact">
    <h1 className="display-5 contactTitle">Contact Me</h1>
    <ul className="contactlist">
      <li>
        <a href="mailto:tamsin_lloyd@hotmail.com">
          <i className="fas fa-envelope"></i>
        </a>
      </li>
      <li>
        <a href="https://github.com/TamsinLloyd99" target="_blank">
          <i className="fab fa-github"></i>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/tamsin-l-423584106/"
          target="_blank"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </li>
    </ul>
  </section>
</>

  );
}

export default Contact;
