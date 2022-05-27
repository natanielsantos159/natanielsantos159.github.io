import React, { useContext, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import AppContext from '../context/AppContext';
import projects from '../projects';

import gridIcon from '../images/grid-icon.png';
import listIcon from '../images/list-icon.png';
import ProjectSkills from '../components/ProjectSkills';
import ScrollToTop from '../components/ScrollToTop';
import Checkbox from '../components/Checkbox';
import { IconButton, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

export default function Projects() {
  const { showAllSkills, setShowAllSkills, setShowSkills, viewMode, setViewMode, setOnScreen } =
    useContext(AppContext);
  const isMobileView = useMediaQuery('(max-width:450px)');
  
  const switchViewMode = () => {
    setViewMode(viewMode === 'grid' ? 'list' : 'grid');
    setShowSkills(false);
  };

  useEffect(() => {
    setViewMode('grid');
    setOnScreen('projects');
    return () => setViewMode('grid');
  }, []);

  return (
    <main className="projects-page">
      <ScrollToTop />
      <div className="header-projects-page">
        <h1 className="projects-h1">Projetos</h1>
        {viewMode === 'list' && (
          <Checkbox onClick={() => setShowAllSkills(!showAllSkills)} checked={showAllSkills}>
            Expandir todas as skills
          </Checkbox>
        )}
        {!isMobileView && <div className="switch-mode-btns">
          <div className="icon-wrapper">
            <IconButton
              height="small"
              padding="10px"
              sx={{ height: '50px', margin: '5px' }}
              onClick={switchViewMode}>
              <img src={gridIcon} style={{ height: '27px' }} />
            </IconButton>
            {viewMode === 'grid' && (
              <motion.div className="switch-mode-btn" layoutId="viewModeTab" />
            )}
          </div>

          <div className="icon-wrapper">
            <IconButton
              height="medium"
              padding="10px"
              sx={{ height: '50px', margin: '5px' }}
              onClick={switchViewMode}>
              <img src={listIcon} style={{ height: '27px' }} />
            </IconButton>
            {viewMode === 'list' && (
              <motion.div className="switch-mode-btn" layoutId="viewModeTab" />
            )}
          </div>
        </div>}
      </div>

      <section className={`projects-section ${viewMode}`}>
        {projects.map((proj, i) => (
          <ProjectCard {...proj} expandTechnologies={viewMode === 'grid'} key={i} />
        ))}
      </section>

      <ProjectSkills />
    </main>
  );
}
