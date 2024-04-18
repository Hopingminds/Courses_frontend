import Certificate from "../Certificate/Certificate";
import Companies from "../Companies";
import Courses_Home from "../Courses_Home";
import Footer from "../Footer/Footer";
import Navbar from "../Header";
import Herosection from "../Herosection";
import OurFeatures from "../OurFeatures/OurFeatures";
import Testimonial from "../Testimonial/Testimonial";
import WhatHM from "../WhatHM/WhatHM";
import logo from '../../Assests/Images/hmlogo.png'
import PapHome from "./paphome";
import NewTestimonial from "../Testimonial/NewTestimonial";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {

    const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position
      const scrollPosition = window.scrollY;

      // Define the threshold position to show the pop-up
      const thresholdPosition = 500; // Adjust this value as needed

      // Check if the scroll position exceeds the threshold
      if (scrollPosition > thresholdPosition) {
        // Show the pop-up
        setShowPopup(true);
      } else {
        // Hide the pop-up
        setShowPopup(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


    return (<>
        <head>
            <title>Hoping Minds</title>
            <meta charset="UTF-8" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content="HopingMinds" />
            <meta property="og:image" content="/src/Assests/Images/hmlogo.png" />
            <meta name="twitter:card" content="/src/Assests/Images/hmlogo.png" />
            <meta name="description" content="Holistic development programs that place students in specific high growth roles across 150+ Corporate Partners." />

        </head>
        <div className="space-y-8 xsm:space-y-6 md:space-y-10">
            <Herosection />
            <Companies />
            <Courses_Home/>
            <WhatHM />
            <OurFeatures />
            <PapHome />
            <Certificate />
            <Testimonial />
        </div>

        {showPopup && (
        <div className="fixed bottom-16 right-0 bg-white p-4 shadow-lg">
            <Link to={"/resumebuilder"}>
          <button>CV Builder</button>
          </Link>
        </div>
      )}

    </>)
}