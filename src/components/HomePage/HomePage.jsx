import React from "react";
import "./HomePage.css";
import BackgroundVideo from "../Videos/Background.mp4"
import ScreenShot from "../Images/Screenshot.png"

function HomePage() {
  return (
    <>
      <div className="embed-responsive embed-responsive-16by9">
        <video className="embed-responsive-item" autoPlay loop muted poster={ScreenShot}>
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default HomePage;
