import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import FractalTree from './components/FractalTree';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div style={{ background: 'black' }}>
      <Navbar />
      {/* Add paddingTop to account for fixed navbar height */}
      <div style={{ paddingTop: '80px' }}>
        <FractalTree />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
