import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import seeMoreIcon from '../images/see-more.png';
import seeMoreHover from '../images/see-more-dark.png';
import useOnScreen from '../hooks/useOnScreen';
import '../styles/ProjectsContainer.css';
import Carousel from '../components/Carousel';
import { IconButton } from '@mui/material';
import gridIcon from '../images/grid-icon.png';
import carouselIcon from '../images/carousel.png';
import { motion } from 'framer-motion';
import MainPageGrid from '../components/MainPageGrid';

export default function ProjectsContainer() {
  const ref = useRef();
  useOnScreen(ref, '-250px', 'projects');
  const [seeMoreBtnHover, setSeeMoreBtnHover] = useState(false);
  const [viewMode, setViewMode] = useState('carousel');

  const switchMode = () => setViewMode(viewMode === 'carousel' ? 'grid' : 'carousel');

  return (
    <section className="projects-container-home" ref={ref}>
      <h1>Meus Projetos</h1>
      <div className="switch-mode-btns">
        <div className="icon-wrapper">
          <IconButton
            height="medium"
            padding="10px"
            sx={{ height: '50px', margin: '5px' }}
            onClick={switchMode}>
            <img src={carouselIcon} style={{ height: '32px' }} />
          </IconButton>
          {viewMode === 'carousel' && <motion.div className="tab" layoutId="viewModeTab" />}
        </div>

        <div className="icon-wrapper">
          <IconButton
            height="small"
            padding="10px"
            sx={{ height: '50px', margin: '5px' }}
            onClick={switchMode}>
            <img src={gridIcon} style={{ height: '32px' }} />
          </IconButton>
          {viewMode === 'grid' && <motion.div className="tab" layoutId="viewModeTab" />}
        </div>
      </div>

      {viewMode === 'grid' ? <MainPageGrid /> : <Carousel />}

      <Link
        to="/projects"
        className="default-btn btn-see-more"
        onMouseEnter={() => setSeeMoreBtnHover(true)}
        onMouseLeave={() => setSeeMoreBtnHover(false)}>
        <img src={seeMoreBtnHover ? seeMoreHover : seeMoreIcon} alt="Ver Todos os Projetos" />
        Ver Todos os Projetos
      </Link>
    </section>
  );
}
