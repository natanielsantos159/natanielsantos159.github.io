import PropTypes from "prop-types"
import React from 'react'
import '../styles/TechnologyCard.css';

export default function TechnologyCard({iconClass, name}) {
  return (
    <div className="technology-card">
      <i className={iconClass} ></i>
      <h3>{name}</h3>
    </div>
  )
}

TechnologyCard.propTypes = {
  iconClass: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
