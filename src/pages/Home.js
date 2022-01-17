import React from "react";
import AboutMe from "../containers/AboutMe";
import ContactMe from "../containers/ContactMe";
import ProjectsContainer from "../containers/ProjectsContainer";
import "../styles/Home.css";
import Parallax from "react-rellax";

export default function Home() {
  return (
    <main className="homepage">
      <AboutMe />
      <Parallax speed={7}>
        <ProjectsContainer />
        <ContactMe />
      </Parallax>
    </main>
  );
}
