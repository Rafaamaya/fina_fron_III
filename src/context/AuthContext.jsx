import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("auth") ? true : false
  );

  const handleLogin = () => {
    setIsLogged(true);
    localStorage.setItem("auth", JSON.stringify(true));
  };

  const propiedades = {
    isLogged,
    handleLogin,
  };

  return (
    <AuthContext.Provider value={propiedades}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
