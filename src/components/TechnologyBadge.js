import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import React, { useState } from "react";
import "../styles/TechnologyBadge.css";

export default function TechnologyBadge({ tech }) {
  const [hover, setHover] = useState(false);

  const animations = {
    initial: { opacity: 0, y: "-2vh" },
    animate: {
      opacity: 1,
      y: "-5vh",
      color: "white",
      transition: {
        duration: 1,
        type: "spring",
        damping: 50,
        stiffness: 800,
      },
    },
    exit: {
      opacity: 0,
      y: "-2vh",
    },
  };
  return (
    <>
      <div
        className="technology-badge"
        style={{ backgroundColor: `var(--color-${tech.toLowerCase()})` }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <i
          className={`devicon-${tech.toLowerCase()}-${
            tech.toLowerCase() !== "express" ? "plain" : "original"
          }`}
        ></i>
      </div>
      <AnimatePresence exitBeforeEnter={true} onExitComplete={() => null}>
        {hover && (
          <motion.div
            className="tech-name-overlay"
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {tech}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

TechnologyBadge.propTypes = {
  tech: PropTypes.string.isRequired,
};
