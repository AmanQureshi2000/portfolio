import React,{useState,useEffect} from 'react';

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) return null; // Hide on mobile
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
