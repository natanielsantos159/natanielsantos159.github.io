import React, { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import seeMoreIcon from '../images/see-more.png';
import seeMoreHover from '../images/see-more-dark.png';
import useOnScreen from '../hooks/useOnScreen';
import Carousel from '../components/Carousel';
import { IconButton } from '@mui/material';
import gridIcon from '../images/grid-icon.png';
import carouselIcon from '../images/carousel.png';
import { motion } from 'framer-motion';
import MainPageGrid from '../components/MainPageGrid';
import AppContext from '../context/AppContext';
import DefaultButton from '../components/DefaultButton';
import ProjectSkills from '../components/ProjectSkills';
import '../styles/ProjectsContainer.css';

export default function ProjectsContainer() {
  const ref = useRef();
  useOnScreen(ref, '-250px', 'projects');
  const { viewMode, setViewMode } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    setViewMode('carousel');
  }, []);

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
            <img src={carouselIcon} style={{ height: '27px' }} />
          </IconButton>
          {viewMode === 'carousel' && (
            <motion.div className="tab switch-mode-btn" layoutId="viewModeTab" />
          )}
        </div>

        <div className="icon-wrapper">
          <IconButton
            height="small"
            padding="10px"
            sx={{ height: '50px', margin: '5px' }}
            onClick={switchMode}>
            <img src={gridIcon} style={{ height: '27px' }} />
          </IconButton>
          {viewMode === 'grid' && (
            <motion.div className="tab switch-mode-btn" layoutId="viewModeTab" />
          )}
        </div>
      </div>

      {viewMode === 'grid' ? <MainPageGrid /> : <Carousel />}

      <DefaultButton
        onClick={() => navigate('/projects')}
        className="btn-see-more"
        icon={seeMoreIcon}
        iconHover={seeMoreHover}
        name="Ver Todos os Projetos"
      />

      <ProjectSkills />
    </section>
  );
}
