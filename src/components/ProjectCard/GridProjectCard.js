import PropTypes from 'prop-types';
import React from 'react';
import githubIcon from '../../images/github.png';
import githubHover from '../../images/github-dark.png';
import websiteIcon from '../../images/website.png';
import websiteHover from '../../images/website-dark.png';
import skillsIcon from '../../images/skills.png';
import skillsHover from '../../images/skills-dark.png';
import defaultProjectImage from '../../images/projectimage.png';
import SkillsList from '../SkillsList';
import DefaultButton from '../DefaultButton';
import TechnologyBadgesContainer from '../TechnologyBadgesContainer';
import { motion } from 'framer-motion';
import '../../styles/ProjectCard.css';

export default function GridProjectCard({
  id,
  image,
  name,
  description,
  repository,
  website,
  tags,
  technologies,
  framerMotionProps = {},
  expandTechnologies = false,
  showSkillsBtn = true,
  showSkillsList = false,
}) {

  return (
    <motion.div
      className={`project-card`}
      {...framerMotionProps}
    >
      <motion.div
        className="project-card-content"
        layoutId={`project-card-content-${id}`}>
        <motion.div className="image-wrapper" layoutId={`image-wrapper-${id}`}>
          <img
            src={image ? image : defaultProjectImage}
            alt={`Imagem do Projeto ${name}`}
            className="project-image"
          />
        </motion.div>
        <motion.div
          className="project-info-wrapper"
          layoutId={`project-info-wrapper-${id}`}>
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
              onClick={framerMotionProps.onClick}
            />
          )}
        </section>
      </motion.div>
      {showSkillsList && <section className="homepage-skills">
        <h2>Skills</h2>
        <SkillsList index={id - 1} />
      </section>}
    </motion.div>
  );
}

GridProjectCard.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  repository: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  website: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  framerMotionProps: PropTypes.object,
  showSkillsBtn: PropTypes.bool,
  showSkillsList: PropTypes.bool,
  expandTechnologies: PropTypes.bool,
};
