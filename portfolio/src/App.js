import React from 'react';
import './reactStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  // State for managing the nav menu's visibility on mobile
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div>
      <nav>
      <a href="#home" onclick={toggleMenu}><img src={`${process.env.PUBLIC_URL}/Personal Logo.png`} alt="Logo" /></a>
        <div className={isMenuVisible ? "nav-links show" : "nav-links"} id="navLinks">
          <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
            <ul>
                <li><a href="#about" onclick={toggleMenu}>ABOUT</a></li>
                <li><a href="#skills" onclick={toggleMenu}>SKILLS</a></li>
                <li><a href="#projects" onclick={toggleMenu}>PROJECTS</a></li>
                <li><a href={`${process.env.PUBLIC_URL}/Nelson_Booth.pdf`} download="Nelson_Booth.pdf">RESUME</a></li>
            </ul>
        </div>
        <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
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
            <h4>My Skills</h4>
        </div>

      </section>

      <section id="projects" className="projects-header">

        <div class="projects-box">
            <h3>Browse My Projects</h3>
        </div>

      </section>
      
    </div>
  );
};

export default App;
