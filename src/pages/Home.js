import React from 'react';
import AboutMe from '../containers/AboutMe';
import ContactMe from '../containers/ContactMe';
import ProjectsContainer from '../containers/ProjectsContainer';
import ProjectSkills from '../components/ProjectSkills';
import { Element } from 'react-scroll';
import '../styles/Home.css';
import ScrollToTop from '../components/ScrollToTop';
import Technologies from '../containers/Technologies';
import Footer from '../containers/Footer';

export default function Home() {
  return (
    <main className="homepage">
      <ScrollToTop />
      <AboutMe />

      <Element name="technologies-container">
        <Technologies />
      </Element>

      <Element name="projects-container">
        <ProjectsContainer />
      </Element>

      <Element name="contact-container">
        <ContactMe />
      </Element>

      <Footer />
      <ProjectSkills />
    </main>
  );
}
