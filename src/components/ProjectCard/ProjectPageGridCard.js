import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import githubIcon from '../../images/github.png';
import githubHover from '../../images/github-dark.png';
import websiteIcon from '../../images/website.png';
import websiteHover from '../../images/website-dark.png';
import skillsIcon from '../../images/skills.png';
import skillsHover from '../../images/skills-dark.png';
import defaultProjectImage from '../../images/projectimage.png';
import DefaultButton from '../DefaultButton';
import TechnologyBadgesContainer from '../TechnologyBadgesContainer';
import AppContext from '../../context/AppContext';
import '../../styles/ProjectCard.css';

export default function ProjectPageGridProjectCard({
  id,
  image,
  name,
  description,
  repository,
  website,
  tags,
  technologies
}) {

  const { showSkills, setShowSkills, setIdSkill, idSkill } = useContext(AppContext);

  const showSkillsOnClick = () => {
    if (!showSkills) {
      setIdSkill(id);
      setShowSkills(true);
    } else if (showSkills && idSkill === id) {
      setShowSkills(false);
    }
  };

  return (
    <div className={`project-card`}>
      <div className="project-card-content">
        <div className="image-wrapper">
          <img
            src={image ? image : defaultProjectImage}
            alt={`Imagem do Projeto ${name}`}
            className="project-image"
          />
        </div>
        <div className="project-info-wrapper">
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
        </div>
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

          <DefaultButton
            name="Skills"
            className="btn-skills"
            icon={skillsIcon}
            iconHover={skillsHover}
            onClick={showSkillsOnClick}
          />
        </section>
      </div>
    </div>
  );
}

ProjectPageGridProjectCard.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  repository: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  website: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
