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
      text: "I have observed the transformation HopingMinds' programs bring in their students. Their hands-on approach, personalised focus on each student and curriculum alignment with market trends are key strengths. I recommend their programs as a pathway to a better future.",
      author: "Ajitesh Abhishek",
      stars: 5,
      reviews: 12,
      image: '/ajitesh.jpeg',
    },
    {
      text: "It's not often that I come across an Ed-Tech firm as transformative as Hoping Minds. I've had the pleasure of collaborating with them to enhance our educational initiatives. Hoping Minds' commitment to excellence, higher packages and their passion for advancing in the field of education is commendable.",
      author: "Navdeepak Sandhu",
      stars: 3,
      reviews: 4,
      image: Img2,
    },
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

  const handleReview = () => {
    if (localStorage.getItem("COURSES_USER_TOKEN")) {
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="flex flex-row gap-10 justify-center pt-0 px-20 pb-32 xsm:px-[5%] xsm:pb-0 xsm:gap-4">
        <div className="flex flex-col gap-8 w-[60%] xsm:gap-2">
          <div className="flex flex-row gap-4 items-center xsm:gap-2 xsm:pl-2">
            <hr className="border border-[#525596] w-20 xsm:w-6" />
            <p className="text-[#525596] text-[20px] font-nu xsm:text-[6px]">
              TESTIMONIAL
            </p>
          </div>
          <p className="text-[#2F327D] text-[40px] font-nu font-semibold xsm:text-[10px] xsm:pl-2">
            What They Say?
          </p>
          <div className="flex flex-col gap-4 text-[#696984] text-[18px] font-poppins xsm:text-[6px] xsm:gap-0">
            <p className="">
              HopingMinds has got more than 100k positive ratings from our users
              around the world.{" "}
            </p>
            <p>
              Some of the students and teachers were greatly helped by the
              Skilline.
            </p>
          </div>
          <p className="text-[#696984] text-[18px] font-pop xsm:text-[6px]">
            Are you too? Please give your assessment
          </p>
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
        <div className="relative w-[50%]">
          <div className="relative">
            <img
              src={testimonials[currentIndex].image}
              className="w-[80%] h-[80%] object-fit rounded-3xl xsm:rounded-md"
            />
            <div className="absolute flex flex-row gap-10 justify-center rounded-xl shadow-2xl w-[90%] min-h-[45%] bg-[#ffffff] right-0 top-[72%] xsm:gap-2 xsm:rounded-md">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`bg-[#1DBF73] text-[#1DBF73] w-14 rounded-l-xl xsm:w-6 ${
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
                  <hr className="h-[45%]  border border-[#BDBDD1] absolute top-8 xsm:top-2" />
                  <div className="flex flex-col justify-between px-10 py-6 xsm:px-2 xsm:py-2">
                    <p className="text-[#5F5F7E] text-[16px] font-nu leadng-6 text-justify xsm:text-[5px] xsm:leading-none">
                      {testimonial.text}
                    </p>
                    <div className="flex flex-row justify-between items-center">
                      <p className="text-[#5F5F7E] text-[18px] font-nu font-semibold xsm:text-[6px]">
                        {/* Gloria Rose */}
                        {testimonial.author}
                      </p>
                      <div className="flex flex-col gap-1 xsm:gap-0">
                        <div className="flex justify-center">
                          {[...Array(testimonial.stars)].map((star, index) => (
                            <svg
                              key={index}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="#FBA333"
                              className="h-6 w-6 mr-1 xsm:h-2 xsm:w-2 xsm:mr-0"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 0l2.478 6.237H20l-5.832 4.718 2.197 6.726L10 14.127 3.635 17.681l2.197-6.726L0 6.237h7.522L10 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ))}
                        </div>
                        <p className="text-[#80819A] text-[14px] font-nu xsm:text-[5px]">
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
            className="w-[80px] h-[80px] absolute bg-[#ffffff] rounded-full right-[10%] top-[42%] flex justify-center items-center text-3xl text-[#1EA4CE] font-bold cursor-pointer xsm:w-[20px] xsm:h-[20px] xsm:right-[12%]"
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
