import React, { useEffect, useState } from 'react';
import HeaderNav from './HeaderNav';

import homeIcon from '../images/home.png';
import homeHover from '../images/home-hover.png';
import projectsIcon from '../images/projects.png';
import projectsHover from '../images/projects-hover.png';
import contactIcon from '../images/contact.png';
import contactHover from '../images/contact-hover.png';
import technologiesIcon from '../images/technologies.png';
import technologiesHover from '../images/technologies-hover.png';

import '../styles/Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (window) {
      window.addEventListener('scroll', () => setScrolled(window.scrollY > 200));
    }
  }, []);

  return (
    <header className={scrolled && 'header-scrolled'}>
      <h1>Nataniel Santos</h1>
      <nav className="header-navs">
        <HeaderNav name="home" link="/" img={homeIcon} imgHover={homeHover}>
          Início
        </HeaderNav>
        <HeaderNav
          name="technologies"
          link="technologies-container"
          img={technologiesIcon}
          imgHover={technologiesHover}
        >
          Tecnologias
        </HeaderNav>
        <HeaderNav
          name="projects"
          link="projects-container"
          img={projectsIcon}
          imgHover={projectsHover}
        >
          Projetos
        </HeaderNav>
        <HeaderNav
          name="contact"
          link="contact-container"
          img={contactIcon}
          imgHover={contactHover}
        >
          Contato
        </HeaderNav>
      </nav>
    </header>
  );
}
