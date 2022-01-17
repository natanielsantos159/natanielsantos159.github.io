import React from 'react'
import '../styles/ProjectSkills.css';
import ReactMarkdown from 'react-markdown';

export default function ProjectSkills({name, skills}) {
  console.log(skills)
  return (
    <section className="project-skills">
      <h1>{name}</h1> 
      <ul className="skills-list">
      {skills && skills.map((skill, i)=> <li key={i} className="skill"><ReactMarkdown>{skill}</ReactMarkdown></li> )}
      </ul>
    </section>
  )
}
