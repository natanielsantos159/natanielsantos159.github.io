import React from 'react'
import '../styles/Project.css';

export default function Project({image, name, description}) {
  return (
    <div className="project-card">
      <img src={image} alt={`Imagem do Projeto ${name}`} className="project-image" />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  )
}
