import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import CarouselWrapper from "./CarouselWrapper";
import memeGenerator from '../components/images/projects/meme-generator.png';
import restaurantApp from "../components/images/projects/restaurant.png";
import passwordGenerator from "../components/images/projects/password-generator.png";
import unitConverter from "../components/images/projects/unit-converter.png";
import travelJournal from "../components/images/projects/travel-journal.png";
import plantSwap from "../components/images/projects/plant-swap.png"
import travelJournalVideo from '../components/images/projects/travel-journal-vid.mp4'
import memeGeneratorVideo from '../components/images/projects/meme-generator-vid.mp4'
import restaurantAppVideo from '../components/images/projects/restaurant-vid.mp4'
import passwordGeneratorVideo from '../components/images/projects/password-generator-vid.mp4'
import unitConverterVideo from '../components/images/projects/unit-converter-vid.mp4'
// import plantSwapVideo from '../components/images/projects/le-wagon-demo-day.mp4'
import { Link } from 'react-router-dom';


function Projects() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card
          title='Meme Generator'
          imageSrc={memeGenerator}
          alt="Meme Generator"
          framework='React.js'
          dateCreated='May 2023'
          description='This is a project that I completed in my course with Scrimba. Through the module, I put into practice the use of useState, useEffect, props, and APIs.'
          linkOne='https://sparkly-alpaca-2bb10d.netlify.app'
          linkTwo=''
          linkThree=''
          videoSrc={memeGeneratorVideo}
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card
          title="Travel Journal"
          imageSrc={travelJournal}
          alt="Travel Journal"
          framework="React.js"
          dateCreated='May 2023'
          description="The purpose of this app was for me to put into practice the use of props in React. It's a simple travel journal for my recent trip to Malaysia and Indonesia."
          linkOne="https://verdant-tapioca-d5a576.netlify.app"
          linkTwo='https://github.com/MNicolaysen/scrimba-travel-journal'
          linkThree=''
          videoSrc={travelJournalVideo}
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card
          title="Restaurant Ordering App"
          imageSrc={restaurantApp}
          alt="Restaurant"
          framework="JavaScript"
          dateCreated='January 2023'
          description="I created this app with vanilla JavaScript. It's a restaurant ordering app that allows you to add items into your cart, remove them from the cart, and proceed to checkout."
          linkOne="https://monumental-platypus-9e161c.netlify.app"
          linkTwo='https://github.com/MNicolaysen/mobile-restaurant-menu'
          linkThree=''
          videoSrc={restaurantAppVideo}
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card
          title="Password Generator"
          imageSrc={passwordGenerator}
          alt="Password Generator"
          framework="JavaScript"
          dateCreated='February 2023'
          description="This is an early app I made with my course with Scrimba. It generates a random password for you each time the button is clicked."
          linkOne="https://gilded-tapioca-d75ef6.netlify.app"
          linkTwo='https://github.com/MNicolaysen/password-generator'
          linkThree=''
          videoSrc={passwordGeneratorVideo}
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card
          title="Unit Converter"
          imageSrc={unitConverter}
          alt="Unit Converter"
          framework="JavaScript"
          dateCreated='October 2022'
          description="This is one of the first apps I created using JavaScript. It will convert any number you put in the input field into either, Meters/Feet, Litres/Gallons, Kilos/Pounds."
          linkOne="https://lovely-speculoos-f313a9.netlify.app"
          linkTwo='https://github.com/MNicolaysen/scrimba-unit-converter'
          linkThree=''
          videoSrc={unitConverterVideo}
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card
          title="PlantSwap"
          imageSrc={plantSwap}
          alt="PlantSwap"
          framework="Ruby on Rails"
          dateCreated='June 2022'
          description="This was the final project for my Le Wagon course that I created within a team of 4 people. We wanted to create a platform for people to swap and donate their plants, plant clippings, or plant babies. A couple of features included were a live chat function and the use of map API for current location and location of swapper."
          linkOne=""
          linkTwo='https://github.com/MNicolaysen/plant-swap'
          linkThree='https://www.youtube.com/watch?v=yB-CzDoPWR0'
          // videoSrc={plantSwapVideo}
        />
      )
    }
  ];

  return (
    <div>
      <Link
        to={'/'}
        style={{
          color:'black',
          fontSize:'30px',
        }}
      >
          <i className="fa-solid fa-arrow-left" style={{margin:'10px'}}></i>
      </Link>
      <CarouselWrapper
        cards={cards}
        height="500px"
        width="100%"
        margin="0 auto"
        offset={200}
        showArrows={false}
      />
    </div>
  );
}

export default Projects;
