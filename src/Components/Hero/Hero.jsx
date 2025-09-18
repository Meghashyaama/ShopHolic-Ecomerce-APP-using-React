import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import background from "../Assets/background.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="hero-hand-icon" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>

        <button className="hero-latest-btn">
          Latest Collection
          <img src={arrow_icon} alt="arrow-icon" />
        </button>
      </div>

      <div className="hero-right">
        <img src={background} alt="hero-background" />
      </div>
    </div>
  );
};

export default Hero;
