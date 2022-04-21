import React from "react";
import AboutMe from "../containers/AboutMe";
import ContactMe from "../containers/ContactMe";
import ProjectsContainer from "../containers/ProjectsContainer";
import "../styles/Home.css";
import ProjectSkills from "./ProjectSkills";
import { Element } from "react-scroll";

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
