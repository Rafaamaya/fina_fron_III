import React, { Suspense, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { navigation } from "../navigation/routes";
import { DarkModeContext } from "../context/DarkModeContext";
import Login from "./Login";
import ProtectedRoutes from "../navigation/ProtectedRoutes";

function App() {


  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <Suspense fallback={<h1>Hola, Cargando tu página...</h1>}>
      <BrowserRouter>
        <div className={isDarkMode ? "dark conteiner" : "App conteiner"}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoutes />}>
              {navigation.map(({ id, path, Element }) => (
                <Route
                  key={id}
                  path={path}
                  element={
                    <>
                      <Navbar />
                      <Element />
                      <Footer />
                    </>
                  }
                />
              ))}
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}
export default App;
