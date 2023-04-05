import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../context/DarkModeContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { isDarkMode, handleMode } = useContext(DarkModeContext);
  
  const handleDarkMode = () =>{
    handleMode();
  }
  return (
    <nav className={isDarkMode? "dark" : "App"}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favs</Link>
      <button onClick={handleDarkMode}>Change theme</button>
    </nav>
  );
};

export default Navbar;
