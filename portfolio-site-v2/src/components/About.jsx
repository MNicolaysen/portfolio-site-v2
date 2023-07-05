import './About.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';
import 'react-tabs/style/react-tabs.css';

function About() {
  const aboutContent = [
    {
      title: 'A Little About Me',
      text: (
        <div className='sheet'>
          <p className='sheet-text'>
            Hey, I'm Morton, a 27-year-old aspiring web developer living in London.
            I made the move here a little over a year ago to pursue a career as a web developer.
            I wasted no time and jumped right into a full-stack web developer bootcamp with Le Wagon,
            which was the best intro into web development I could have asked for.
          </p>
          <br />
          <p className='sheet-text'>
            Since then, I've been working on personal projects to advance my skills and taking another online course from home
            to learn more advanced concepts and learn React.js.
            The more I learn and the more I progress make me super excited to dive into a web developer role.
          </p>
          <br />
          <p className='sheet-text'>Check out my portfolio to see what I've been up to!</p>
        </div>
      ),
    },
    {
      title: 'A Lot About Me',
      text: (
        <div className='sheet'>
          <p className='sheet-text'>
            Hey, I'm Morton, a 27-year-old web developer originally from a small village called Llangrannog in West Wales.
            Over a year ago, I made the exciting move to London to pursue a career in web development.
            Let me share a bit about my journey.
          </p>
          <br />
          <p className='sheet-text'>
            In my younger years, I had a genuine love for technology.
            I was always fascinated by the latest gadgets and computer features.
            However, as time went on, I lost touch with that passion.
            Growing up in Llangrannog, a quaint coastal village heavily reliant on tourism,
            there were no tech-based opportunities available.
            To make a living, I took on various jobs, from working behind the bar in local pubs
            to picking kiwis in New Zealand and lifeguarding on the beautiful beaches of Ceredigion.
            These seasonal roles allowed me to indulge in my love for travel, particularly to surf destinations like New Zealand,
            Portugal, Bali, the Canary Islands, and France.
          </p>
          <br />
          <p className='sheet-text'>
            During the lockdown, I had the privilege of living with a close friend who happened to be a web developer.
            It was during this time that my eyes were reopened to the world of technology.
            My friend guided me in exploring coding for myself, and I was instantly captivated.
            The process of turning lines of code, which initially seemed like gibberish to me,
            into tangible web elements like headers, forms, and images was incredibly satisfying.
          </p>
          <br />
          <p className='sheet-text'>
            As the lockdown restrictions eased, I made the decision to pursue web development as a career.
            The first step was to leave Llangrannog and seek opportunities in a place that offered a thriving tech scene.
            Before I knew it, I was packing up my car and embarking on a new chapter in London.
            I wasted no time upon my arrival, I enrolled in Le Wagon's full-stack web developer bootcamp,
            which provided me with an exceptional introduction to the world of web development.
            By the end of the bootcamp, I had a solid understanding of how it all works.
          </p>
          <br />
          <p className='sheet-text'>
            However, I wanted to further refine my skills before diving into a web developer role.
            I took the time to settle into London, embrace the city, and explore everything it had to offer.
            Additionally, I enrolled in an online course with Scrimba, which allows me to learn at my own pace.
            Currently, I'm focusing on mastering React.js and plan to expand my skills in SQL and backend development.
          </p>
          <p className='sheet-text'>Check out my portfolio to see some of the projects I've been working on!</p>
        </div>
      ),
    },
  ];

  const [windowOpen, setWindowOpen] = useState(true);

  function handleCloseWindow() {
    setWindowOpen(false);
  }

  return (
    <>
      {windowOpen && (
        <div id='about-container' className='about-container'>
          <button className='close-btn' onClick={handleCloseWindow}>X</button>
          <div className='about-overlay'>
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
