import React, { useState } from "react";

function GetTheMost() {
  const [showDiv, setShowDiv] = useState(0);
  return (
    <div className="h-[280vh] flex items-center justify-center gap-5 flex-col translate-y-[-7%]">
      <h1 className="linear text-[90px] italic font-bold">Get The Most</h1>
      <h2 className="text-[#1C0950] text-[40px] font-bold">
        Out Of This Slider Template
      </h2>
      <h3 className="text-[30px] text-[rgb(28, 9, 80)] font-light">
        Our in-depth resources will provide you with knowledge and instant
        solutions.
      </h3>
      <div className="w-[80%] flex items-center justify-center  gap-10">
        <div
          onClick={() => {
            if (showDiv == 0) {
              setShowDiv(1);
            }
            else {
              setShowDiv(0)
            }
          }}
          style={{ height: showDiv == 1 ? "200px" : "100px" }}
          className="ws-shadow transition-all cursor-pointer w-[50%] overflow-hidden h-[100px] px-10 text-[21px] font-bold text-[#1C0950]"
        >
          <div className="flex items-center h-[100px] justify-between w-full">
            <h2>How To Install This Template</h2>
            <i
              style={{ transform: showDiv == 1 ? "rotate(180deg)" : null }}
              className="fa fa-caret-down transition-all text-[#C6C1D3] cursor-pointer"
              aria-hidden="true"
            ></i>
          </div>
          {showDiv == 1 ? (
            <div className=" ">
              Check out our comprehensive beginners guide to installing
              templates.
            </div>
          ) : null}
        </div>
        <div className="ws-shadow w-[50%] h-[100px] flex items-center justify-between px-10 text-[21px] font-bold text-[#1C0950]">
          <h2>Customize The Template</h2>
          <i
            className="fa fa-caret-down text-[#C6C1D3] cursor-pointer"
            aria-hidden="true"
          ></i>
        </div>
      </div>
      <div className="w-[80%] flex items-center justify-center  gap-10">
        <div className="ws-shadow w-[50%] h-[100px] flex items-center justify-between px-10 text-[21px] font-bold text-[#1C0950]">
          <h2>Getting Started With Slider Revolution</h2>
          <i
            className="fa fa-caret-down text-[#C6C1D3] cursor-pointer"
            aria-hidden="true"
          ></i>
        </div>
        <div className="ws-shadow w-[50%] h-[100px] flex items-center justify-between px-10 text-[21px] font-bold text-[#1C0950]">
          <h2>FAQ & Tutorials</h2>
          <i
            className="fa fa-caret-down text-[#C6C1D3] cursor-pointer"
            aria-hidden="true"
          ></i>
        </div>
      </div>
      <div className="w-[80%] h-[80vh] bg-[linear-gradient(#5D34AF,#E42B69)] rounded-[5px] translate-y-28 pl-40 pt-28">
        <h1 className="text-[60px] text-white font-semibold  w-[70%] leading-[60px]">
          Join 9+ million building unique content with Slider Revolution
        </h1>
        <h3 className="text-[#D9C2E8] text-[20px] leading-5 py-5">
          The #1WordPress visual content building plugin{" "}
        </h3>
        <button className=" py-3 px-10 bg-red-400 text-[18px] font-semibold text-white rounded-full translate-y-8 w-[300px] transition-[1s] hover:bg-[#22C8E5] hover:scale-110">
          View Pricing Plans
        </button>
        <div className="w-[520px] h-[220px] flex items-center justify-center gap-3 translate-x-[90%] translate-y-[-90%] rotate-[-25deg]">
          <img
            className="w-[250px] h-[120px]"
            src="https://www.sliderrevolution.com/wp-content/uploads/2020/06/carousel_cover.jpg"
          ></img>
          <img
            className="w-[250px] h-[120px]"
            src="https://www.sliderrevolution.com/wp-content/uploads/2020/06/before_after_cover.jpg"
          ></img>
        </div>
        <img
          className="w-[250px] h-[120px] translate-x-[270%] translate-y-[-200%] rotate-[-25deg]"
          src="https://www.sliderrevolution.com/wp-content/uploads/2020/06/particle_cover.jpg"
        ></img>
      </div>
      <div className="flex items-center justify-center w-[85%] gap-5 translate-y-[50%]">
        <div className="ws-shadow h-[60vh] w-[30%] py-[50px] px-[40px] flex flex-col gap-5">
          <h2 className="text-[#1C0950] text-[25px] font-bold ">
            From The Blog
          </h2>
          <div className="flex items-center justify-center gap-3">
            <img
              className="w-[80px] h-[50px] rounded-md"
              src="https://www.sliderrevolution.com/wp-content/uploads/2024/03/faq_featuredimage-200x113.png"
            ></img>
            <div className="">
              <p className="text-[#1C0950] text-[15px] leading-5 cursor-pointer">
                How to Create an Employee Spotlight Presentation Using a Website
                Slider [Tutorial]
              </p>
              <label className="text-[12px] tracking-widest text-[#8DADDA]">
                TUTORIALS
              </label>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <img
              className="w-[80px] h-[50px] rounded-md"
              src="https://www.sliderrevolution.com/wp-content/uploads/2024/04/faq_featuredimage-200x113.png"
            ></img>
            <div>
              <p className="text-[#1C0950] text-[15px] leading-5 cursor-pointer">
                How to Make Your Food Website Stand Out with Animation Effects
                [Tutorial]
              </p>
              <label className="text-[12px] tracking-widest text-[#8DADDA]">
                TUTORIALS
              </label>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <img
              className="w-[80px] h-[50px] rounded-md"
              src="https://www.sliderrevolution.com/wp-content/uploads/2024/04/faq_featuredimage-1-200x113.png"
            ></img>
            <div>
              <p className="text-[#1C0950] text-[15px] leading-5 cursor-pointer">
                How to Create a Unique Dark/Light Mode Switch for Your Site
                [Tutorial]
              </p>
              <label className="text-[12px] tracking-widest text-[#8DADDA]">
                TUTORIALS
              </label>
            </div>
          </div>
        </div>
        <div className="ws-shadow h-[60vh] w-[30%] py-[50px] px-[40px] flex flex-col gap-4">
          <h2 className="text-[#1C0950] text-[25px] font-bold ">
            Polpular Resouces
          </h2>
          <div className="flex items-center justify-center gap-3">
            <img
              className="w-[80px] h-[50px] rounded-md"
              src="https://www.sliderrevolution.com/wp-content/uploads/2021/08/0FF9E966-12BD-4870-B6C8-3D3145364428-200x113.jpeg"
            ></img>
            <div>
              <p className="text-[#1C0950] text-[15px] leading-5 cursor-pointer">
                Optimizing Load Speed and Performance
              </p>
              <label className="text-[12px] tracking-widest text-[#8DADDA]">
                FAQ
              </label>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <img
              className="w-[80px] h-[50px] rounded-md"
              src="https://www.sliderrevolution.com/wp-content/uploads/2020/05/ThumbQuickSetupSR-200x113.jpg"
            ></img>
            <div>
              <p className="text-[#1C0950] text-[15px] leading-5 cursor-pointer">
                Quick Setup – Slider Revolution
              </p>
              <label className="text-[12px] tracking-widest text-[#8DADDA]">
                FAQ
              </label>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <img
              className="w-[80px] h-[50px] rounded-md"
              src="https://www.sliderrevolution.com/wp-content/uploads/2022/01/maxresdefault-200x113.jpg"
            ></img>
            <div>
              <p className="text-[#1C0950] text-[15px] leading-5 cursor-pointer">
                Create a Basic Responsive Slider
              </p>
              <label className="text-[12px] tracking-widest text-[#8DADDA]">
                VIDEO TUTORIAL
              </label>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 translate-x-[-40px]">
            <img
              className="w-[80px] h-[50px] rounded-md"
              src="https://www.sliderrevolution.com/wp-content/uploads/2020/06/getprod_featuredimage-200x113.jpg"
            ></img>
            <div>
              <p className="text-[#1C0950] text-[15px] leading-5 cursor-pointer">
                Get Productive Fast
              </p>
              <label className="text-[12px] tracking-widest text-[#8DADDA]">
                MANUAL
              </label>
            </div>
          </div>
        </div>
        <div className="ws-shadow h-[60vh] w-[30%] py-[50px] px-[40px] flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <h1 className="text-[#1C0950] text-[45px] font-bold ">Newletter</h1>
            <i
              className="fa fa-envelope text-[#22C8E5] text-[45px]"
              aria-hidden="true"
            ></i>
          </div>
          <p className="text-[#847AA0] text-[16px]">
            Join over 35.000 others on the Slider Revolution email list to get
            access to the latest news and exclusive content.
          </p>
          <button className="w-[100%] bg-[#22C8E5] rounded-[30px] py-[12px] text-white font-semibold hover:bg-[#F7345E] transition-[1s]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetTheMost;
