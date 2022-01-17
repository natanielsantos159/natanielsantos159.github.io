import React, { useEffect, useState } from "react";
import HeaderNav from "./HeaderNav";

import homeIcon from "../images/home.png";
import homeHover from "../images/homehover.png";
import projectsIcon from '../images/projects.png';
import projectsHover from '../images/projectshover.png';
import aboutIcon from '../images/about.png';
import aboutHover from '../images/abouthover.png';
import contactIcon from '../images/contact.png';
import contactHover from '../images/contacthover.png';

import "../styles/Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", () =>
      setScrolled(window.pageYOffset > 200)
      );
    }
  }, []);

  return (
    <header className={scrolled && 'header-scrolled'}>
      <h1>Nataniel Santos</h1>
      <nav className="header-navs">
        <HeaderNav
          name="Home"
          link="/"
          img={homeIcon}
          imgHover={homeHover}
        >
          Início
        </HeaderNav>
        <HeaderNav
          name="Projects"
          link="/projects"
          img={projectsIcon}
          imgHover={projectsHover}
        >
          Projetos
        </HeaderNav>
        <HeaderNav
          name="About"
          link="/about"
          img={aboutIcon}
          imgHover={aboutHover}
        >
          Sobre
        </HeaderNav>
        <HeaderNav
          name="Contact"
          link="/contact"
          img={contactIcon}
          imgHover={contactHover}
        >
          Contato
        </HeaderNav>
      </nav>
    </header>
  );
}
