import React from "react";
import "../styles/Project.css";

export default function ProjectCard({
  image,
  name,
  description,
  repository,
  website,
}) {
  console.log(repository, website);
  return (
    <div className="project-card">
      <div className="image-wrapper">
        <img
          src={image}
          alt={`Imagem do Projeto ${name}`}
          className="project-image"
        />
      </div>
      <h2 className="project-name">{name}</h2>
      <p className="project-description">{description}</p>
      <section className="btn-wrapper">
        <a href={repository} className="btn-repository" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={website} className="btn-website" target="_blank" rel="noreferrer">
          Website
        </a>
      </section>
    </div>
  );
}
