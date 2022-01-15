import React from "react";
import AboutMe from "../containers/AboutMe";
import ContactMe from "../containers/ContactMe";
import ProjectsContainer from "../containers/ProjectsContainer";
import "../styles/Home.css";

export default function Home() {
  return (
    <main className="homepage">
      <AboutMe />
      <ProjectsContainer />
      <ContactMe />
    </main>
  );
}
