import React, { useState } from 'react';
import AppContext from './AppContext';

export default function Provider({ children }) {
  const [showSkills, setShowSkills] = useState(false);
  const [ idSkill, setIdSkill ] = useState();
  const [isFirstTimeTip, setIsFirstTimeTip] = useState(true);

  const contextValue = {
    showSkills,
    setShowSkills,
    idSkill,
    setIdSkill,
    isFirstTimeTip,
    setIsFirstTimeTip
  };
  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  )
}
