import PropTypes from "prop-types"
import React from "react";

export default function TechnologyIcon({ tech}) {
  return (
    <div
      className="technology-icon"
      style={{ backgroundColor: `var(--color-${tech.toLowerCase()})` }}
    >
      <i
        className={`devicon-${tech.toLowerCase()}-${
          tech.toLowerCase() !== "express" ? "plain" : "original"
        }`}
      ></i>
    </div>
  );
}

TechnologyIcon.propTypes = {
  tech: PropTypes.string.isRequired,
}
