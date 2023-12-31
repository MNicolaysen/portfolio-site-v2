import { useState } from 'react';
import './Contact.css'

function Contact() {

  const [message, setMessage] = useState('');
  const [windowOpen, setWindowOpen] = useState(true);
  const defaultSubject = 'RE: Portfolio Site Contact Me';

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:morton.nicolaysen@gmail.com?subject=${encodeURIComponent(
      defaultSubject
    )}&body=${encodeURIComponent(`${message}`)}`;
    window.location.href = mailtoLink;
  };

  function handleCloseWindow() {
    setWindowOpen(false);
  }

  return (
    <>
    {windowOpen && (
      <div className="contact">
        <button className='close-btn' onClick={handleCloseWindow}>X</button>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h4 className="email-header">To: morton.nicolaysen@gmail.com</h4>
          <h4 className="email-header">Cc: N/A</h4>
          <h4 className="email-header">Subject: RE: Portfolio Site Contact Me</h4>
          <h4></h4>
            <div className='contact-elements'>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                required
              ></textarea>
              <button type="submit"><i className="fa-solid fa-paper-plane"></i></button>
            </div>
          </div>
        </form>
      </div>
    )}
    </>
  );
}

export default Contact;
