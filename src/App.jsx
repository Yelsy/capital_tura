// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route as RouteDOM } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import AboutAs from './components/AboutAs';
import Footer from './components/Footer';
import Services from './components/Services';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
      
          {/* Otras rutas y componentes aquí */}
        <Body />
        <AboutAs />
        <Services />
        <Footer />
      </div>
    </Router>
  );
};

export default App;


