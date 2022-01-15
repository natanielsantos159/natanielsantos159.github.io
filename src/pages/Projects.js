import React from 'react'
import Project from '../components/Project';
import projects from '../data';
import '../styles/Projects.css';

export default function Projects() {
  return (
    <main className="projects-page">
      <h1 className="projects-h1">Projetos</h1>
      <section className="projects-section">
        { projects.map((proj) => <Project {...proj} />)}
      </section>
    </main>
  )
}
