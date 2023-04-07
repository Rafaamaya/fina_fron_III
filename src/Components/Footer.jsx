import React, { useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeContext';

const Footer = () => {

    const { isDarkMode, handleMode } = useContext(DarkModeContext);
    
  return (
    <footer className={isDarkMode? "dark" : null}>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
