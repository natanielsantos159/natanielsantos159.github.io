import React, { useContext, useEffect } from "react";
import SkillsList from "./SkillsList";
import AppContext from "../context/AppContext";
import projects from "../projects";
import { motion } from "framer-motion";
import closeIcon from "../images/close.png";
import tipIcon from "../images/tip.png";

import "../styles/ProjectSkills.css";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

export default function ProjectSkills() {
  const {
    showSkills: show,
    setShowSkills,
    idSkill: id,
    isFirstTimeTip,
    setIsFirstTimeTip,
    viewMode,
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
      {show && id && viewMode === "grid" ? (
        <div className="backdrop" onClick={closeModal}>
          <motion.div
            className="project-skills"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button className="close-btn" onClick={closeModal}>
              <img src={closeIcon} alt="Fechar" />
            </button>
            <h1>{projects[id - 1].name}</h1>
            <SkillsList index={id - 1} />
            {isFirstTimeTip && (
              <section className="tip-section">
                <img src={tipIcon} alt="Dica" />
                <span className="tip">Dica:</span>
                <span>
                  pressione <code>Esc</code> para fechar.
                </span>
              </section>
            )}
          </motion.div>
        </div>
      ) : null}
    </>
  );
}
