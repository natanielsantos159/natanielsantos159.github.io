import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import githubIcon from '../../images/github.png';
import githubHover from '../../images/github-dark.png';
import websiteIcon from '../../images/website.png';
import websiteHover from '../../images/website-dark.png';
import skillsIcon from '../../images/skills.png';
import skillsHover from '../../images/skills-dark.png';
import defaultProjectImage from '../../images/projectimage.png';
import DefaultButton from '../DefaultButton';
import TechnologyBadgesContainer from '../TechnologyBadgesContainer';
import { motion } from 'framer-motion';
import '../../styles/ProjectCard.css';

export default function CarouselProjectCard({
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
  showSkillsBtn = true,
}) {
  const { showSkills, idSkill, setShowSkills } = useContext(AppContext);
  const { setIdSkill } = useContext(AppContext);

  const showSkillsOnClick = () => {
    setIdSkill(id);
    if (!showSkills) {
      setShowSkills(true);
    } else if (showSkills && idSkill === id) {
      setShowSkills(false);
    }

    document.body.style.overflow = 'hidden';
  };

  return (
    <motion.div
      className={`project-card ${carouselClass}`}
      {...framerMotionProps}
    >
      <motion.div className="project-card-content">
        <motion.div className="image-wrapper">
          <img
            src={image ? image : defaultProjectImage}
            alt={`Imagem do Projeto ${name}`}
            className="project-image"
          />
        </motion.div>
        <motion.div className="project-info-wrapper">
          <div className="title-and-techs-wrapper">
            <h2 className="project-name">{name}</h2>
          </div>
          <div className="tags-wrapper">
            {tags.map((tag, i) => (
              <div className="tag" key={i}>
                {tag}
              </div>
            ))}
          </div>
          <TechnologyBadgesContainer technologies={technologies} expandTechnologies />
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
              onClick={showSkillsOnClick}
            />
          )}
        </section>
      </motion.div>
    </motion.div>
  );
}

CarouselProjectCard.propTypes = {
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
  showSkillsBtn: PropTypes.bool,
};
