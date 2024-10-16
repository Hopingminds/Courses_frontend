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
      <h1 className="text-[50px] text-center capitalize mb-5">
        listen from our recent{" "}
        <span className="text-green-500">freelancers</span>
      </h1>

      <div className="relative mx-auto max-w-[800px]">
        <img src={pic} alt="frame" className="w-full" />
        
      
        
        {/* Left Arrow */}
        <FaArrowLeft
          className="absolute top-1/2 transform -translate-y-1/2 left-[-4rem] text-black text-2xl cursor-pointer"
          onClick={goToPrevious}
        />
        
        {/* Right Arrow */}
        <FaArrowRight
          className="absolute top-1/2 transform -translate-y-1/2 right-[-4rem] text-black text-2xl cursor-pointer"
          onClick={goToNext}
        />
      </div>
        {/* Testimonial Card */}
        <div className="absolute -bottom-10  right-60 bg-black text-white px-6 py-4 max-w-[500px] flex flex-col font-pop">
          <span className="text-lg font-bold">{testimonials[currentIndex].name}</span>
          <span className="text-sm italic">{testimonials[currentIndex].role}</span>
          <p className="text-justify my-4">{testimonials[currentIndex].testimonial}</p>
        </div>
    </div>
  );
};

export default ListenFreelancers;
