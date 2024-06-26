import React from "react";
import SimpleMap from "./SimpleMap";


function OurBarbers() {
  return (
    <div className="h-[250vh] w-[100%] flex flex-col py-24 items-center relative">
      <div className="lg:w-[80%] w-[94%] flex flex-col items-center relative lg:gap-10 gap-5">
        <div className="w-[50%] hidden lg:block h-[110vh] absolute z-[-1] right-0 bg-[url(https://www.sliderrevolution.com/wp-content/uploads/revslider/barber-shop-barber-bg.jpg)]"></div>

        <div className="flex items-center justify-center lg:justify-normal gap-4 self-start w-full">
          <div className="w-[40%] hidden lg:block h-4 bg-[#FFE11B]"></div>
          <label className=" headingss">BARBERS</label>
        </div>
        <h1 className="lg:text-[60px] text-[46px] headings">Our Barbers</h1>
        <p className="headingsss lg:w-[60%] text-center">
          We employ highly qualified barbers who are just professionals, butr
          also enjoy maintaining the atmostphere of a classic barbershop
        </p>
        <div className="flex lg:flex-row flex-col lg:gap-[10px] gap-16 ">
          <div className="flex items-center justify-center flex-col gap-4">
            <img
              className="w-[250px] h-[250px]"
              src="https://www.sliderrevolution.com/wp-content/uploads/revslider/barber-shop-barber-2.jpg"
            ></img>
            <h2 className="anton"> JOHN WILSON</h2>
            <p className="nexin text-[16px] text-center w-[60%]">
              Mr. Wilson is the founder and owner of our barber shop
            </p>
          </div>
          <div className="flex items-center justify-center flex-col gap-4">
            <img
              className="w-[250px] h-[250px]"
              src="https://www.sliderrevolution.com/wp-content/uploads/revslider/barber-shop-barber-1.jpg"
            ></img>
            <h2 className="anton"> BARRY ANDERSON</h2>
            <p className="nexin text-[16px] text-center w-[60%]">
              Barry brings a detailed, meticulous approach of styling
            </p>
          </div>
          <div className="flex items-center justify-center flex-col gap-4">
            <img
              className="w-[250px] h-[250px]"
              src="https://www.sliderrevolution.com/wp-content/uploads/revslider/barber-shop-barber-3.jpg"
            ></img>
            <h2 className="anton"> ANDREW PHILLIPS</h2>
            <p className="nexin text-[16px] text-center w-[60%]">
              Andrew has several years of experience in the barber industry
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] h-[110vh] flex pt-44">
        <div className="w-[50%] h-[100vh] bg-[#f0d20e] flex items-center justify-center hidden lg:block">
            <SimpleMap></SimpleMap>
        </div>
        <div className="flex flex-col justify-center gap-10  w-[50%] pl-[100px]">
          <div className="flex items-center gap-2">
            <label className="headingss">CONTACTS</label>
            <div className="w-[100%] h-[10px] bg-[#f0d20e]"></div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="ultra text-[40px] leading-10 text-center lg:text-start">Address</h2>
            <p className="headingsss">
              123 Street W,<br></br> Seattle WA 98127<br></br> United States
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="ultra text-[40px] leading-10">Opening Hours</h2>
            <p className="headingsss">
              Monday-Friday<br></br>9am-6pm
            </p>
          </div>
          <p className="headingsss">
            Saturday and Sunday <br></br> 10am to 4pm
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurBarbers;
