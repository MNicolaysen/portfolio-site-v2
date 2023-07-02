import landingBackground from '../components/images/landing-background.mp4';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import About from '../components/About';
import Contact from '../components/Contact'
import './Landing.css';

function Landing() {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  function handleAboutClick() {
    setShowAbout(true && !showAbout);
  }

  function handleContactClick() {
    setShowContact(!showContact)
  }

  return (

    <div>
      <div className='landing-container'>
        <video
          style={{
            width: '100%',
            maxHeight: '100%',
            objectFit: 'fill',
            opacity: '0.2',
            position: 'absolute',
            top: '0',
          }}
          className="landing-video"
          autoPlay
          muted
          loop
        >
          <source src={landingBackground} type="video/mp4" />
        </video>

        <h1 className='first-name'>Morton</h1>
        <h1 className='surname'>Nicolaysen</h1>

        <ul className="contact-links">
          <li className="contact-link-header">
            <a style={{ color: 'black' }} href="https://www.linkedin.com/in/morton-nicolaysen/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li className="contact-link-header">
            <a style={{ color: 'black' }} href="https://github.com/MNicolaysen" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li className="contact-link-header">
            <a style={{ color: 'black' }} href="https://m.me/nicolaysen1995" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook-messenger"></i>
            </a>
          </li>
          <li className="contact-link-header">
            <a style={{ color: 'black' }} href="https://www.instagram.com/morton_nicolaysen/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li className="contact-link-header">
            <a style={
              {
                color: 'white',
                textDecoration: 'none',
                fontSize: '11px',
                backgroundColor:'black',
                padding:'6px',
                borderRadius:'6px',
                textAlign:'center',
              }
            } href="./src/components/CV_compressed.pdf" download>
              <i className="cv">CV</i>
            </a>
          </li>
        </ul>

        <ul className='navigation'>
          <li className='nav-link'>
            <a className={'about-btn'} onClick={handleAboutClick}>
              About
            </a>
          </li>
          <li className='nav-link'>
            <Link style={{textDecoration:'none', color:'black'}} to='/projects'>Projects</Link>
          </li>
          <li className='nav-link' onClick={handleContactClick}>Contact</li>
        </ul>

        <a className='portfolio-v1' href="https://legendary-crostata-9441e6.netlify.app">V1</a>
      </div>
      {showAbout && <About />}
      {showContact && <Contact />}
    </div>
  );
}

export default Landing;
