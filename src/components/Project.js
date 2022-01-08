import React from 'react'
import '../styles/Project.css';

export default function Project({image, name, description}) {
  return (
    <div className="project-card">
      <div className="image-wrapper">
        <img src={image} alt={`Imagem do Projeto ${name}`} className="project-image" />
      </div>
      <h2 className="project-name">{name}</h2>
      <p>{description}</p>
    </div>
  )
}
