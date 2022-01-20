import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data";
import "../styles/Projects.css";
import ProjectSkills from "./ProjectSkills";
import gridIcon from '../images/grid.png';
import listIcon from '../images/list.png';

export default function Projects() {
  const [viewMode, setViewMode] = useState("grid");

  const switchViewMode = () => setViewMode(viewMode === 'grid' ? 'list' : 'grid');

  return (
    <main className="projects-page">
      <div className="header-projects-page">
        <h1 className="projects-h1">Projetos</h1>
        <button className="switch-view-mode-btn" onClick={ switchViewMode }>
          <img src={viewMode === "grid" ? listIcon : gridIcon } alt={viewMode} />
        </button>
      </div>
      <section className={`projects-section ${viewMode}`}>
        {projects.map((proj) => (
          <ProjectCard {...proj} />
        ))}
      </section>
      <ProjectSkills />
    </main>
  );
}
