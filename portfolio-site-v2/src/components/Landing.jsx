import { useState } from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <div>
      <meta name="theme-color" content="transparent"/>
      <div className='landing-container'>
        {/* header  */}
        <h1 className='first-name'>MORTON</h1>
        <h1 className='surname'>NICOLAYSEN</h1>

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
              <a className="cv">CV</a>
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


      {/* About and contact components when displayed */}
      {showAbout && <About />}
      {showContact && <Contact />}
    </div>
  );
}

export default Landing;
