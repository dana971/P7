import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import FicheLogement from "./pages/Fiche-Logement";
import About from "./pages/A-Propos";
import Error from "./components/404";


ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Routes>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/fiche-logement">
                <FicheLogement/>
            </Route>
            <Route exact path="/about">
                <About/>
            </Route>
            <Route>
                <Error/>
            </Route>
        </Routes>
    </Router>
  </React.StrictMode>
);


