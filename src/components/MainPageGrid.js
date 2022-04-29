import { Backdrop } from '@mui/material';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import React, { useState } from 'react';
import projects from '../projects';
import ProjectCard from './ProjectCard';
import SkillsList from './SkillsList';

export default function MainPageGrid() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <AnimateSharedLayout type="crossfade">
      <section className="projects-container-home-wrapper">
        {projects.slice(0, 6).map((proj, i) => (
          <ProjectCard
            {...proj}
            key={i}
            framerMotionProps={{
              onClick: (e) => {
                if (!e.target.classList.contains('default-btn')) setSelectedId(proj.id);
              },
              layoutId: proj.id
            }}
          />
        ))}
      </section>
      <AnimatePresence>
        {selectedId && (
          <Backdrop open={open} onClick={() => setSelectedId(null)} sx={{ zIndex: 6 }}>
            <div className="project-card-open">
              <ProjectCard
                {...projects[selectedId - 1]}
                framerMotionProps={{ layoutId: selectedId }}
                expandTechnologies>
                <section className="homepage-skills">
                  <h2>Skills</h2>
                  <SkillsList index={selectedId - 1} />
                </section>
              </ProjectCard>
            </div>
          </Backdrop>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}
