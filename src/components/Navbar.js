import React from 'react';

export default function Navbar() {
  return (
    <nav style={{
    textAlign: 'center',
    color: '#000000e2',
    position: 'fixed',
    width: '100%',
    top: 0,
    backgroundColor: 'black',
    zIndex: 1000, // Add this to stay above other content
    fontWeight: 'bold',
  }}>
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
