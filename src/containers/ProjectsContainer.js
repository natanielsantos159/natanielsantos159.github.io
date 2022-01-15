import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data";

export default function ProjectsContainer() {
  return (
    <section>
      <h1 className="projects-h1">Meus Projetos</h1>
      <section className="projects-container-home">
        {projects.map((proj) => (
          <ProjectCard {...proj} />
        ))}
      </section>
    </section>
  );
}
