import React from "react";
import { useState, useEffect } from "react";
import { Typewriter } from 'react-simple-typewriter';

// Custom hook for counting animation
const useCountUp = (end, duration = 1200) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const increment = Math.min(end, Math.floor((progress / duration) * end));
      setCount(increment);
      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return count;
};

const Top = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "swayam.png",
    "live.png",
    "nsdc-logo.png",
    "shopclues.png",
    "defacto.png",
    "cognizant1.png",
    "capgemini.png",
    "zepto.png",
    "iit delhi.png",
    "bits.png",
    "madras.png",
    "kanpur.png",
    
  ];
  const [currentImages, setCurrentImages] = useState(images);
  const [fadeOut, setFadeOut] = useState(false);
  const headings = [
    "The easiest way to upgrade your skills",
    "Gain practical experience while you study",
    "Courses created with IITs and BITS Pilani",
  ];
  const [currentHeading, setCurrentHeading] = useState(headings[0]);
  const title = [
    "Learn Anytime, Grow Anytime",
    "Real Careers Start Here",
    "Study with the Best",
  ];
  const [currentTitle, setCurrentTitle] = useState(title[0]);

  const descriptions = [
    "Each month, thousands of learners turn to HopingMinds for flexible courses built by top institutes. Start learning from live sessions and recorded lessons today!",
    "From internships to freelance gigs, HopingMinds connects you with real-world opportunities. Build your skills, grow your portfolio, and launch your career!",
    "In collaboration with top institutes, HopingMinds offers courses that match today's industry needs. Learn from the best to make your mark in the world!",
  ];
  const [currentDescription, setCurrentDescription] = useState(descriptions[0]);
  const [personImages, setPersonImages] = useState([
    "boy1.png",
    "boy.png",
    "man.png",
  ]);
  const [currentPersonImage, setCurrentPersonImage] = useState(personImages[0]);
  const [showLogoSection, setShowLogoSection] = useState(0);
  const [scaleDown, setScaleDown] = useState(false);
  const imtext = [
    "Corporate\nPartners",
    "Learning\nPartners",
    "Academic\nPartners"
  ];

  useEffect(() => {
    const update = () => {
      setScaleDown(true);
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setCurrentHeading(headings[index]);
          setCurrentDescription(descriptions[index]);
          setCurrentTitle(title[index]);
          setCurrentPersonImage(personImages[index]);
          setIndex((headingIndex) => (headingIndex + 1) % headings.length);
          setCurrentImages((prevImages) => {
            const rotated = [...prevImages];
            rotated.push(rotated.shift());
            return rotated;
          });
          setShowLogoSection((prev) => (prev + 1) % 3);
          setFadeOut(false);
          setTimeout(() => {
            setScaleDown(false);
          }, 1200);
        }, 1200); // Time for content to move off-screen
      }, 1200); // Time for content to scale down
    };

    const interval = setInterval(update, 4000);

    return () => clearInterval(interval);
  }, [index]);

  const clientCount = useCountUp(80);
  const projectCount = useCountUp(200);
  const reviewCount = useCountUp(99);

  return (
    <div className=" h-[90vh] flex flex-col lg:flex-row justify-center items-center font-poppins overflow-hidden p-5 lg:p-0">
      <div
        className={`animate-float-slow-alter h-full w-full relative p-10 lg:p-12 text-center bg-[#0F1C21] lg:rounded-tr-[150px] lg:rounded-bl-[150px] lg:rounded-br-[0px] lg:rounded-tl-[0px] rounded-[50px] lg:items-start 
    lg:ml-5 lg:w-full lg:h-[530px]
    transition-all duration-600 transform`}
      >
        <div className="h-[120px] lg:h-[150px] flex items-center justify-center lg:justify-start">
          <h1
            className={`text-3xl lg:text-5xl font-bold text-white text-center lg:text-start tracking-wide sm:leading-normal lg:tracking-wide transition-all duration-400 h-[3.75rem] lg:h-[4.5rem] `}
          >
            <Typewriter
              words={headings}
              loop={0}
              cursor
              cursorStyle=''
              typeSpeed={60}
              deleteSpeed={60}
              delaySpeed={1000}
            />
          </h1>
        </div>
        
        <div className="mt-10 lg:mt-8">
          <p
            className={` text-white text-xl text-center lg:text-start tracking-wide lg:max-w-2xl transition-all duration-600 ${fadeOut ? "opacity-0":"opacity-100"}`}
          >
            {descriptions[index]}
          </p>
        </div>
        
        <div className={`flex flex-col lg:flex-row justify-center items-center mt-10 gap-7 transition-opacity duration-500 
         `}>
          <div className="mr-10 text-left">
            <h1 className={`text-5xl font-bold text-green-500`}>{clientCount}+</h1>
            <p className="text-white text-xl">Satisfied Clients</p>
          </div>
          <hr className="h-24 w-[2px] bg-green-500" />
          <div className="mr-10 text-left">
            <h1 className="text-5xl font-bold text-green-500">{projectCount}+</h1>
            <p className="text-white text-xl">Projects Completed</p>
          </div>
          <hr className="h-24 w-[2px] bg-green-500" />
          <div className="text-left">
            <h1 className="text-5xl font-bold text-green-500">{reviewCount}+</h1>
            <p className="text-white text-xl">Reviews Given</p>
          </div>
        </div>
      </div>

      {/* Side Elements */}
      <div
        className={` xl:block relative lg:w-2/3 w-[90%]  items-center lg:-ml-3 mt-2 mr-10 transition-all duration-500 transform animate-float-slow `}
      >
        {/* companies logos */}
        {showLogoSection === 0 && (
          <>
            <div
              className={`absolute top-10 left-7 w-24 lg:w-32 z-40 transition-opacity duration-500 ${
                fadeOut ? "opacity-0" : "opacity-100"
              } animate-float-fast`}
            >
              <img src={"/"+images[0]} alt="" className="w-full h-auto" />
            </div>
            <div
              className={`absolute top-60 right-10 w-24 lg:w-32 z-40 transition-opacity duration-500 ${
                fadeOut ? "opacity-0" : "opacity-100"
              } animate-float-fast`}
            >
              <img src={"/"+images[1]} alt="" className="w-full h-auto" />
            </div>
            <div
              className={`absolute right-10  w-32 z-40 transition-opacity duration-500 ${
                fadeOut ? "opacity-0" : "opacity-100"
              } animate-float-fast`}
            >
              <img src={"/"+images[2]} alt="" className="w-full h-auto" />
            </div>
          </>
        )}
        {showLogoSection === 1 && (
          <>
            <div
              className={`absolute mt-60 left-7 w-24 lg:w-32 z-40 transition-opacity duration-500 ${
                fadeOut ? "opacity-0" : "opacity-100"
              } animate-float-fast`}
            >
              <img src={"/"+images[3]} alt="" className="w-full h-auto" />
            </div>
            <div
              className={`absolute top-10  lg:right-2 w-24 lg:w-32 z-40 transition-opacity duration-500 ${
                fadeOut ? "opacity-0" : "opacity-100"
              } animate-float-fast`}
            >
              <img src={"/"+images[4]} alt="" className="w-full h-auto" />
            </div>
            <div
              className={`absolute mt-60 -right-5 lg:right-16 w-24 lg:w-32 z-40 transition-opacity duration-500 ${
                fadeOut ? "opacity-0" : "opacity-100"
              } animate-float-fast`}
            >
              <img src={"/"+images[5]} alt="" className="w-full h-auto" />
            </div>
            
          </>
        )}
        {showLogoSection === 2 && (
          <>
            
            <div
              className={`absolute top-10 right-10 w-24 lg:w-32 z-40 transition-opacity duration-500 ${
                fadeOut ? "opacity-0" : "opacity-100"
              } animate-float-fast`}
            >
              <img src={"/"+images[8]} alt="" className="w-full h-auto" />
            </div>
            <div
              className={`absolute bottom-52 left-7 w-24 lg:w-32 z-40 transition-opacity duration-500 ${
                fadeOut ? "opacity-0" : "opacity-100"
              } animate-float-fast`}
            >
              <img src={"/"+images[9]} alt="" className="w-full h-auto" />
            </div>
            <div
              className={`absolute  left-12 top-16 w-32 z-40 transition-opacity duration-500 ${
                fadeOut ? "opacity-0" : "opacity-100"
              } animate-float-fast`}
            >
              <img src={"/"+images[10]} alt="" className="w-full h-auto" />
            </div>
            
          </>
        )}

        <div className=" bg-[#1dbf73] ml-5 w-full rounded-br-[159px] rounded-tl-[159px] ">
          <img
            src="/rec.png"
            alt=""
            className={` absolute z-30 h-full`}
          />
          <img
            src={"/"+personImages[index]}
            alt="Job Portal"
            className={`relative left-14 bottom-2 ${index==2?'bottom-4':''} w-3/4  z-20 transition-all duration-500 overflow-hidden
              ${fadeOut ? "opacity-0" : "opacity-100"}
            `}
          />
         <div className="flex items-center justify-center absolute z-50 right-32 bottom-14 ">
          <hr className={`h-[110px] mt-3 mr-2 w-[4px] bg-white ${fadeOut ? "opacity-0":"opacity-100"}`}/>
          <h1 className={`text-white text-6xl font-poppins font-bold transition-opacity duration-200 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}>
            {imtext[index].split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < imtext[index].split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Top;