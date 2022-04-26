import React, { useRef } from 'react'
import TechnologyCard from '../components/TechnologyCard';
import useOnScreen from '../hooks/useOnScreen';
import '../styles/Technologies.css';

export default function Technologies() {
  const ref = useRef();
  useOnScreen(ref, "-250px", "technologies");
  return (
    <section className="technologies-container" ref={ref}>
      <h1>Conhecimentos</h1>
      <section className="technologies-wrapper">
        <TechnologyCard name="Node JS" iconClass="devicon-nodejs-plain"/>
        <TechnologyCard name="React JS" iconClass="devicon-react-plain"/>
        <TechnologyCard name="TypeScript" iconClass="devicon-typescript-plain"/>      
        <TechnologyCard name="Redux" iconClass="devicon-redux-plain"/>
        <TechnologyCard name="CSS3" iconClass="devicon-css3-plain"/>
        <TechnologyCard name="HTML5" iconClass="devicon-html5-plain"/>
        <TechnologyCard name="Javascript" iconClass="devicon-javascript-plain"/>
        <TechnologyCard name="Express" iconClass="devicon-express-original"/>
        <TechnologyCard name="Docker" iconClass="devicon-docker-plain"/>
        <TechnologyCard name="Sequelize" iconClass="devicon-sequelize-plain"/>          
        <TechnologyCard name="MySQL" iconClass="devicon-mysql-plain"/>          
        <TechnologyCard name="Jest" iconClass="devicon-jest-plain"/>          
        <TechnologyCard name="Git" iconClass="devicon-git-plain"/>
      </section>
    </section>
  )
}
