import React from "react";

function About() {
  return (
    <div className="about">
      <div className="about-left">
      <div className="about-img-div">
        <img
          className="about-img"
          src="https://www.sliderrevolution.com/wp-content/uploads/revslider/barber-shop-about/barber-shop-about.jpg"
        ></img>
        </div>
      </div>
      <div className="about-right">
      <div className="about-div-line">
        <h3>ABOUT</h3>
        <div className="about-line"></div>
        </div>
        <h1>We Help You <br></br> Look Great</h1>
        <p>
          Barbarshop is San Francisco's premier barber shop for stylish men
          looking for a place where they can feel comfortable, speak their
          minds, and leave satisfied
        </p>
      </div>
    </div>
  );
}

export default About;
