import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import '../styles/TechnologyCard.css';

export default function TechnologyCard({ iconClass, name, i }) {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      className="technology-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      initial={{ opacity: 0, y: '-5vh' }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.07 * i } }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.1 }
      }}>
      <i className={`${iconClass} ${hover ? 'colored' : ''}`}></i>
      <h3>{name}</h3>
    </motion.div>
  );
}

TechnologyCard.propTypes = {
  iconClass: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired,
};
