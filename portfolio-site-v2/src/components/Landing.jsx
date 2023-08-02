import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import landingBackground from '../components/images/landing-background.mp4';
import About from '../components/About';
import Contact from '../components/Contact'
import './Landing.css';

function Landing() {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  // display about section
  function handleAboutClick() {
    setShowAbout(!showAbout);
  }

  // display contact section
  function handleContactClick() {
    setShowContact(!showContact)
  }

  // autoplay vid as page renders
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

        {/* background vid  */}
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

        {/* header  */}
        <h1 className='first-name'>Morton</h1>
        <h1 className='surname'>Nicolaysen</h1>

        {/* icons  */}
        <ul className="contact-links">
          {/* linkedin icon  */}
          <li className="contact-link-header">
            <a style={{ color: 'black' }} href="https://www.linkedin.com/in/morton-nicolaysen/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          {/* githut icon  */}
          <li className="contact-link-header">
            <a style={{ color: 'black' }} href="https://github.com/MNicolaysen" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          {/* facebook messenger icon  */}
          <li className="contact-link-header">
            <a style={{ color: 'black' }} href="https://m.me/nicolaysen1995" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook-messenger"></i>
            </a>
          </li>
          {/* instagram icon  */}
          <li className="contact-link-header">
            <a style={{ color: 'black' }} href="https://www.instagram.com/morton_nicolaysen/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>

          {/* CV icon  */}
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

        {/* bottom right nav  */}
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
      </div>

      {/* corner fold  */}
      <div className='fold'>
        <a className='portfolio-v1' href="https://legendary-crostata-9441e6.netlify.app" target="_blank" rel="noopener noreferrer"></a>
      </div>

      {/* bottom right nav links */}
      {showAbout && <About />}
      {showContact && <Contact />}
    </div>
  );
}

export default Landing;
