import React from "react";
import AboutMe from "../containers/AboutMe";
import ContactMe from "../containers/ContactMe";
import ProjectsContainer from "../containers/ProjectsContainer";
import ProjectSkills from "./ProjectSkills";
import { Element } from "react-scroll";
import "../styles/Home.css";

export default function Home() {
  return (
    <main className="homepage">
      <AboutMe />
      <ProjectsContainer />
      <Element name="contact-container">
        <ContactMe />
      </Element>
      <ProjectSkills />
    </main>
  );
}
