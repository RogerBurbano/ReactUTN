// import logo from './logo.svg';
import "./App.css";

import "../src/styles/normalize.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./componentes/layout/Header";
import Nav from "./componentes/layout/Nav";
import Footer from "./componentes/layout/Footer";

import HomePage from "./pages/HomePage";
import NosotrosPage from "./pages/NosotrosPage";
import ServicioPage from "./pages/ServiciosPage";
import GaleriaPage from "./pages/GaleriaPage";
import ContactoPage from "./pages/ContactoPage";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/nosotros" element={<NosotrosPage />}></Route>
          <Route path="/servicios" element={<ServicioPage />}></Route>
          <Route path="/galeria" element={<GaleriaPage />}></Route>
          <Route path="/contacto" element={<ContactoPage />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
