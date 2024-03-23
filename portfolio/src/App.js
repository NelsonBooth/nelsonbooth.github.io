import React, { useEffect } from 'react';
import './reactStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  // State for managing the nav menu's visibility on mobile
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  // Listen for window resize events
  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth > 867 && window.innerHeight > 867) {
        setIsMenuVisible(false); // set side navbar state to false
      }
    };
    window.addEventListener('resize', handleResize)

    // Cleanup the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <nav>
      <a href="#home" onClick={() => isMenuVisible && toggleMenu()}><img src={`${process.env.PUBLIC_URL}/Personal Logo.png`} alt="Logo" /></a>
        <div className={isMenuVisible ? "nav-links show" : "nav-links"}>
          <FontAwesomeIcon icon={faXmark} onClick={toggleMenu} className="menu-icon"/>
            <ul>
                <li><a href="#about" onClick={toggleMenu}>ABOUT</a></li>
                <li><a href="#skills" onClick={toggleMenu}>SKILLS</a></li>
                <li><a href="#projects" onClick={toggleMenu}>PROJECTS</a></li>
                <li><a href={`${process.env.PUBLIC_URL}/Nelson_Booth.pdf`} download="Nelson_Booth.pdf">RESUME</a></li>
            </ul>
        </div>
        <FontAwesomeIcon icon={faBars} onClick={toggleMenu} className="menu-icon"/>
      </nav>
      
      <section id="home" className="header">  
        <div className="text-box">
          <h1>Hello there! I'm Nelson!</h1>
          <p className="p1">An experienced software developer with the tools and know-how to have a track record of delivering impressive projects known for their usefulness and scalability!<br />
          </p>
          <p className="p2">"Let the future tell the truth, and evaluate each one according to his work and accomplishments. <br/>The present is theirs; the future, for which I have really worked, is mine." - Nikola Tesla</p>
        </div>
      </section>

      <section id="about" className="about-header">

        <div class="about-box">
            <h2>Who am I?</h2>
        </div>

      </section>

      <section id="skills" className="skills-header">

        <div class="skills-box">
            <h3>My Skills</h3>
        </div>

      </section>

      <section id="projects" className="projects-header">

        <div class="projects-box">
            <h4>Browse My Projects</h4>
        </div>

      </section>
      
    </div>
  );
};

export default App;
