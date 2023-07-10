import './About.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import { aboutContent } from './AboutContent';

function About() {
  const [windowOpen, setWindowOpen] = useState(true);

  function handleCloseWindow() {
    setWindowOpen(false);
  }

  return (
    <>
      {windowOpen && (
        <div id='about-container' className='about-container'>
          <div className='about-overlay'>
            <button className='close-btn' onClick={handleCloseWindow}>X</button>
            <div className='about-content'>
              <Tabs defaultIndex={0}>
                <TabList>
                  {aboutContent.map((content, index) => (
                    <Tab key={index} selectedClassName='selected-tab'>
                      {content.title}
                    </Tab>
                  ))}
                </TabList>

                {aboutContent.map((content, index) => (
                  <TabPanel key={index}>
                    <div className='about'>{content.text}</div>
                  </TabPanel>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default About;
