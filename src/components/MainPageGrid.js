import React from 'react';
import projects from '../projects';
import ProjectCard from './ProjectCard';

export default function MainPageGrid() {
  return (
    <section className="projects-container-home-wrapper">
      {projects.slice(0, 6).map((proj, i) => (
        <ProjectCard {...proj} key={i} />
      ))}
    </section>
  );
}
