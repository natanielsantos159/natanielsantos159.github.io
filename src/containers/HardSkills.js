import React from 'react'
import TechnologyCard from '../components/TechnologyCard';
import '../styles/HardSkills.css';

export default function HardSkills() {
  return (
    <section className="hard-skills-container">
      <h1>Conhecimentos</h1>
      <section className="hard-skills-wrapper">
        <TechnologyCard name="Node JS" iconClass="bx bxl-nodejs"/>
        <TechnologyCard name="React JS" iconClass="bx bxl-react"/>
        <TechnologyCard name="Redux" iconClass="bx bxl-redux"/>
        <TechnologyCard name="CSS3" iconClass="bx bxl-css3"/>
        <TechnologyCard name="HTML5" iconClass="bx bxl-html5"/>
        <TechnologyCard name="Javascript" iconClass="bx bxl-javascript"/>
        <TechnologyCard name="Docker" iconClass="bx bxl-docker"/>
        <TechnologyCard name="Git" iconClass="bx bxl-git"/>
      </section>
    </section>
  )
}
