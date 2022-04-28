import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Carousel.css';
import projects from '../projects';
import { IconButton } from '@mui/material';
import arrowLeftIcon from '../images/arrow-left.png';
import arrowRightIcon from '../images/arrow-right.png';

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

  return (
    <section className="carrousel-mode">
      {carouselProjects.map((proj, i) => (
        <ProjectCard {...proj} key={i} carouselClass={carouselClasses[i]} />
      ))}
      <IconButton height="small" sx={{ position: 'absolute', top: '50%', left: '20%', zIndex: 6 }}>
        <img src={arrowLeftIcon} onClick={nextItem} />
      </IconButton>
      <IconButton size="small" sx={{ position: 'absolute', top: '50%', left: '80%', zIndex: 6 }}>
        <img src={arrowRightIcon} onClick={previousItem} />
      </IconButton>
    </section>
  );
}
