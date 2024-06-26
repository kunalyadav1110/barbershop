import React from "react";

function Services() {
  return (
    <div className="services">
      <div className="service-head">
        <div className="left-line"></div>
        <label>SERVICES</label>
        <div className="right-line"></div>
      </div>
      <h1>Our Services</h1>
      <div className="service-para">
      <p>
        Barbarshop offers world-class men's haircut, beard groaming, and hot
        razor shaves.Here are just some of the services we are famous for
      </p></div>
      <div className="top-services">
        <div className="cart">
          <img src="https://www.sliderrevolution.com/wp-content/uploads/revslider/barber-shop-services/barber-shop-haircut.png"></img>
          <h2>TRADITIONAL HAIRCUTS</h2>
          <p>One of the most popular services our barbers provides</p>
        </div>
        <div className="cart">
          <img src="https://www.sliderrevolution.com/wp-content/uploads/revslider/barber-shop-services/barber-shop-shaves.png"></img>
          <h2>SHAVES</h2>
          <p>Our shaving services will  make you look really handsome</p>
        </div>
        <div className="cart">
          <img src="https://www.sliderrevolution.com/wp-content/uploads/revslider/barber-shop-services/barber-shop-mustache.png"></img>
          <h2>MUSTACHE TRIM</h2>
          <p>Mushache also need to be trimmed regularly</p>
        </div>
        <div className="cart">
          <img src="https://www.sliderrevolution.com/wp-content/uploads/revslider/barber-shop-services/barber-shop-beard.png"></img>
          <h2>BEARD TRIM</h2>
          <p>Well-trimmed beard is a must have element of every men's image</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
