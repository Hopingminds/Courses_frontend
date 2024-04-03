import React, { useState, useEffect } from "react";
import Img4 from "../../Assests/Images/ourfeatures.png";
import Img5 from "../../Assests/Images/ourfeatures2.png";
import Img6 from "../../Assests/Images/ourfeatures3.png";
import FeatureTexts from "./FeatureText";

// add 4th image also

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
        <div className="add_gradient flex flex-col gap-12  py-10 pb-20 px-28 xsm:px-[5%] xsm:gap-2 xsm:pb-[3%] xsm:py-[5%] md:px-[5%] md:gap-6 md:pb-10">
          <div className="flex flex-col gap-4 justify-center items-center xsm:gap-2">
            <p className="text-[36px] text-white font-pop font-semibold xsm:text-[12px] md:text-[30px]">
              Our <span className="text-[#33EFA0]"> Features </span>{" "}
            </p>
            {/* <p className="text-[#696984] text-[20px] font-pop text-center xsm:text-[7px]">Unleash Your Potential</p> */}
            <p className="text-white text-[20px] font-pop text-center xsm:text-[7px] md:text-[12px] md:w-[70%]">
              Explore Our Feature-Rich Toolbox for a Seamless, Engaging, and Rewarding Learning Journey Like Never Before!
            </p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex w-[50%] relative justify-end items-center overflow-hidden">
              <img
                key={displayImage}
                src={displayImage}
                className={`w-[90%] h-[60vh] object-contain slide-in-left xsm:h-[25vh] md:h-[40vh] ${applyZoomOutImage ? "zoom-out" : ""
                  }`}
              />
            </div>
            <div className="relative overflow-hidden w-[45%] flex justify-left items-center h-auto">
              <div
                className={`flex flex-col gap-6 w-[90%] h-auto slide-in-right xsm:gap-2 xsm:w-[95%] ${applyZoomOutText ? "zoom-out" : ""
                  }`}
              >
                {displayText}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurFeatures;
