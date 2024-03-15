import React, { useState, useEffect } from "react";
import Img4 from "../../Assests/Images/ourfeatures.png";
import Img5 from "../../Assests/Images/ourfeatures2.png";
import Img6 from "../../Assests/Images/ourfeatures3.png";
import FeatureTexts from "./FeatureText";

const OurFeatures = () => {
  const [displayImage, setDisplayImage] = useState(Img4);
  const [displayText, setDisplayText] = useState(FeatureTexts[0]);

  useEffect(() => {
    const images = [Img4, Img5, Img6];
    let currentIndex = 0;

    const timer = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      setDisplayImage(images[currentIndex]);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const images = [Img4, Img5, Img6];
    let currentIndex = 0;

    const timer = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      setDisplayText(FeatureTexts[currentIndex]);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style>
        {`
        @keyframes slideRight {
          0% {
            transform: translateX(-100%);
            width: 100%;
            height: 100%;
          }
          33.33% {
            transform: translateX(0%);
            width: 100%;
            height: 100%;
          }
          66.66% {
            transform: translateX(0%);
            width: 100%;
            height: 100%;
          }
          100% {
            transform: translateX(100%);
            width: 70%;
            height: 70%;
            opacity: 0.5;
          }
        }

        @keyframes slideLeft {
          0% {
            transform: translateX(100%);
          }
          10% {
            transform: translateX(0%);
          }
          20% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
            width: 70%;
            height: 70%;
            opacity: 0;
          }
        }
        
      `}
      </style>
      <div className="">
        <div className="flex flex-col gap-32 bg-[#E2FFF180] py-10 pb-20 px-28">
          <div className="flex flex-col gap-4 justify-center items-center">
            <p className="text-[42.65px] text-[#1E1E1E] font-poppins font-semibold">
              Our <span className="text-[#33EFA0]"> Features </span>{" "}
            </p>
            <p className="text-[#696984] text-[24px] font-poppins">
              This very extraordinary feature, can make learning activities more
              efficient
            </p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex w-[890px] h-[600px] relative overflow-hidden">
              <img
                src={displayImage}
                className="w-full h-full object-fit"
                style={{ animation: "slideRight 5s linear infinite" }}
              />
            </div>
            <div className="relative overflow-hidden w-[650px] h-auto">
              <div
                className="flex flex-col gap-12 w-[650px] h-auto"
                style={{ animation: "slideLeft 5s linear infinite" }}
              >
                {displayText}
                {/* <p className="text-[40px] text-[#000000] font-poppins font-semibold">
                  A{" "}
                  <span style={{ color: "#33EFA0", fontWeight: "bold" }}>
                    user interface
                  </span>{" "}
                  designed for the classroom
                </p> */}
                {/* <div className="flex flex-col gap-8">
                  <div className="flex flex-row gap-10 justify-between items-center">
                    <div className="bg-[#ffffff] shadow-xl rounded-full w-[75px] h-[60px] flex justify-center items-center">
                      <img src={Img1} className="w-[24px] h-[24px]" />
                    </div>
                    <p className="text-[#696984] text-[22px] font-poppins">
                      Teachers don’t get lost in the grid view and have a
                      dedicated Podium space.
                    </p>
                  </div>
                  <div className="flex flex-row gap-10 items-center">
                    <div className="bg-[#ffffff] shadow-xl rounded-full w-[60px] h-[60px] flex justify-center items-center">
                      <img src={Img2} className="w-[28px] h-[26px]" />
                    </div>
                    <p className="text-[#696984] text-[22px] font-poppins">
                      TA’s and presenters can be moved to the front of the
                      class.
                    </p>
                  </div>
                  <div className="flex flex-row gap-10 items-center">
                    <div className="bg-[#ffffff] shadow-xl rounded-full w-[65px] h-[60px] flex justify-center items-center">
                      <img src={Img3} className="w-[30px] h-[26px]" />
                    </div>
                    <p className="text-[#696984] text-[22px] font-poppins">
                      Teachers can easily see all students and class data at one
                      time.
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurFeatures;
