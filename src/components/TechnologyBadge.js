import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, {  useState } from 'react';
import '../styles/TechnologyBadge.css';
import technologies from '../technologies';

export default function TechnologyBadge({ tech, expandTechnologies, i }) {
  const [hover, setHover] = useState(false);
  const width = 18;
  const margin = 4;
  const offsetLeft = expandTechnologies ? 0 : (width + (margin * 2)) * i;

  const animations = {
    initial: { opacity: 0, y: '-2vh' },
    animate: {
      opacity: 1,
      y: '-5vh',
      color: 'white',
      transition: {
        duration: 1,
        type: 'spring',
        damping: 50,
        stiffness: 800
      }
    },
    exit: {
      opacity: 0,
      y: '-2vh'
    }
  };

  const frameMotionProps = {
    variants: animations,
    initial: 'initial',
    animate: 'animate',
    exit: 'exit'
  };

  const getBadgeProps = () => {
    return !expandTechnologies ? frameMotionProps : {};
  };

  const trigger = expandTechnologies ? expandTechnologies : hover;

  const techInfo = technologies.find(({name}) => name === tech) || {};
  return (
    <>
      <div
        className="technology-badge"
        style={{ backgroundColor: `var(--color-${tech.toLowerCase()})` }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
        { techInfo.iconClass && <i className={techInfo.iconClass}></i> }
        { techInfo.imageLink && <img src={techInfo.imageHover} />}
      </div>
      <AnimatePresence exitBeforeEnter={true} onExitComplete={() => null}>
        {trigger && (
          <motion.div
            className="tech-name-overlay"
            {...getBadgeProps()}
            style={{ left: `${offsetLeft}px`}}>
            {tech}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

TechnologyBadge.propTypes = {
  tech: PropTypes.string.isRequired,
  expandTechnologies: PropTypes.bool.isRequired,
  i: PropTypes.number.isRequired
};
