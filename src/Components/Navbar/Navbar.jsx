import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../context/DarkModeContext";
import LogoutIcon from "@mui/icons-material/Logout";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { AuthContext } from "../../context/AuthContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { isDarkMode, handleMode } = useContext(DarkModeContext);
  const { handleLogin} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDarkMode = () => {
    handleMode();
  };
  const handleLogout = () => {
    handleLogin();
    navigate("/login");
  };

  return (
    <nav className={isDarkMode ? "dark" : null}>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favs</Link>
      <DarkModeIcon
        onClick={handleDarkMode}
      />
      <LogoutIcon
        onClick={handleLogout}
      />
    </nav>
  );
};

export default Navbar;
