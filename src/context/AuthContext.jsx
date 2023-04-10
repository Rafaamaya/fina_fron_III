import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("auth") ? true : false
  );

  const handleLogin = () => {
    if (!isLogged) {
      setIsLogged(true);
      localStorage.setItem("auth", JSON.stringify(true));
    }else{
      localStorage.clear()
    }
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
