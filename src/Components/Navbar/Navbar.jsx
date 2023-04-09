import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/DarkModeContext";
import LogoutIcon from "@mui/icons-material/Logout";
import DarkModeIcon from "@mui/icons-material/DarkMode";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { isDarkMode, handleMode } = useContext(DarkModeContext);

  const handleDarkMode = () => {
    handleMode();
  };
  return (
    <nav className={isDarkMode ? "dark" : null}>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favs</Link>
      <DarkModeIcon
        className="darkthemeicon"
        alt="darkmodeicon"
        onClick={handleDarkMode}
      />
      <LogoutIcon
        className="logout"
        alt="logouticon"
        onClick={handleDarkMode}
      />
    </nav>
  );
};

export default Navbar;
