import React from "react";
import HeaderNav from "./HeaderNav";

import homeIcon from "../images/home.png";
import homeHover from "../images/homehover.png";
import projectsIcon from '../images/projects.png';
import projectsHover from '../images/projectshover.png';
import contactIcon from '../images/contact.png';
import contactHover from '../images/contacthover.png';

import "../styles/Header.css";

export default function Header() {
  return (
    <header>
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
