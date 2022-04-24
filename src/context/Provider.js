import PropTypes from "prop-types"
import React, { useState } from 'react';
import AppContext from './AppContext';

export default function Provider({ children }) {
  const [showSkills, setShowSkills] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [ idSkill, setIdSkill ] = useState();
  const [isFirstTimeTip, setIsFirstTimeTip] = useState(true);
  const [viewMode, setViewMode] = useState("grid");

  const contextValue = {
    showSkills,
    setShowSkills,
    idSkill,
    setIdSkill,
    isFirstTimeTip,
    setIsFirstTimeTip,
    showAllSkills,
    setShowAllSkills,
    viewMode,
    setViewMode
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node
}
