import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data";
import "../styles/ProjectsContainer.css";

export default function ProjectsContainer() {
  return (
    <section  className="projects-container-home">
      <h1>Meus Projetos</h1>
      <section className="projects-container-home-wrapper">
        {projects.map((proj) => (
          <ProjectCard {...proj} />
        ))}
      </section>
    </section>
  );
}
