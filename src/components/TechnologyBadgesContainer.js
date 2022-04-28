import PropTypes from 'prop-types';
import React from 'react';
import TechnologyBadge from './TechnologyBadge';

export default function TechnologyBadgesContainer({
  technologies,
  expandTechnologies,
  amount = technologies.length
}) {
  return (
    <div className="techs">
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
