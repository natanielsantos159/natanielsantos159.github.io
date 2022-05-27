import { Backdrop, useMediaQuery } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import projects from '../projects';
import ProjectCard from './ProjectCard';
import SkillsList from './SkillsList';

export default function MainPageGrid() {
  const [selectedId, setSelectedId] = useState(null);
  const isTabletView = useMediaQuery('(max-width:800px)');

  return (
    <>
      <section className="projects-container-home-wrapper">
        {projects.slice(0, 6).map((proj, i) => (
          <ProjectCard
            {...proj}
            key={i}
            framerMotionProps={ !isTabletView && {
              onClick: ({ target: { classList }}) => {
                if (classList.contains('default-btn') && !classList.contains('btn-skills')) return;
                setSelectedId(proj.id);
              },
              layoutId: proj.id
            }}
            animateCrossfade={ !isTabletView }
          />
        ))}
      </section>
      <AnimatePresence>
        {selectedId && (
          <Backdrop open={open} onClick={() => setSelectedId(null)} sx={{ zIndex: 8 }}>
            <div className="project-card-open">
              <ProjectCard
                {...projects[selectedId - 1]}
                framerMotionProps={{ layoutId: selectedId }}
                expandTechnologies
                animateCrossfade
                showSkillsBtn={false}>
                <section className="homepage-skills">
                  <h2>Skills</h2>
                  <SkillsList index={selectedId - 1} />
                </section>
              </ProjectCard>
            </div>
          </Backdrop>
        )}
      </AnimatePresence>
    </>
  );
}
