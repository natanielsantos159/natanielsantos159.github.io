import React, { useContext, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import AppContext from '../context/AppContext';
import projects from '../projects';

import gridIcon from '../images/grid-icon.png';
import listIcon from '../images/list-icon.png';
import ProjectSkills from '../components/ProjectSkills';
import ScrollToTop from '../components/ScrollToTop';
import Checkbox from '../components/Checkbox';
import { useMediaQuery } from '@mui/material';
import '../styles/Projects.css';
import SwitchViewButton from '../components/SwitchViewButton';

export default function Projects() {
  const { showAllSkills, setShowAllSkills, setShowSkills, viewMode, setViewMode, setOnScreen } =
    useContext(AppContext);
  const isTabletView = useMediaQuery('(max-width:800px)');

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
        {!isTabletView && viewMode === 'list' && (
          <Checkbox onClick={() => setShowAllSkills(!showAllSkills)} checked={showAllSkills}>
            Expandir todas as skills
          </Checkbox>
        )}
        {!isTabletView && <div className="switch-mode-btns">
          <SwitchViewButton
            icon={ gridIcon }
            isSelected={ viewMode === 'grid' }
            onClick={ switchViewMode }
          />
          <SwitchViewButton
            icon={ listIcon }
            isSelected={ viewMode === 'list' }
            onClick={ switchViewMode }
          />
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
