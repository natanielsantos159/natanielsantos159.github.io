import React from "react";

export default function ContactMe() {
  return (
    <section className="contact-me-section">
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
