import PropTypes from 'prop-types';
import React, { useState } from 'react';
import '../styles/TechnologyCard.css';

export default function TechnologyCard({ iconClass, name }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="technology-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <i className={`${iconClass} ${hover ? 'colored' : ''}`}></i>
      <h3>{name}</h3>
    </div>
  );
}

TechnologyCard.propTypes = {
  iconClass: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
