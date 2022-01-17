import React, { useContext } from "react";
import "../styles/ProjectSkills.css";
import ReactMarkdown from "react-markdown";
import closeIcon from "../images/close.png";
import AppContext from "../context/AppContext";

export default function ProjectSkills({ name, skills }) {
  const { setShowSkills } = useContext(AppContext);
  return (
    <>
      <div id="mask"></div>
      <section className="project-skills">
        <button
          className="close-btn"
          onClick={() => {
            setShowSkills(false);
            document.body.style.overflow = "scroll";
          }}
        >
          <img src={closeIcon} alt="Fechar" />
        </button>
        <h1>{name}</h1>
        <ul className="skills-list">
          {skills &&
            skills.map((skill, i) => (
              <li key={i} className="skill">
                <ReactMarkdown>{skill}</ReactMarkdown>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}
