import React, { useState, useEffect } from "react";
import Arrow from "../../Assests/Icons/testimonialarrow.svg";
import Arrow2 from "../../Assests/Icons/tarrow2.svg";
import Img1 from "../../Assests/Images/testimonial1.png";
import Img2 from "../../Assests/Images/testimonial2.png";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      text: "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. HopingMinds is exactly what our business has been lacking.",
      author: "Gloria Rose",
      stars: 5,
      reviews: 12,
      image: Img1,
    },
    {
      text: "It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. HopingMinds is exactly what our business has been lacking.",
      author: "Rose",
      stars: 3,
      reviews: 4,
      image: Img2,
    },
    // Add more testimonials as needed
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleArrow2Click = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <>
      <div className="flex flex-row gap-44 justify-center py-20 px-20 pb-32">
        <div className="flex flex-col gap-8 w-[613px]">
          <div className="flex flex-row gap-4 items-center">
            <hr className="border border-[#525596] w-20" />
            <p className="text-[#525596] text-[20px] font-Nunito Sans">
              TESTIMONIAL
            </p>
          </div>
          <p className="text-[#2F327D] text-[60px] font-Nunito Sans font-semibold">
            What They Say?
          </p>
          <div className="flex flex-col gap-4 text-[#696984] text-[24px] font-poppins">
            <p className="">
              HopingMinds has got more than 100k positive ratings from our users
              around the world.{" "}
            </p>
            <p>
              Some of the students and teachers were greatly helped by the
              Skilline.
            </p>
          </div>
          <p className="text-[#696984] text-[24px] font-poppins">
            Are you too? Please give your assessment
          </p>
          <div className="flex flex-row">
            <div className="w-[400px] h-[80px] border border-[#49BBBD] text-[#49BBBD] text-[22px] font-poppins flex justify-between items-center rounded-full">
              <div className="flex justify-center items-center pl-12">
                <p className="cursor-pointer">Write your assessment</p>
              </div>
              <div className="w-[80px] h-[80px] border border-[#49BBBD] rounded-full flex justify-center cursor-pointer">
                <img src={Arrow} className="self-center" />
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="relative ">
          <div className="relative w-[726px]">
            <img src={testimonials[currentIndex].image} className="w-[560px] h-[700px] object-fit rounded-3xl" />
            <div className="absolute flex flex-row gap-10 justify-center rounded-xl shadow-2xl w-[660px] h-[300px] bg-[#ffffff] right-0 top-[72%]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`bg-[#1DBF73] text-[#1DBF73] w-14 rounded-l-xl ${
                    index === currentIndex ? "" : "hidden"
                  }`}
                >
                  .
                </div>
              ))}
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`flex relative ${
                    index === currentIndex ? "" : "hidden"
                  }`}
                >
                  <hr className="h-[130px] border border-[#BDBDD1] absolute top-12" />
                  <div className="flex flex-col justify-between px-10 pt-10 pb-8">
                    <p className="text-[#5F5F7E] text-[22px] font-Nunito Sans leading-9 text-justify">
                      {testimonial.text}
                    </p>
                    <div className="flex flex-row justify-between items-center">
                      <p className="text-[#5F5F7E] text-[24px] font-Nunito Sans font-semibold">
                        {/* Gloria Rose */}
                        {testimonial.author}
                      </p>
                      <div className="flex flex-col gap-1">
                      <div className="flex justify-center">
                          {[...Array(testimonial.stars)].map((star, index) => (
                            <svg
                              key={index}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="#FBA333"
                              className="h-6 w-6 mr-1"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 0l2.478 6.237H20l-5.832 4.718 2.197 6.726L10 14.127 3.635 17.681l2.197-6.726L0 6.237h7.522L10 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ))}
                        </div>
                        <p className="text-[#80819A] text-[18px] font-Nunito Sans">
                          {testimonial.reviews} reviews at Yelp
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* arrrow */}
          <div
            className="w-[80px] h-[80px] absolute bg-[#ffffff] rounded-full right-28 top-[42%] flex justify-center items-center text-3xl text-[#1EA4CE] font-bold cursor-pointer"
            style={{ filter: "drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1))" }} onClick={handleArrow2Click}
          >
            <img src={Arrow2} className="self-center" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
