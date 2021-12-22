import React from 'react'
import Project from '../components/Project';
import projects from '../data';
import '../styles/Projects.css';

export default function Projects() {
  return (
    <div>
      <h1>Projetos</h1>
      <section className="projects-section">
        { projects.map((proj) => <Project name={proj.name} image={proj.image} description={proj.description}/>)}
      </section>
    </div>
  )
}
