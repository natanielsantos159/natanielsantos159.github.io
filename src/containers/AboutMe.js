import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import profilePicture from '../images/profile-picture.jpg';
import downloadIcon from '../images/download-icon.png';
import downloadHover from '../images/download-icon-hover.png';

import '../styles/AboutMe.css';
import DefaultButton from '../components/DefaultButton';

export default function AboutMe() {
  const ref = useRef();
  useOnScreen(ref, '-250px', 'about-me');

  return (
    <div className="about-me-container" ref={ref}>
      <h1>Sobre mim</h1>
      <div className="info-wrapper">
        <div>
          <p className="about-me-home">
            Me chamo Nataniel Santos, tenho 20 anos e moro em Santa inês - MA. Atualmente estou
            finalizando o curso Desenvolvimento Web Full Stack na Trybe e sou formado em Análise e
            Desenvolvimento de Sistemas. Sempre fui fascinado por tecnologia e no seu poder de gerar
            inovação e oportunidade na vida das pessoas.
          </p>
          <DefaultButton
            name="Download CV"
            href="https://drive.google.com/file/d/1oGv6JgZv-YJFtQD5uTiT1YSXYjVe3Yjp/view?usp=sharing"
            icon={downloadIcon}
            iconHover={downloadHover}
          />
        </div>
        <img className="profile-picture" src={profilePicture} alt="Foto de Perfil" />
      </div>
    </div>
  );
}
