import React, { useRef } from 'react';
import TechnologyCard from '../components/TechnologyCard';
import useOnScreen from '../hooks/useOnScreen';
import '../styles/Technologies.css';

export default function Technologies() {
  const ref = useRef();
  useOnScreen(ref, '-250px', 'technologies');

  const technologies = [
    { name: 'Node JS', iconClass: 'devicon-nodejs-plain' },
    { name: 'React JS', iconClass: 'devicon-react-plain' },
    { name: 'TypeScript', iconClass: 'devicon-typescript-plain' },
    { name: 'Redux', iconClass: 'devicon-redux-plain' },
    { name: 'CSS3', iconClass: 'devicon-css3-plain' },
    { name: 'HTML5', iconClass: 'devicon-html5-plain' },
    { name: 'JavaScript', iconClass: 'devicon-javascript-plain' },
    { name: 'Express', iconClass: 'devicon-express-original' },
    { name: 'Docker', iconClass: 'devicon-docker-plain' },
    { name: 'Sequelize', iconClass: 'devicon-sequelize-plain' },
    { name: 'MySQL', iconClass: 'devicon-mysql-plain' },
    { name: 'MongoDB', iconClass: 'devicon-mongodb-plain' },
    { name: 'Jest', iconClass: 'devicon-jest-plain' },
    { name: 'Git', iconClass: 'devicon-git-plain' }
  ];
  return (
    <section className="technologies-container" ref={ref}>
      <h1>Tecnologias</h1>
      <section className="technologies-wrapper">
        { technologies.map(({name, iconClass}, i)=> (
          <TechnologyCard name={name} iconClass={iconClass} key={i} i={i} />
        ))}
      </section>
    </section>
  );
}
