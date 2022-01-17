import React, { useContext } from "react";
import ProjectCard from "../components/ProjectCard";
import AppContext from "../context/AppContext";
import projects from "../data";
import "../styles/Projects.css";
import ProjectSkills from "./ProjectSkills";

export default function Projects() {
  const {showSkills} = useContext(AppContext);
  const {idSkill} = useContext(AppContext);
console.log(showSkills, idSkill)
  return (
    <main className="projects-page">
      <h1 className="projects-h1">Projetos</h1>
      <section className="projects-section">
        {projects.map((proj) => (
          <ProjectCard {...proj} />
        ))}
      </section>
      {(showSkills && idSkill) && (
        <ProjectSkills
          name={projects[idSkill - 1].name}
          skills={projects[idSkill - 1].skills}
        />
      )}
    </main>
  );
}
