import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import projects from "../projects";
import seeMoreIcon from '../images/see-more.png';
import seeMoreHover from '../images/see-more-dark.png';
import "../styles/ProjectsContainer.css";

export default function ProjectsContainer() {
  const [seeMoreBtnHover, setSeeMoreBtnHover] = useState(false);
  return (
    <section className="projects-container-home">
      <h1>Meus Projetos</h1>
      <section className="projects-container-home-wrapper">
        {projects.slice(0, 4).map((proj, i) => (
          <ProjectCard {...proj} key={i} />
        ))}
      </section>
      <Link
        to="/projects"
        className="default-btn btn-see-more"
        onMouseEnter={() => setSeeMoreBtnHover(true)}
        onMouseLeave={() => setSeeMoreBtnHover(false)}
      >
        <img src={seeMoreBtnHover ? seeMoreHover : seeMoreIcon} alt="Ver Mais" />
        Ver Mais
      </Link>
    </section>
  );
}
