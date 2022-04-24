import React, { useContext, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import AppContext from "../context/AppContext";
import projects from "../projects";

import gridIcon from "../images/grid.png";
import listIcon from "../images/list.png";
import uncheckedIcon from "../images/checkbox.png";
import checkedIcon from "../images/checkboxfilled.png";
import "../styles/Projects.css";
import ProjectSkills from "./ProjectSkills";

export default function Projects() {
  const { showAllSkills, setShowAllSkills, setShowSkills, viewMode, setViewMode } = useContext(AppContext);
  const switchViewMode = () => {
    setViewMode(viewMode === "grid" ? "list" : "grid");
    setShowSkills(false);
  }

  useEffect(() => {
    return () => setViewMode('grid');
  }, [])

  return (
    <main className="projects-page">
      <div className="header-projects-page">
        <h1 className="projects-h1">Projetos</h1>
        { viewMode === 'list' && <label htmlFor="show-all-skills-btn">
          <img
            src={showAllSkills ?  checkedIcon : uncheckedIcon}
            alt="checkbox"
            className="checkbox"
          />
          <input
            type="checkbox"
            id="show-all-skills-btn"
            onClick={() => {
              if (showAllSkills) setShowSkills(false);
              setShowAllSkills(!showAllSkills)
            }}
          />
          Expandir todas as skills
        </label>}
        <button className="switch-view-mode-btn" onClick={switchViewMode}>
          <img src={viewMode === "grid" ? listIcon : gridIcon} alt={viewMode} />
        </button>
      </div>
      <section className={`projects-section ${viewMode}`}>
        {projects.map((proj, i) => (
          <ProjectCard {...proj} key={i} />
        ))}
      </section>
      <ProjectSkills />
    </main>
  );
}
