import React, { useState } from 'react';
import AppContext from './AppContext';

export default function Provider({ children }) {
  const [showSkills, setShowSkills] = useState(false);
  const [ idSkill, setIdSkill ] = useState();

  const contextValue = {
    showSkills,
    setShowSkills,
    idSkill,
    setIdSkill,
  };
  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  )
}
