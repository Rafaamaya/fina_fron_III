import React, { Suspense, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { navigation } from "../navigation/routes";
import { DarkModeContext } from "../context/DarkModeContext";

function App() {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <Suspense fallback={<h1>Hola, Cargando tu página...</h1>}>
        <BrowserRouter>
          <div className={isDarkMode? "dark conteiner" : "App conteiner"}>
            <Navbar />
            <Routes>
              {navigation.map(({ id, path, Element }) => (
                <Route key={id} path={path} element={<Element />} />
              ))}
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
    </Suspense>
  );
}

export default App;
