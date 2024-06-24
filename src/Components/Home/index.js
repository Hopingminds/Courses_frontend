import Certificate from "../Certificate/Certificate";
import Companies from "../Companies";
import Courses_Home from "../Courses_Home";
import Footer from "../Footer/Footer";
import Navbar from "../Header";
import Herosection from "../Herosection";
import OurFeatures from "../OurFeatures/OurFeatures";
import Testimonial from "../Testimonial/Testimonial";
import WhatHM from "../WhatHM/WhatHM";
import logo from "../../Assests/Images/hmlogo.png";
import PapHome from "./paphome";
import NewTestimonial from "../Testimonial/NewTestimonial";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BuildCV from "./BuildCV";
import Companies2 from "../Companies/Companies2";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const thresholdPosition = 500;

      if (scrollPosition > thresholdPosition) {
        setShowPopup(true);
      } else {
        setShowPopup(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <head>
        <title>Hoping Minds</title>
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="HopingMinds" />
        <meta property="og:image" content="/src/Assests/Images/hmlogo.png" />
        <meta name="twitter:card" content="/src/Assests/Images/hmlogo.png" />
        <meta
          name="description"
          content="Holistic development programs that place students in specific high growth roles across 150+ Corporate Partners."
        />
      </head>
      <div className="space-y-8 xsm:space-y-6 md:space-y-10">
        <Herosection />
        <Companies2 />
        <Courses_Home />
        <WhatHM />
        <OurFeatures />
        <PapHome />
        <Certificate />
        <BuildCV />
        <Testimonial />
      </div>

      {showPopup && (
        <Link to={"/cv-builder"}>
          <div className="fixed bottom-20 right-0 bg-gradient-to-r from-[#0F2027] via-[#0B1418] to-[#203A43] text-white py-4 px-6 drop-shadow-xl rounded-l-md xsm:py-2 xsm:px-4 xsm:bottom-8 md:bottom-8 md:py-3 md:px-5">
            <button className="italic flex justify-center items-center">
              <span className="xsm:text-[10px] md:text-[14px]">
                Build Your Resume
              </span>
            </button>
          </div>
        </Link>
      )}
    </>
  );
}
