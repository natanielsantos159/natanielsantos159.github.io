import React, { useContext } from "react";
import AboutMe from "../containers/AboutMe";
import ContactMe from "../containers/ContactMe";
import ProjectsContainer from "../containers/ProjectsContainer";
import "../styles/Home.css";
import Parallax from "react-rellax";
import ProjectSkills from "./ProjectSkills";
import projects from "../data";
import AppContext from "../context/AppContext";

export default function Home() {
  const { showSkills } = useContext(AppContext);
  const { idSkill } = useContext(AppContext);

  return (
    <main className="homepage">
      <AboutMe />
      <Parallax speed={6}>
        <ProjectsContainer />
        <ContactMe />
      </Parallax>
      {showSkills && idSkill && (
        <ProjectSkills
          name={projects[idSkill - 1].name}
          skills={projects[idSkill - 1].skills}
        />
      )}
    </main>
  );
}
