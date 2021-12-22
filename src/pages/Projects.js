import React from 'react'
import Project from '../components/Project';

export default function Projects() {
  return (
    <div>
      <h1>Projetos</h1>
      <section className="projects-section">
        <Project 
          name="TrybeTunes"
          image="https://github.com/natanielsantos159/trybetunes/raw/main/src/images/trybetuneshomepage.png">
            Uma aplicação web para pesquisar e salvar as músicas favoritas
        </Project>
      </section>
    </div>
  )
}
