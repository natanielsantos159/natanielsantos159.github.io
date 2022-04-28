import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import seeMoreIcon from '../images/see-more.png';
import seeMoreHover from '../images/see-more-dark.png';
import useOnScreen from '../hooks/useOnScreen';
import '../styles/ProjectsContainer.css';
import Carousel from '../components/Carousel';

export default function ProjectsContainer() {
  const ref = useRef();
  useOnScreen(ref, '-250px', 'projects');
  const [seeMoreBtnHover, setSeeMoreBtnHover] = useState(false);


  return (
    <section className="projects-container-home" ref={ref}>
      <h1>Meus Projetos</h1>
      {/* <section className="projects-container-home-wrapper">
        {projects.slice(0, 6).map((proj, i) => (
          <ProjectCard {...proj} key={i} />
        ))}
      </section>
      <Link
        to="/projects"
        className="default-btn btn-see-more"
        onMouseEnter={() => setSeeMoreBtnHover(true)}
        onMouseLeave={() => setSeeMoreBtnHover(false)}
      >
        <img src={seeMoreBtnHover ? seeMoreHover : seeMoreIcon} alt="Ver Todos os Projetos" />
        Ver Todos os Projetos
      </Link> */}
      <Carousel />

      <Link
        to="/projects"
        className="default-btn btn-see-more"
        onMouseEnter={() => setSeeMoreBtnHover(true)}
        onMouseLeave={() => setSeeMoreBtnHover(false)}>
        <img src={seeMoreBtnHover ? seeMoreHover : seeMoreIcon} alt="Ver Todos os Projetos" />
        Ver Todos os Projetos
      </Link>
    </section>
  );
}
