import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';  // Ensure you have this component
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import { Footer } from './components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Navbar />
      <Home />
      <About />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </Router>
  );
}

export default App;
