import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer>
      <span>Desenvolvido com 💙 por Nataniel Santos.</span>
      <span>Copyright © 2022, NMS - Todos os direitos reservados</span>
      <Link to="/credits">
        Credits
      </Link>
      <section className="footer-icons-section">
        <a href="https://github.com/natanielsantos159">
          <i className="devicon-github-plain"></i>
        </a>
        <a href="https://www.linkedin.com/in/nataniel-santos">
          <i className="devicon-linkedin-plain"></i>
        </a>
      </section>
    </footer>
  );
}
