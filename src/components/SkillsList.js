import React from "react";
import ReactMarkdown from "react-markdown";
import projects from "../data";
import '../styles/SkillsList.css';

export default function SkillsList({index}) {
  return (
    <ul className="skills-list">
      {projects[index].skills &&
        projects[index].skills.map((skill, i) => (
          <li key={i} className="skill">
            <ReactMarkdown>{skill}</ReactMarkdown>
          </li>
        ))}
    </ul>
  );
}
