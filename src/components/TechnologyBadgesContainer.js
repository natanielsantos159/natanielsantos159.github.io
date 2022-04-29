import PropTypes from 'prop-types';
import React from 'react';
import TechnologyBadge from './TechnologyBadge';
import '../styles/TechnologyBadgesContainer.css';
export default function TechnologyBadgesContainer({
  technologies,
  expandTechnologies,
  amount = technologies.length
}) {
  return (
    <div className={`techs ${expandTechnologies ? 'expanded' : ''}`}>
      {technologies.slice(0, amount).map((tech, i) => (
        <TechnologyBadge tech={tech} key={i} expandTechnologies={expandTechnologies} i={i} />
      ))}
    </div>
  );
}

TechnologyBadgesContainer.propTypes = {
  amount: PropTypes.number,
  expandTechnologies: PropTypes.bool,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired
};
