import React, { useState, useEffect } from "react";
import pic from "../../Assests/freelance/frame123.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ListenFreelancers = () => {
  const testimonials = [
    {
      name: "Sumanth Sinha",
      role: "Frontend Designer",
      testimonial:
        "Thanks to HopingMinds, I landed my first freelance project! The skills and portfolio I developed during the program opened doors to real client work, helping me build a strong foundation and gain valuable experience.",
    },
    {
      name: "Ananya Gupta",
      role: "Full-Stack Developer",
      testimonial:
        "The mentorship at HopingMinds gave me the confidence to take on complex projects. My career took off after I built my first e-commerce site through a freelance gig!",
    },
    {
      name: "Ravi Mehta",
      role: "UX/UI Designer",
      testimonial:
        "HopingMinds' curriculum helped me sharpen my design skills and create a portfolio that attracted multiple freelance opportunities. It was a game changer for my career.",
    },
    {
      name: "Priya Sharma",
      role: "Backend Developer",
      testimonial:
        "The practical experience I gained from HopingMinds allowed me to work on real client projects confidently. Now, I have steady freelance work and a strong portfolio.",
    },
    {
      name: "Vikram Singh",
      role: "Mobile App Developer",
      testimonial:
        "With HopingMinds, I was able to build the right skills and break into freelance app development. My first client project was a major milestone in my career.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]);

  return (
    <div className="flex flex-col justify-center px-[4vw] xsm:px-3 mt-[3rem] mb-[5rem] relative font-pop">
      <h1 className="text-[50px] md:text-[30px] text-center capitalize mb-5 xsm:text-xl">
        listen from our recent{" "}
        <span className="text-green-500">freelancers</span>
      </h1>

      <div className="relative mx-auto max-w-[50rem] md:w-[30rem] xsm:w-[15rem]">
        <img src={pic} alt="frame" className="w-full" />
        
      
        
        {/* Left Arrow */}
        <FaArrowLeft
          className="absolute top-1/2 transform -translate-y-1/2 left-[-4rem] text-black text-2xl cursor-pointer xsm:text-xl"
          onClick={goToPrevious}
        />
        
        {/* Right Arrow */}
        <FaArrowRight
          className="absolute top-1/2 transform -translate-y-1/2 right-[-4rem] text-black text-2xl cursor-pointer xsm:text-xl"
          onClick={goToNext}
        />
      </div>
        {/* Testimonial Card */}
        <div className="absolute -bottom-14  xl:right-60 lg:right-5  bg-black text-white px-6 py-4 max-w-[32rem] md:w-[23rem] xsm:w-[10rem] flex flex-col font-pop md:h-[8rem] xsm:h-[5rem] xsm:px-2 xsm:py-0 md:right-7 xsm:gap-0 xsm:right-2">
          <span className="text-lg font-bold md:text-sm xsm:text-[6px]">{testimonials[currentIndex].name}</span>
          <span className="text-sm italic md:text-[12px] xsm:text-[7px]">{testimonials[currentIndex].role}</span>
          <p className="text-justify my-4 md:my-2 xsm:my-0 md:text-[10px] xsm:text-[5px]">{testimonials[currentIndex].testimonial}</p>
        </div>
    </div>
  );
};

export default ListenFreelancers;
