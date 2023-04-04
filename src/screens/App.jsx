import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { navigation } from "../navigation/routes";

function App() {
  return (
    <Suspense fallback={<h1>Hola, Cargando tu página...</h1>}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {navigation.map(({ id, path, Element }) => (
            <Route key={id} path={path} element={<Element />} />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
