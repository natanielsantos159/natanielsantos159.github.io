import React, { useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";
import "../styles/ContactMe.css";

export default function ContactMe() {
  const ref = useRef();
  useOnScreen(ref, "-250px", "contact");
  return (
    <section className="contact-me-section" id="contact-me-section" ref={ref}>
      <h1>Contato</h1>
      <section className="contact-me-btns">
        <a href="mailto:nathan.santos159@hotmail.com" className="email-btn">
        {/* https://icons8.com/icon/100638/ms-outlook */}
          <img src="https://img.icons8.com/ios-glyphs/30/ffffff/ms-outlook.png" alt="Outlook"/>
          Email
        </a>
        <a href="https://github.com/natanielsantos159" className="github-btn">
          <i className="devicon-github-original"></i>
          Github
        </a>
        <a href="https://www.linkedin.com/in/nataniel-santos-49281b170/" className="linkedin-btn">
          <i className="devicon-linkedin-plain"></i>
          LinkedIn
        </a>
      </section>
    </section>
  );
}
