import React from "react";
import PlanetsSvg from "../components/PlanetsSvg";
import profilePicture from "../images/profile-picture.jpg";

import "../styles/AboutMe.css";

export default function AboutMe() {
  return (
    <div className="welcome-container">
      <div className="info-wrapper">
        <div>
          <h1>Oii, tudo bem?</h1>
          <p className="about-me-home">
            Me chamo Nataniel Santos, tenho 20 anos e moro em Santa inês - MA.
            Atualmente estou estudando Desenvolvimento Web(Full Stack) na Trybe.
            Sempre fui apaixonado por tecnologia, já tenho um bom conhecimento
            em front-end e estou dando os meus primeiros passos em back-end!
          </p>
        </div>
        <img
          className="profile-picture"
          src={profilePicture}
          alt="Foto de Perfil"
        />
        <PlanetsSvg />
      </div>
    </div>
  );
}
