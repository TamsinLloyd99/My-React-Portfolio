import React from 'react';
import './HomePage.css'; // Import your CSS file
import BackGroundVideo from '../Videos/Background.mp4';
import ScreenShot from '../Images/Screenshot.png';
import ContactButton from '../ContactForm/ContactForm'

const HomePage = () => {
  return (
    <div id="video-container">
      <video autoPlay loop muted>
        {/* Provide fallback image for browsers that don't support video */}
        <source src={BackGroundVideo} type="video/mp4" />
        {/* Fallback image */}
        <img src={ScreenShot} alt="Fallback Image" />
      </video>
      <div className="text-overlay">
        <h1>Front-End Web Developer</h1>
        <br />
        <h3>Crafting Digital Experiences, One Line of Code at a Time</h3>
        <ContactButton />

      </div>
    </div>
  );
};

export default HomePage;
