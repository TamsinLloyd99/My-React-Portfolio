import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {faFilePdf} from "@fortawesome/free-solid-svg-icons";
import ResumePDF from "../Contact/CV.pdf";

import "./Contact.css";

function Contact() {
const iconSize = "3x";

  return (
    <>
      <section className="contact container" id="Contact">
        <h1 className="display-5 contactTitle">Contact Me</h1>
        <ul className="contactlist">
        <li>
        <div className="contact-item">
          <a href="mailto:tamsin_lloyd@hotmail.com">
            <FontAwesomeIcon icon={faEnvelope} size={iconSize} />
          </a>
          <h5>Email</h5>
        </div>
      </li>
      <li>
        <div className="contact-item">
          <a href="https://github.com/TamsinLloyd99" target="_blank">
            <FontAwesomeIcon icon={faGithub} size={iconSize} />
          </a>
          <h5>GitHub</h5>
        </div>
      </li>
      <li>
        <div className="contact-item">
          <a href="https://www.linkedin.com/in/tamsin-l-423584106" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size={iconSize} />
          </a>
          <h5>LinkedIn</h5>
        </div>
      </li>
      <li>
        <div className="contact-item">
          <a href={ResumePDF} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFilePdf} size={iconSize} />
          </a>
          <h5>CV</h5>
        </div>
      </li>
        </ul>
        </section>
    </>
  );
}

export default Contact;
