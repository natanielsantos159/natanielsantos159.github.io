import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import AppContext from '../../context/AppContext';
import githubIcon from '../../images/github.png';
import githubHover from '../../images/github-dark.png';
import websiteIcon from '../../images/website.png';
import websiteHover from '../../images/website-dark.png';
import skillsIcon from '../../images/skills.png';
import skillsHover from '../../images/skills-dark.png';
import defaultProjectImage from '../../images/projectimage.png';
import SkillsList from '../SkillsList';
import useCollapse from 'react-collapsed';
import DefaultButton from '../DefaultButton';
import TechnologyBadgesContainer from '../TechnologyBadgesContainer';
import '../../styles/ProjectCard.css';

export default function ListProjectCard({
  id,
  image,
  name,
  description,
  repository,
  website,
  tags,
  technologies
}) {
  const { showAllSkills, setShowAllSkills } = useContext(AppContext);
  const { getCollapseProps, getToggleProps, setExpanded } = useCollapse();

  useEffect(() => {
    return () => setShowAllSkills(false);
  }, []);

  useEffect(() => {
    setExpanded(showAllSkills);
  }, [showAllSkills, setExpanded]);

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
          <div className="title-and-techs-wrapper">
            <h2 className="project-name">{name}</h2>
            <TechnologyBadgesContainer technologies={technologies} amount={4} />
          </div>

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
            {...getToggleProps()}
          />
        </section>
      </div>
      <section {...getCollapseProps()}>
        <h2>Skills</h2>
        <SkillsList index={id - 1} />
      </section>
    </div>
  );
}

ListProjectCard.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  repository: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  website: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired
};
