import React from "react";
import "./HomePage.css";
import BackgroundVideo from "../Videos/Background.mp4";
import ScreenShot from "../Images/Screenshot.png";

function HomePage() {
  return (
    <>
      <div className="embed-responsive embed-responsive-16by9">
        <video
          id="background-video"
          className="embed-responsive-item"
          autoPlay
          loop
          muted
          poster={ScreenShot}
        >
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
        <div className="text-overlay position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1 className="display-4">Front-End Web Developer</h1>
          <br></br>
          <h3 className="display-5">Crafting Digital Experiences, One Line of Code at a Time</h3>
        </div>
      </div>
    </>
  );
}

export default HomePage;
