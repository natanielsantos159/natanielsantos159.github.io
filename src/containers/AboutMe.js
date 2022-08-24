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
            finalizando o curso Desenvolvimento Web Full Stack na <a href="https://www.betrybe.com/">Trybe</a> e sou formado em Análise e
            Desenvolvimento de Sistemas. Sempre fui fascinado por tecnologia e no seu poder de gerar
            inovação e oportunidade na vida das pessoas.
            <br/>
            <br/>
            Nos últimos 12 meses tenho aperfeiçoado minhas capacidades, tanto Hard Skills quanto Soft Skills. 
            Ao longo de 3 módulos(Fundamentos, Front-end e Back-end), desenvolvi mais de <a href="https://github.com/natanielsantos159?tab=repositories">32 projetos</a> na Trybe até o momento
             e estou em busca da minha primeira oportunidade como desenvolvedor Full Stack Jr.
          </p>
          <DefaultButton
            name="Download CV"
            href="https://drive.google.com/file/d/1kBIozrlTEV9hh2FC3Tm3mo8kahZWo49l/view?usp=sharing"
            icon={downloadIcon}
            iconHover={downloadHover}
          />
        </div>
        <img className="profile-picture" src={profilePicture} alt="Foto de Perfil" />
      </div>
    </div>
  );
}
