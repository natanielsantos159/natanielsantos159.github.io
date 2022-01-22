import React, { useContext, useEffect } from "react";
import SkillsList from "../components/SkillsList";
import AppContext from "../context/AppContext";
import projects from "../data";

import closeIcon from "../images/close.png";
import tipIcon from "../images/tip.png";

import "../styles/ProjectSkills.css";

export default function ProjectSkills() {
  const {
    showSkills: show,
    setShowSkills,
    idSkill: id,
    isFirstTimeTip,
    setIsFirstTimeTip,
    viewMode
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

    return () => {
      document.removeEventListener("keydown", escListener);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (show && isFirstTimeTip) setIsFirstTimeTip(false);
    };
  }, [show]);

  return (
    <>
      {(show && id && viewMode === "grid") ? (
        <>
          <div id="mask" onClick={closeModal}></div>
          <section className="project-skills">
            <button className="close-btn" onClick={closeModal}>
              <img src={closeIcon} alt="Fechar" />
            </button>
            <h1>{projects[id - 1].name}</h1>
            <SkillsList index={id -1} />
            {isFirstTimeTip && (
              <section className="tip-section">
                <img src={tipIcon} alt="Dica" />
                <span className="tip">Dica:</span>
                <span>
                  pressione <code>Esc</code> para fechar.
                </span>
              </section>
            )}
          </section>
        </>
      ) : null}
    </>
  );
}
