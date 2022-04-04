import React, { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import githubIcon from "../images/github.png";
import websiteIcon from "../images/laptop.png";
import skillsIcon from "../images/skills.png";
import defaultProjectImage from "../images/projectimage.png";
import SkillsList from "./SkillsList";
import useCollapse from "react-collapsed";
import "../styles/Project.css";

export default function ProjectCard({
  id,
  image,
  name,
  description,
  repository,
  website,
  tags,
}) {
  const {
    showSkills,
    idSkill,
    setShowSkills,
    showAllSkills,
    setShowAllSkills,
    viewMode,
  } = useContext(AppContext);
  const { setIdSkill } = useContext(AppContext);
  const { getCollapseProps, getToggleProps, setExpanded } = useCollapse();

  useEffect(() => {
    return () => setShowAllSkills(false);
  }, []);

  useEffect(() => {
    setExpanded(showAllSkills);
  }, [showAllSkills]);

  const showSkillsOnClick = () => {
    setIdSkill(id);
    if (!showSkills) setShowSkills(true);
    if (showSkills && idSkill === id) setShowSkills(false);
    if (viewMode === "grid") document.body.style.overflow = "hidden";
  };

  return (
    <div className="project-card">
      <div className="project-card-content">
        <div className="image-wrapper">
          <img
            src={image ? image : defaultProjectImage}
            alt={`Imagem do Projeto ${name}`}
            className="project-image"
          />
        </div>
        <div className="project-info-wrapper">
          <h2 className="project-name">{name}</h2>
          <div className="tags-wrapper">
            {tags.map((tag, i) => (
              <div className="tag" key={i}>
                {tag}
              </div>
            ))}
          </div>
          <div className="description-wrapper">
            <p className="project-description">{description}</p>
          </div>
        </div>
        <section className="btn-wrapper">
          <a
            href={repository}
            className="btn-repository"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
            GitHub
          </a>
          {website && (
            <a
              href={website}
              className="btn-website"
              target="_blank"
              rel="noreferrer"
            >
              <img src={websiteIcon} alt="Website" />
              Website
            </a>
          )}
          {viewMode === "grid" && (
            <button className="btn-skills" onClick={showSkillsOnClick}>
              <img src={skillsIcon} alt="Skills" />
              Skills
            </button>
          )}

          {viewMode === "list" && (
            <button className="btn-skills" {...getToggleProps()}>
              <img src={skillsIcon} alt="Skills" />
              Skills
            </button>
          )}
        </section>
      </div>
      {viewMode === "list" && (
        <section {...getCollapseProps()}>
          <h2>Skills</h2>
          <SkillsList index={id - 1} />
        </section>
      )}
    </div>
  );
}
