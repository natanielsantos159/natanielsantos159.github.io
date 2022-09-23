import { Backdrop, useMediaQuery } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import projects from '../projects';
import GridProjectCard from './ProjectCard/GridProjectCard';

export default function MainPageGrid() {
  const [selectedId, setSelectedId] = useState(null);
  const isTabletView = useMediaQuery('(max-width:800px)');

  return (
    <>
      <section className="projects-container-home-wrapper">
        {projects.slice(0, 6).map((proj, i) => (
          <GridProjectCard
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
              <GridProjectCard
                {...projects[selectedId - 1]}
                framerMotionProps={{ layoutId: selectedId }}
                expandTechnologies
                animateCrossfade
                showSkillsBtn={false}
                showSkillsList={true}
              />
            </div>
          </Backdrop>
        )}
      </AnimatePresence>
    </>
  );
}
