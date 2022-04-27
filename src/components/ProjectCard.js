import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import githubIcon from '../images/github.png';
import githubHover from '../images/github-dark.png';
import websiteIcon from '../images/website.png';
import websiteHover from '../images/website-dark.png';
import skillsIcon from '../images/skills.png';
import skillsHover from '../images/skills-dark.png';
import defaultProjectImage from '../images/projectimage.png';
import SkillsList from './SkillsList';
import useCollapse from 'react-collapsed';
import '../styles/Project.css';
import ProjectCardButton from './ProjectCardButton';
import TechnologyBadgesContainer from './TechnologyBadgesContainer';
import { useLocation } from 'react-router-dom';

export default function ProjectCard({
  id,
  image,
  name,
  description,
  repository,
  website,
  tags,
  technologies
}) {
  const { showSkills, idSkill, setShowSkills, showAllSkills, setShowAllSkills, viewMode } =
    useContext(AppContext);
  const { setIdSkill } = useContext(AppContext);
  const { getCollapseProps, getToggleProps, setExpanded } = useCollapse();
  const { pathname } = useLocation();

  useEffect(() => {
    return () => setShowAllSkills(false);
  }, []);

  useEffect(() => {
    setExpanded(showAllSkills);
  }, [showAllSkills, setExpanded]);

  const showSkillsOnClick = () => {
    setIdSkill(id);
    if (!showSkills) setShowSkills(true);
    if (showSkills && idSkill === id) setShowSkills(false);
    if (viewMode === 'grid') document.body.style.overflow = 'hidden';
  };

  const getOnClickProps = () => {
    if (viewMode === 'grid') return { onClick: showSkillsOnClick };
    if (viewMode === 'list') return { ...getToggleProps() };
  };

  return (
    <div className="project-card">
      <div className="project-card-content">
        <div className="image-wrapper">
          <a href={website || repository} target="_blank" rel="noreferrer">
            <img
              src={image ? image : defaultProjectImage}
              alt={`Imagem do Projeto ${name}`}
              className="project-image"
            />
          </a>
        </div>
        <div className="project-info-wrapper">
          <div className="title-and-techs-wrapper">
            <a href={website || repository} target="_blank" rel="noreferrer">
              <h2 className="project-name">{name}</h2>
            </a>
            {(viewMode === 'list' || pathname === '/') && (
              <TechnologyBadgesContainer technologies={technologies} amount={4} />
            )}
          </div>
          <div className="tags-wrapper">
            {tags.map((tag, i) => (
              <div className="tag" key={i}>
                {tag}
              </div>
            ))}
          </div>
          {viewMode === 'grid' && pathname === '/projects' && (
            <TechnologyBadgesContainer technologies={technologies} showTechnologies />
          )}
          <div className="description-wrapper">
            <p className="project-description">{description}</p>
          </div>
        </div>
        <section className="btn-wrapper">
          <ProjectCardButton
            name="GitHub"
            href={repository}
            className="btn-repository"
            icon={githubIcon}
            iconHover={githubHover}
          />
          {website && (
            <ProjectCardButton
              name="Website"
              href={website}
              className="btn-website"
              icon={websiteIcon}
              iconHover={websiteHover}
            />
          )}

          <ProjectCardButton
            name="Skills"
            className="btn-skills"
            icon={skillsIcon}
            iconHover={skillsHover}
            {...getOnClickProps()}
          />
        </section>
      </div>
      {viewMode === 'list' && (
        <section {...getCollapseProps()}>
          <h2>Skills</h2>
          <SkillsList index={id - 1} />
        </section>
      )}
    </div>
  );
}

ProjectCard.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  repository: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  website: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  showTechnologies: PropTypes.bool
};
