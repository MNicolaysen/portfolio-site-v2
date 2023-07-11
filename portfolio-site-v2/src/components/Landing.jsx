import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import About from '../components/About';
import Contact from '../components/Contact'
import './Landing.css';
import landingBackground from '../components/images/landing-background.mp4';

function Landing() {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  function handleAboutClick() {
    setShowAbout(!showAbout);
  }

  function handleContactClick() {
    setShowContact(!showContact)
  }

  useEffect(() => {
    const video = document.getElementById('landing-video');
    video.play().catch(error => {
      console.error('Autoplay was prevented:', error);
    });
  }, []);

  return (
    <div>
      <meta name="theme-color" content="transparent"/>
      <div className='landing-container'>
        <video
          id='landing-video'
          className="landing-video"
          autoPlay
          muted
          loop
          playsInline
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
                fontSize: '12px',
                backgroundColor:'black',
                borderRadius:'4px',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                height:'30px',
                width:'31px'
              }
            } href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:d3d7fea6-dd4a-4042-a15b-acfdb18129ac" target="_blank" rel="noopener noreferrer">
              <p className="cv">CV</p>
            </a>
          </li>
        </ul>

        <ul className='navigation'>
          <li className='nav-link'>
            <a className={'about-btn'} onClick={handleAboutClick}>
              A B O U T - M E
            </a>
          </li>
          <li className='nav-link'>
            <Link style={{textDecoration:'none', color:'black'}} to='/projects'>P R O J E C T S</Link>
          </li>
          <li className='nav-link' onClick={handleContactClick}>C O N T A C T</li>
        </ul>

        <a className='portfolio-v1' href="https://legendary-crostata-9441e6.netlify.app" target="_blank" rel="noopener noreferrer">V1</a>
      </div>
      {showAbout && <About />}
      {showContact && <Contact />}
    </div>
  );
}

export default Landing;
