import React from "react";
import ReactDOM from "react-dom/client";
import App from "./screens/App";
import "./index.css";
import DarkModeContextProvider from "./context/DarkModeContext";
import FavsContectProvider from "./context/FavsContect";
import AuthContextProvider from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DarkModeContextProvider>
        <FavsContectProvider>
          <App />
        </FavsContectProvider>
      </DarkModeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
