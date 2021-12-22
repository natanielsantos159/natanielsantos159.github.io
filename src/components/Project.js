import React from 'react'

export default function Project({image, name, children: description}) {
  return (
    <div className="project">
      <img src={image} alt={`Imagem do Projeto ${name}`}/>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  )
}
