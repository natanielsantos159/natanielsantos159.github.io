import React, { useRef } from 'react';
import TechnologyCard from '../components/TechnologyCard';
import useOnScreen from '../hooks/useOnScreen';
import technologies from '../technologies';
import '../styles/Technologies.css';

export default function Technologies() {
  const ref = useRef();
  useOnScreen(ref, '-250px', 'technologies');

  return (
    <section className="technologies-container" ref={ref}>
      <h1>Tecnologias</h1>
      <section className="technologies-wrapper">
        { technologies.map(({name, ...imgProps}, i)=> (
          <TechnologyCard name={name} {...imgProps} key={i} i={i} />
        ))}
      </section>
    </section>
  );
}
