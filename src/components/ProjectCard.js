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
import DefaultButton from './DefaultButton';
import TechnologyBadgesContainer from './TechnologyBadgesContainer';
import { motion } from 'framer-motion';

export default function ProjectCard({
  id,
  image,
  name,
  description,
  repository,
  website,
  tags,
  technologies,
  carouselClass,
  framerMotionProps = {},
  expandTechnologies = false,
  animateCrossfade = false,
  showSkillsBtn = true,
  children,
}) {
  const { showSkills, idSkill, setShowSkills, showAllSkills, setShowAllSkills, viewMode } =
    useContext(AppContext);
  const { setIdSkill } = useContext(AppContext);
  const { getCollapseProps, getToggleProps, setExpanded } = useCollapse();

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
    if (viewMode === 'grid' || viewMode === 'carousel') document.body.style.overflow = 'hidden';
  };

  const getOnClickProps = () => {
    if (animateCrossfade) return { onClick: framerMotionProps.onClick }
    if (viewMode === 'grid' || viewMode === 'carousel') return { onClick: showSkillsOnClick };
    if (viewMode === 'list') return { ...getToggleProps() };
  };

  return (
    <motion.div
      className={`project-card ${carouselClass ? carouselClass : ''}`}
      {...framerMotionProps}
    >
      <motion.div
        className="project-card-content"
        layoutId={animateCrossfade && `project-card-content-${id}`}>
        <motion.div className="image-wrapper" layoutId={animateCrossfade && `image-wrapper-${id}`}>
          <img
            src={image ? image : defaultProjectImage}
            alt={`Imagem do Projeto ${name}`}
            className="project-image"
          />
        </motion.div>
        <motion.div
          className="project-info-wrapper"
          layoutId={animateCrossfade && `project-info-wrapper-${id}`}>
          <div className="title-and-techs-wrapper">
            <h2 className="project-name">{name}</h2>
            {expandTechnologies === false && (
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
          {expandTechnologies && (
            <TechnologyBadgesContainer technologies={technologies} expandTechnologies />
          )}
          <div className="description-wrapper">
            <p className="project-description">{description}</p>
          </div>
        </motion.div>
        <section className="btn-wrapper">
          <DefaultButton
            name="GitHub"
            href={repository}
            className="btn-repository"
            icon={githubIcon}
            iconHover={githubHover}
          />
          {website && (
            <DefaultButton
              name="Website"
              href={website}
              className="btn-website"
              icon={websiteIcon}
              iconHover={websiteHover}
            />
          )}

          {showSkillsBtn && (
            <DefaultButton
              name="Skills"
              className="btn-skills"
              icon={skillsIcon}
              iconHover={skillsHover}
              {...getOnClickProps()}
            />
          )}
        </section>
      </motion.div>
      {viewMode === 'list' && (
        <section {...getCollapseProps()}>
          <h2>Skills</h2>
          <SkillsList index={id - 1} />
        </section>
      )}
      {children}
    </motion.div>
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
  carouselClass: PropTypes.string,
  framerMotionProps: PropTypes.object,
  expandTechnologies: PropTypes.bool,
  animateCrossfade: PropTypes.bool,
  showSkillsBtn: PropTypes.bool,
  children: PropTypes.node
};
