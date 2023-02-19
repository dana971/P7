import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import FicheLogement from "./pages/Fiche-Logement";
import About from "./pages/A-Propos";
import Error404 from "./pages/404";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer";
import "../src/utils/index.scss";
import "./assets/fonts/Montserrat-Regular.ttf";




ReactDOM.render(
  <React.StrictMode>
    <Router>
        <div className="body-wrapper">
            <Nav />
            <Routes>
                < Route path="/" element={<Home />} />
                < Route path="/fiche-logement/:id" element={<FicheLogement />} />
                < Route path="/about" element={<About />} />
                < Route path="*" element={<Error404 />} />
            </Routes>
        </div>
        <Footer />
    </Router>
  </React.StrictMode>,
   document.getElementById('root')
)


