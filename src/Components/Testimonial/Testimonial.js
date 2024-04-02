import React, { useState, useEffect } from "react";
import Arrow from "../../Assests/Icons/testimonialarrow.svg";
import Arrow2 from "../../Assests/Icons/tarrow2.svg";
import Img1 from "../../Assests/Images/testimonial1.png";
import Img2 from "../../Assests/Images/testimonial2.png";
import { useNavigate } from "react-router-dom";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      text: "Hoping Minds' programs transform students through hands-on learning, personalized attention, and market-aligned curriculum. Highly recommend as a pathway to success.",
      author: "Ajitesh Abhishek",
      empty: 0,
      stars: 5,
      reviews: 12,
      image: '/ajitesh.jpeg',
      company:'Google',
    },
    // {
    //   text: "It's not often that I come across an Ed-Tech firm as transformative as Hoping Minds. I've had the pleasure of collaborating with them to enhance our educational initiatives. Hoping Minds' commitment to excellence, higher packages and their passion for advancing in the field of education is commendable.",
    //   author: "Navdeepak Sandhu",
    // empty:2,//   
    // stars: 3,
    //   reviews: 4,
    //   image: Img2,
    // },
    {
      text: "Right from the recruitment and interview process,we were able to see a different level of professionalism in Hm's candidates.It is great to see freshers demonstrating corperate manually.",
      author: "Lakshay S",
      empty: 0,
      stars: 5,
      reviews: 12,
      image: '/Lakshay.jpg',
      company:'Protiviti',

    },
    {
      text: "Their program cultivated skilled and motivated coders who now excel in their roles, driving impressive performance.They have been able to quickly adopt to their roles and outshine.",
      author: "Sidharth Kakkar",
      empty: 0,
      stars: 5,
      reviews: 4,
      image: '/Sidharth Kakar.jpg',
      company:'Amazon',

    },
    {
      text: "HM's students come with a certain level of exposure and practical experience that distinguishes them from the rest.we are able to save critical time as they start delivering early.",
      author: "Tuhina Jain",
      empty: 0,
      stars: 5,
      reviews: 12,
      image: '/Tuhina Jain .jpg',
      company:'Google',

    },
    // {
    //   text: "It's not often that I come across an Ed-Tech firm as transformative as Hoping Minds. I've had the pleasure of collaborating with them to enhance our educational initiatives. Hoping Minds' commitment to excellence, higher packages and their passion for advancing in the field of education is commendable.",
    //   author: "Navdeepak Sandhu",
    // empty:2,//   
    // stars: 3,
    //   reviews: 4,
    //   image: Img2,
    // },
    // Add more testimonials as needed
  ];
  const navigate = useNavigate();

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
      <div className="flex flex-row  justify-between pt-0 px-[5%] pb-32 xsm:px-[5%] xsm:pb-8 xsm:gap-4">
        {/* left */}
        <div className="flex flex-col gap-4 w-[40%] xsm:gap-2">
          <div className="flex flex-row gap-4 items-center xsm:gap-2 xsm:pl-2">
            <hr className="border border-[black] w-20 xsm:w-6" />
            <p className=" text-[20px] font-nu xsm:text-[6px]">
              TESTIMONIAL
            </p>
          </div>
          <p className="text-[#1DBF73] text-[42px]  font-pop font-semibold xsm:text-[10px] xsm:pl-2">
            What They Say?
          </p>
          <div className="flex flex-col gap-4 text-[#696984] text-[18px] text-justify font-poppins xsm:text-[6px] xsm:gap-0">
            <p className="">
              HopingMinds has earned the trust of over 100 corporations, more than 50 universities, and over 10,000 students based on positive experiences and successful outcomes. {" "}
            </p>
            <p >
              Our community continues to grow, thanks to the proven results and confidence shared by our partners and learners
            </p>
          </div>
          {/* <p className="text-[#696984] text-[18px] font-pop xsm:text-[6px]">
            Are you too? Please give your assessment
          </p> */}
          {/* <div className="flex flex-row">
            <div className="w-[45%] border border-[#49BBBD] text-[#49BBBD] text-[16px] font-poppins flex justify-between items-center rounded-full">
              <div className="flex justify-center items-center pl-4">
                <p className="cursor-pointer">Write your assessment</p>
              </div>
              <div className="w-[20%] h-[100%] py-5 border border-[#49BBBD] rounded-full flex justify-center cursor-pointer">
                <img src={Arrow} className="self-center" />
              </div>
            </div>
          </div> */}
        </div>

        {/* right */}
        <div className="relative w-[40%]">
          <div className="relative ">
            <img
              src={testimonials[currentIndex].image}
              className="w-[330px] h-[380px]  rounded-3xl xsm:rounded-md xsm:w-[95px] xsm:h-[120px]"
            />
            <div className="absolute  flex flex-row gap-5 justify-center rounded-xl shadow-lg w-[80%] min-h-[37%] bg-[#ffffff] right-0 top-[75%] xsm:gap-2 xsm:rounded-md xsm:top-[69%]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`bg-[#1DBF73] text-[rgb(29,191,115)] w-14 rounded-l-xl xsm:w-6 ${index === currentIndex ? "" : "hidden"
                    }`}
                >
                  .
                </div>
              ))}
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`flex relative ${index === currentIndex ? "" : "hidden"
                    }`}
                >
                  <hr className="h-[60%]  border border-[rgb(189,189,209)] absolute top-3 xsm:top-2" />
                  <div className="flex flex-col justify-between px-4 py-3 xsm:px-2 xsm:py-2 xsm:gap-1">
                    <p className="text-[#5F5F7E] text-[15px] font-nu leading-6 text-justify xsm:text-[4px] xsm:leading-none xsm:tracking-tight">
                      {testimonial.text}
                    </p>
                    <div className="flex flex-row justify-between items-center ">
                      <div className="flex space-x-1">
                      <p className="text-[#5F5F7E] text-[16px] font-nu font-semibold xsm:text-[4px]">
                        {/* Gloria Rose */}
                        {testimonial.author}
                      </p>
                      <p className="text-[#5F5F7E] text-[16px] font-nu font-semibold xsm:text-[4px]">
                        {/* Gloria Rose */}
                        / {testimonial.company}
                      </p>
                      </div>
                      <div className="flex flex-col gap-1  xsm:gap-0">
                        <div className="flex justify-center items-center">
                          {[...Array(testimonial.stars)].map((star, index) => (
                            <svg viewBox="0 0 24 24" className="h-5 w-5 xsm:h-2 xsm:w-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.825 21L7.45 13.975L2 9.25L9.2 8.625L12 2L14.8 8.625L22 9.25L16.55 13.975L18.175 21L12 17.275L5.825 21Z" fill="#FBA333" />
                            </svg>
                          ))}
                          {[...Array(testimonial.empty)].map((star, index) => (
                            <svg viewBox="0 0 24 24" className="h-5 w-5 xsm:h-2 xsm:w-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.825 21L7.45 13.975L2 9.25L9.2 8.625L12 2L14.8 8.625L22 9.25L16.55 13.975L18.175 21L12 17.275L5.825 21Z" fill="#DCE2EE" />
                            </svg>
                          ))}
                        </div>
                        {/* <p className="text-[#80819A] text-[14px] font-nu xsm:text-[5px]">
                          {testimonial.reviews} reviews at Yelp
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* arrrow */}
          <div
            className="w-[70px] h-[70px] absolute bg-[#ffffff] rounded-full right-[22%] top-[42%] flex justify-center items-center text-3xl text-[#1EA4CE] font-bold cursor-pointer xsm:w-[20px] xsm:h-[20px] xsm:right-[28%]"
            style={{ filter: "drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1))" }}
            onClick={handleArrow2Click}
          >
            <img src={Arrow2} className="self-center xsm:w-[8px] xsm:h-[8px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
