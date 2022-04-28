import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Carousel.css';
import projects from '../projects';
import { IconButton } from '@mui/material';
import arrowLeftIcon from '../images/arrow-left.png';
import arrowRightIcon from '../images/arrow-right.png';
import { motion } from 'framer-motion';

export default function Carousel() {
  const [carouselProjects] = useState(projects.slice(0, 6));
  const [carouselClasses, setCarouselClasses] = useState([
    'far-left',
    'mid-left',
    'center-item',
    'mid-right',
    'far-right',
    'hidden'
  ]);

  const previousItem = () => {
    const copy = [...carouselClasses];
    copy.unshift(copy.pop());
    setCarouselClasses(copy);
  };

  const nextItem = () => {
    const copy = [...carouselClasses];
    copy.push(copy.shift());
    setCarouselClasses(copy);
  };

  function template({ x }) {
    return `translateX(calc(${x} - 50%)) translateY(0px) translateZ(0px)`;
  }

  const framerMotionProps = {
    drag: 'x',
    transformTemplate: template,
    dragConstraints: { left: 15, right: 15 },
    onDragEnd: (_event, info) => {
      if (info.offset.x > 150 || info.velocity.x > 100) nextItem();
      if (info.offset.x < -150 || info.velocity.x < -100) previousItem();
    },
    dragSnapToOrigin: false
  };

  return (
    <motion.section className="carrousel-mode">
      {carouselProjects.map((proj, i) => (
        <ProjectCard
          {...proj}
            carouselClass={carouselClasses[i]}
            key={i}
          framerMotionProps={{...framerMotionProps }}
          expandTechnologies
        />
      ))}
      <IconButton height="small" sx={{ position: 'absolute', top: '50%', left: '20%', zIndex: 6 }}>
        <img src={arrowLeftIcon} onClick={nextItem} />
      </IconButton>
      <IconButton size="small" sx={{ position: 'absolute', top: '50%', left: '80%', zIndex: 6 }}>
        <img src={arrowRightIcon} onClick={previousItem} />
      </IconButton>
    </motion.section>
  );
}
