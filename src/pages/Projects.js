import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data";
import "../styles/Projects.css";
import ProjectSkills from "./ProjectSkills";

export default function Projects() {
  return (
    <main className="projects-page">
      <h1 className="projects-h1">Projetos</h1>
      <section className="projects-section">
        {projects.map((proj) => (
          <ProjectCard {...proj} />
        ))}
      </section>
      <ProjectSkills />
    </main>
  );
}
