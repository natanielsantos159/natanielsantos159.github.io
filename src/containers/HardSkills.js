import React, { useRef } from 'react'
import TechnologyCard from '../components/TechnologyCard';
import useOnScreen from '../hooks/useOnScreen';
import '../styles/HardSkills.css';

export default function HardSkills() {
  const ref = useRef();
  useOnScreen(ref, "-250px", "hard-skills");
  return (
    <section className="hard-skills-container" ref={ref}>
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
