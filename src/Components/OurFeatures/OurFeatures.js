import React, { useState, useEffect } from "react";
import Img4 from "../../Assests/Images/ourfeatures.png";
import Img5 from "../../Assests/Images/ourfeatures2.png";
import Img6 from "../../Assests/Images/ourfeatures3.png";
import FeatureTexts from "./FeatureText";

const OurFeatures = () => {
  const [displayImage, setDisplayImage] = useState(Img4);
  const [displayText, setDisplayText] = useState(FeatureTexts[0]);
  const [applyZoomOutImage, setApplyZoomOutImage] = useState(false);
  const [applyZoomOutText, setApplyZoomOutText] = useState(false);

  useEffect(() => {
    const images = [Img4, Img5, Img6];
    let currentIndex = 0;

    const imageTimer = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      setDisplayImage(images[currentIndex]);
      setApplyZoomOutImage(false);
    }, 5000);

    return () => clearInterval(imageTimer);
  }, []);

  useEffect(() => {
    const imageZoomOutTimer = setTimeout(() => {
      setApplyZoomOutImage(true);
    }, 3000);

    return () => clearTimeout(imageZoomOutTimer);
  }, [displayImage]);

  useEffect(() => {
    const texts = FeatureTexts;
    let currentIndex = 0;

    const textTimer = setInterval(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      setDisplayText(texts[currentIndex]);
      setApplyZoomOutText(false);
    }, 5000);

    return () => clearInterval(textTimer);
  }, []);

  useEffect(() => {
    const textZoomOutTimer = setTimeout(() => {
      setApplyZoomOutText(true);
    }, 3000);

    return () => clearTimeout(textZoomOutTimer);
  }, [displayText]);

  return (
    <>
      <style>
        {`
        .slide-in-left {
          animation: slideLeft 0.3s ease forwards;
      }
      
      @keyframes slideLeft {
          from {
              transform: translateX(-100%);
              opacity: 0;
          }
          to {
              transform: translateX(0);
              opacity: 1;
          }
      }
      
      .slide-in-right {
        animation: slideRight 0.3s ease forwards;
    }
    
    @keyframes slideRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
      .zoom-out {
          animation: zoomOut 1s ease forwards;
          animation-delay: 1s; 
      }
      
      @keyframes zoomOut {
          from {
              transform: scale(1);
              opacity: 1;
          }
          to {
              transform: scale(0.8);
              opacity: 0;
          }
      }
      
      `}
      </style>
      <div className="">
        <div className="flex flex-col gap-12 bg-[#E2FFF180] py-10 pb-20 px-28">
          <div className="flex flex-col gap-4 justify-center items-center">
            <p className="text-[42px] text-[#1E1E1E] font-poppins font-semibold">
              Our <span className="text-[#33EFA0]"> Features </span>{" "}
            </p>
            <p className="text-[#696984] text-[22px] font-poppins">
              This very extraordinary feature, can make learning activities more
              efficient
            </p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex w-[50%] relative justify-end items-center overflow-hidden">
              <img
<<<<<<< HEAD
                src={displayImage} alt=""
                className="w-full h-full object-fit"
                style={{ animation: "slideRight 6s linear infinite" }}
=======
                key={displayImage}
                src={displayImage}
                className={`w-[90%] h-[60vh] object-contain slide-in-left ${
                  applyZoomOutImage ? "zoom-out" : ""
                }`}
>>>>>>> e230b26dea985b53b9c092c502fa9cabd90a55f1
              />
            </div>
            <div className="relative overflow-hidden w-[45%] flex justify-left items-center h-auto">
              <div
<<<<<<< HEAD
                className="flex flex-col gap-12 w-[650px] h-auto"
                style={{ animation: "slideLeft 6s linear infinite" }}
              >
                <img
                src={ssimage1} alt=""
                className="w-full h-full object-fit"
                style={{ animation: "slideLeft 6s linear infinite" }}
              />
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
=======
                className={`flex flex-col gap-6 w-[90%] h-auto slide-in-right ${
                  applyZoomOutText ? "zoom-out" : ""
                }`}
              >
                {displayText}
>>>>>>> e230b26dea985b53b9c092c502fa9cabd90a55f1
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurFeatures;
