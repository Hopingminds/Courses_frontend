import React, { useState, useEffect } from "react";
import Img4 from "../../Assests/Images/ourfeatures4.png";
import Img5 from "../../Assests/Images/ourfeatures5.png";
import Img6 from "../../Assests/Images/ourfeatures6.png";
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
    }, 8000);

    return () => clearInterval(imageTimer);
  }, []);

  useEffect(() => {
    const imageZoomOutTimer = setTimeout(() => {
      setApplyZoomOutImage(true);
    }, 6000);

    return () => clearTimeout(imageZoomOutTimer);
  }, [displayImage]);

  useEffect(() => {
    const texts = FeatureTexts;
    let currentIndex = 0;

    const textTimer = setInterval(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      setDisplayText(texts[currentIndex]);
      setApplyZoomOutText(false);
    }, 8000);

    return () => clearInterval(textTimer);
  }, []);

  useEffect(() => {
    const textZoomOutTimer = setTimeout(() => {
      setApplyZoomOutText(true);
    }, 6000);

    return () => clearTimeout(textZoomOutTimer);
  }, [displayText]);

  return (
    <>
      <style>
        {`
        .slide-in-left {
          animation: slideLeft 0.6s ease forwards;
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
        animation: slideRight 0.6s ease forwards;
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
      <div className="pt-6 xsm:pt-4 xsm:pb-3 md:pb-3">
        <div className="add_gradient flex flex-col gap-12  py-10 pb-16 px-28 xsm:px-[5%] xsm:gap-2 xsm:pb-[3%] xsm:py-[5%] sm:px-[5%] sm:pb-10 sm:gap-8 md:px-[5%] md:gap-4 md:pb-10 lg:px-[5%]">
          <div className="flex flex-col gap-4 justify-center items-center xsm:gap-2 md:gap-3">
            <p className="text-[40px] text-white font-pop font-semibold xsm:text-[12px] sm:text-[20px] md:text-[30px] lg:text-[32px]">
            Program <span className="text-[#33EFA0]"> Highlights </span>{" "}
            </p>
            {/* <p className="text-[#696984] text-[20px] font-pop text-center xsm:text-[7px]">Unleash Your Potential</p> */}
            <p className="text-white text-[30px] font-pop text-center xsm:text-[7px] sm:text-[12px] md:text-[14px] md:w-[70%] lg:text-[16px]">
            This comprehensive set of features prepares you with essential skills for a successful career.            </p>
          </div>
          <div className="flex flex-row justify-between items-center sm:h-[30vh] md:h-[35vh] lg:h-[45vh]">
            <div className="flex w-[50%] relative justify-end items-center overflow-hidden">
              <img
                key={displayImage}
                src={displayImage}
                className={`w-[90%] h-[50vh] object-contain slide-in-left xsm:h-[20vh] sm:h-[25vh] md:h-[30vh] ${applyZoomOutImage ? "zoom-out" : ""
                  }`}
              />
            </div>
            <div className="relative overflow-hidden w-[45%] flex justify-left items-center h-auto">
              <div
                className={`flex flex-col gap-6 w-[90%] h-auto slide-in-right xsm:gap-2 xsm:w-[95%] sm:gap-3 md:gap-3 ${applyZoomOutText ? "zoom-out" : ""
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
