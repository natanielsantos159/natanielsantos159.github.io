import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <span>
        Feito com
        <i className="bx bxs-heart-circle"></i>
         por Nataniel Santos.
      </span>
      <span>Copyright © 2022, NMS - Todos os direitos reservados</span>
      <section className="footer-icons-section">
        <a href="https://github.com/natanielsantos159">
          <i className="bx bxl-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/nataniel-santos">
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href="mailto:nathan.santos159@hotmail.com">
          <i className="bx bxl-gmail"></i>
        </a>
        <a href="https://wa.me/98992128008">
          <i className="bx bxl-whatsapp"></i>
        </a>
      </section>
    </footer>
  );
}
