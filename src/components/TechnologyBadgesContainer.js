import PropTypes from "prop-types";
import React from "react";
import TechnologyBadge from "./TechnologyBadge";

export default function TechnologyBadgesContainer({
  technologies,
  showTechnologies,
  amount = technologies.length,
}) {
  return (
    <div className="techs">
      {technologies.slice(0, amount).map((tech, i) => (
        <TechnologyBadge
          tech={tech}
          key={i}
          showTechnologies={showTechnologies}
        />
      ))}
    </div>
  );
}

TechnologyBadgesContainer.propTypes = {
  amount: PropTypes.number,
  showTechnologies: PropTypes.bool,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
