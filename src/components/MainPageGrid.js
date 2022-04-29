import { Backdrop } from '@mui/material';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import React, { useState } from 'react';
import projects from '../projects';
import ProjectCard from './ProjectCard';

export default function MainPageGrid() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <AnimateSharedLayout type="crossfade">
      <section className="projects-container-home-wrapper">
        {projects.slice(0, 6).map((proj, i) => (
          <ProjectCard
            {...proj}
            key={i}
            framerMotionProps={{ onClick: () => setSelectedId(proj.id), layoutId: proj.id }}
          />
        ))}
      </section>
      <AnimatePresence>
        {selectedId && (
          <Backdrop open={open} onClick={() => setSelectedId(null)} sx={{zIndex: 6}} >
            <div className="project-card-open">
              <ProjectCard
                {...projects[selectedId - 1]}
                framerMotionProps={{ layoutId: selectedId }}
              />
            </div>
          </Backdrop>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}
