import React, { createContext, useState } from 'react'

export const DarkModeContext = createContext({});

const DarkModeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleMode = () => {
    if (isDarkMode) {
      setIsDarkMode(false)
    } else{
      setIsDarkMode(true)
    }
  };

  const State = {
    isDarkMode,
    handleMode
  };

  return (
    <DarkModeContext.Provider value={State}>
      {children}
    </DarkModeContext.Provider>
  )
}

export default DarkModeContextProvider 