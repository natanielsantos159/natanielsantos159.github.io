import React, { useContext, useEffect } from "react";
import "../styles/ProjectSkills.css";
import ReactMarkdown from "react-markdown";
import closeIcon from "../images/close.png";
import AppContext from "../context/AppContext";
import projects from "../data";

export default function ProjectSkills() {
  const {
    showSkills: show,
    setShowSkills,
    idSkill: id,
  } = useContext(AppContext);

  const closeModal = () => {
    setShowSkills(false);
    document.body.style.overflow = "scroll";
  };

  useEffect(() => {
    const escListener = ({ code }) => {
      if (code === "Escape") closeModal();
    };
    document.addEventListener("keydown", escListener);

    return () => document.removeEventListener("keydown", escListener);
  }, []);

  return (
    <>
      {show && id ? (
        <>
          <div id="mask" onClick={closeModal}></div>
          <section className="project-skills">
            <button className="close-btn" onClick={closeModal}>
              <img src={closeIcon} alt="Fechar" />
            </button>
            <h1>{projects[id - 1].name}</h1>
            <ul className="skills-list">
              {projects[id - 1].skills &&
                projects[id - 1].skills.map((skill, i) => (
                  <li key={i} className="skill">
                    <ReactMarkdown>{skill}</ReactMarkdown>
                  </li>
                ))}
            </ul>
          </section>
        </>
      ) : null}
    </>
  );
}
