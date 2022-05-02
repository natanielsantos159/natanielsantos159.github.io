import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import AppContext from './AppContext';

export default function Provider({ children }) {
  const [showSkills, setShowSkills] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [idSkill, setIdSkill] = useState();
  const [isFirstTimeTip, setIsFirstTimeTip] = useState(true);
  const [viewMode, setViewMode] = useState('grid');
  const [onScreen, setOnScreen] = useState('');
  const isScrollingRef = useRef(false);

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
    setViewMode,
    onScreen,
    setOnScreen,
    isScrollingRef,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node
};
