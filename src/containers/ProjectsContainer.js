import React, { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import seeMoreIcon from '../images/see-more.png';
import seeMoreHover from '../images/see-more-dark.png';
import useOnScreen from '../hooks/useOnScreen';
import Carousel from '../components/Carousel';
import gridIcon from '../images/grid-icon.png';
import carouselIcon from '../images/carousel.png';
import MainPageGrid from '../components/MainPageGrid';
import AppContext from '../context/AppContext';
import DefaultButton from '../components/DefaultButton';
import ProjectSkills from '../components/ProjectSkills';
import useMediaQuery from '@mui/material/useMediaQuery';

import '../styles/ProjectsContainer.css';
import SwitchViewButton from '../components/SwitchViewButton';

export default function ProjectsContainer() {
  const ref = useRef();
  useOnScreen(ref, '-250px', 'projects');
  const { viewMode, setViewMode } = useContext(AppContext);
  const navigate = useNavigate();
  const isMobileView = useMediaQuery('(max-width:450px)');

  useEffect(() => {
    setViewMode('grid');
  }, []);

  const switchMode = () => setViewMode(viewMode === 'carousel' ? 'grid' : 'carousel');

  return (
    <section className="projects-container-home" ref={ref}>
      <h1>Meus Projetos</h1>
      { !isMobileView && <div className="switch-mode-btns">
        <SwitchViewButton
          icon={carouselIcon}
          isSeletected={ viewMode === 'carousel' }
          onClick={ switchMode }
        />
        <SwitchViewButton
          icon={gridIcon}
          isSeletected={ viewMode === 'grid' }
          onClick={ switchMode }
        />
      </div>}

      {viewMode === 'grid' || isMobileView ? <MainPageGrid /> : <Carousel />}

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
