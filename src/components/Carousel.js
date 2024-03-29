import React, { useState } from 'react';
import CarouselProjectCard from './ProjectCard/CarouselProjectCard';
import projects from '../projects';
import { IconButton } from '@mui/material';
import arrowLeftIcon from '../images/arrow-left.png';
import arrowRightIcon from '../images/arrow-right.png';
import { motion } from 'framer-motion';
import '../styles/Carousel.css';

export default function Carousel() {
  const [carouselProjects] = useState(projects.slice(0, 6));
  const [carouselClasses, setCarouselClasses] = useState([
    'mid-right',
    'far-right',
    'hidden',
    'far-left',
    'mid-left',
    'center-item',
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
    dragSnapToOrigin: false,
    style: { transition: '0.3s left, 0.3s transform, 0.4s filter' }
  };

  const buttonStyles = { 
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: '50%',
    zIndex: 6,
    height: '72vh',
    minWidth: '20vw',
  }

  return (
    <motion.section className="carrousel-mode">
      {carouselProjects.map((proj, i) => (
        <CarouselProjectCard
          {...proj}
          carouselClass={carouselClasses[i]}
          key={i}
          framerMotionProps={{ ...framerMotionProps }}
        />
      ))}
      <IconButton sx={ { ...buttonStyles, transform: 'translate(-200%, -50%)'}} onClick={nextItem}>
        <img src={arrowLeftIcon} />
      </IconButton>
      <IconButton sx={{ ...buttonStyles, transform: 'translate(100%, -50%)'}} onClick={previousItem}>
        <img src={arrowRightIcon} />
      </IconButton>
    </motion.section>
  );
}
