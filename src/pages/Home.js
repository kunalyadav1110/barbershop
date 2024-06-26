import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import About from "../components/About";
import Services from "../components/Services";
import OurBarbers from "../components/OurBarbers";
import LocalBarber from "../components/LocalBarber";
import WhyShouldYou from "../components/WhyShouldYou";
import BarberShopWeb from "../components/BarberShopWeb";
import TheresMore from "../components/TheresMore";
import SliderRevolution from "../components/SliderRevolution";
import GetTheMost from "../components/GetTheMost";
import Footer from "../components/Footer";
import CopyRight from "../components/CopyRight";
function Home() {
  return (
    <div className="container">
      <Header></Header>
      <Intro></Intro>
      <About></About>
      <Services></Services>
      <OurBarbers></OurBarbers>
      <LocalBarber></LocalBarber>
      <WhyShouldYou></WhyShouldYou>
      <BarberShopWeb></BarberShopWeb>
      <TheresMore></TheresMore>
      <SliderRevolution></SliderRevolution>
      <GetTheMost></GetTheMost>
      <Footer></Footer>
      <CopyRight></CopyRight>
    </div>
  );
}

export default Home;
