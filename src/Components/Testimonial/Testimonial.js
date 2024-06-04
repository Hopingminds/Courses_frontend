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
      company: 'Google',
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
      text: "Right from the recruitment and interview process,we were able to see a different level of professionalism in Hm's candidates. It is great to see freshers demonstrating corperate mapopally.",
      author: "Lakshay S",
      empty: 0,
      stars: 5,
      reviews: 12,
      image: '/Lakshay.jpg',
      company: 'Protiviti',

    },
    {
      text: "Their program cultivated skilled and motivated coders who now excel in their roles, driving impressive performance.They have been able to quickly adopt to their roles and outshine.",
      author: "Sidharth Kakkar",
      empty: 0,
      stars: 5,
      reviews: 4,
      image: '/Sidharth Kakar.jpg',
      company: 'Amazon',

    },
    {
      text: "HM's students come with a certain level of exposure and practical experience that distinguishes them from the rest.we are able to save critical time as they start delivering early.",
      author: "Tuhina Jain",
      empty: 0,
      stars: 5,
      reviews: 12,
      image: '/Tuhina Jain .jpg',
      company: 'Technology Recruiter - Blinkit',
    },
    {
      text: "HM's curated talent pool and industry exposure ensure our confidence in the talent we recruit. In other words, if there are any surprises then they are only pleasant.",
      author: "Amit Gupta",
      empty: 0,
      stars: 5,
      reviews: 12,
      image: '/amit-gupta.jpeg',
      company: 'Director-Techginia',

    },
    {
      text: "Recruiting from HM, I can be sure of the candidate's skill set and experience with a visibility of the modules they have completed and the main development projects they have done.",
      author: "Dr. Paras Chawla",
      empty: 0,
      stars: 5,
      reviews: 12,
      image: '/paras-chawala.jpeg',
      company: 'Professor and HOD, ECE & EE.-Zonal',

    },
    {
      text: "I love HM and their app! Great features and engaging programs. You can really tell that there is a motivated training and planning team behind HM who have fresh ideas. Keep it up!",
      author: "Sachin Arora",
      empty: 0,
      stars: 5,
      reviews: 12,
      image: '/sachin-arora.jpeg',
      company: 'Business Analyst-TCS',

    },
    {
      text: "HM practically accelerates what we do in the first year with our fresh hires. Their talent has great communication skills and professionalism because of their holistic approach to development.",
      author: "Abhinav Bansal",
      empty: 0,
      stars: 5,
      reviews: 12,
      image: '/abhinav-bansal.jpeg',
      company: 'Whatsapp Business',

    },
    {
      text: "There is no trial and miss with HM's hires - We tell them of our requirements and they deliver. Revolutionizing the concept of talent development and recruitment.",
      author: "Prabhjot Singh",
      empty: 0,
      stars: 5,
      reviews: 12,
      image: '/probhjot-singh.jpeg',
      company: 'Associate Director-KPMG',

    },
    {
      text: "Elated to hear about the great concept this will help to reduce onboard training time and efforts of the executives. Great! go ahead.",
      author: "Bhawna Thapliyal",
      empty: 0,
      stars: 5,
      reviews: 12,
      image: '/bhawna-thapiyal.jpeg',
      company: 'Director-Nagarro',

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
      <div className="flex flex-row justify-between pt-20 px-[10%] pb-28 xsm:px-[5%] xsm:pt-4 xsm:pb-8 xsm:gap-4 sm:p-8 md:pb-14 md:pt-6">
        {/* left */}
        <div className="flex flex-col gap-4 w-[45%] xsm:gap-2">
          <div className="flex flex-row gap-4 items-center xsm:gap-2 xsm:pl-2">
            <hr className="border border-[black] w-16 xsm:w-6 sm:w-10 md:w-12 lg:w-14" />
            <p className=" text-[18px] font-pop xsm:text-[6px] sm:text-[8px] md:text-[10px] lg:text-[14px]">
              TESTIMONIAL
            </p>
          </div>
          <p className="text-[#1DBF73] text-[36px]  font-pop font-semibold xsm:text-[10px] xsm:pl-2 sm:text-[20px] md:text-[30px] lg:text-[34px]">
            What They Say?
          </p>
          <div className="flex flex-col gap-4 text-[#696984] text-[18px] text-justify font-poppins xsm:text-[6px] xsm:gap-0 sm:text-[10px] md:text-[12px] lg:text-[16px]">
            {/* <div className="flex flex-col gap-4 text-[#696984] text-[18px] text-justify font-poppins xsm:text-[6px] xsm:gap-0"> */}
            <p>
            HopingMinds has earned the trust of over 100 corporations, more than 50 universities, and over 10,000 students based on their positive experiences and successful outcomes. Our community continues to grow, thanks to the proven results and confidence shared by our partners and learners.
            </p>{/* <p >
                Our community contipopes to grow, thanks to the proven results and confidence shared by our partners and learners
              </p> */}
              <p>
              Having worked in the ed-tech space, I understand the challenges of creating products that are both innovative and practical. HopingMinds excels in this regard, offering solutions that are forward-thinking yet grounded in real classroom needs. They serve as a model for how ed-tech firms should operate.
              </p></div>
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
          <div className="relative w-[45%]">
            <div className="relative ">
              <div className="w-[70%] h-[54vh] rounded-3xl xsm:h-[60%] sm:h-[50%] md:h-[40%] md:w-[80%] lg:h-[60%]">
              <img
                src={testimonials[currentIndex].image}
                className="w-[100%] h-[100%]  rounded-3xl xsm:rounded-md xsm:w-[80%] xsm:h-[120px] sm:w-[80%] sm:h-[200px] md:h-[280px] md:w-[80%] lg:h-[320px]"
              />
              </div>
              <div className="absolute  flex flex-row gap-5 justify-center rounded-xl shadow-lg w-[95%] min-h-[37%] bg-[#ffffff] right-0 top-[75%] xsm:gap-2 xsm:rounded-md xsm:top-[69%] md:">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`bg-[#1DBF73] text-[rgb(29,191,115)] w-12 rounded-l-xl xsm:w-4 sm:w-6 md:w-8 lg:w-10 ${index === currentIndex ? "" : "hidden"
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
                    <hr className="h-[60%]  border border-[rgb(189,189,209)] absolute top-3 xsm:top-2 xsm:h-[30%]" />
                    <div className="flex flex-col justify-between gap-4 px-4 py-3 xsm:px-2 xsm:py-2 xsm:gap-1 md:gap-2">
                      <p className="text-[#5F5F7E] text-[16px] font-pop leading-6 text-left xsm:text-[6px] xsm:leading-[1] xsm:tracking-tight sm:text-[8px] sm:leading-none md:text-[10px] md:leading-tight lg:text-[14px] lg:leading-none">
                        {testimonial.text}
                      </p>
                      <div className="flex flex-col ">
                      <div className="flex flex-row justify-between items-center ">
                        <div className="flex space-x-1">
                          <p className="text-[#5F5F7E] text-[18px] font-pop font-semibold xsm:text-[4px] sm:text-[6px] md:text-[8px] lg:text-[16px]">
                            {/* Gloria Rose */}
                            {testimonial.author}
                          </p>
                          
                        </div>
                        <div className="flex flex-col gap-1  xsm:gap-0">
                          <div className="flex justify-center items-center">
                            {[...Array(testimonial.stars)].map((star, index) => (
                              <svg viewBox="0 0 24 24" className="h-5 w-5 xsm:h-2 xsm:w-2 sm:h-3 sm:w-3 md:h-3 md:w-3 lg:w-4 lg:h-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.825 21L7.45 13.975L2 9.25L9.2 8.625L12 2L14.8 8.625L22 9.25L16.55 13.975L18.175 21L12 17.275L5.825 21Z" fill="#FBA333" />
                              </svg>
                            ))}
                            {[...Array(testimonial.empty)].map((star, index) => (
                              <svg viewBox="0 0 24 24" className="h-5 w-5 xsm:h-2 xsm:w-2 sm:h-3 sm:w-3 md:h-3 md:w-3 lg:w-4 lg:h-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.825 21L7.45 13.975L2 9.25L9.2 8.625L12 2L14.8 8.625L22 9.25L16.55 13.975L18.175 21L12 17.275L5.825 21Z" fill="#DCE2EE" />
                              </svg>
                            ))}
                          </div>
                          {/* <p className="text-[#80819A] text-[14px] font-pop xsm:text-[5px]">
                          {testimonial.reviews} reviews at Yelp
                        </p> */}
                        </div>
                      </div>
                      <p className="text-[#5F5F7E] text-[16px] font-pop xsm:text-[4px] sm:text-[6px] md:text-[8px] lg:text-[12px]">
                            {/* Gloria Rose */}
                            {testimonial.company}
                          </p>
                          </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* arrrow */}
            <div
              className="w-[60px] h-[60px] absolute bg-[#ffffff] rounded-full right-[25%] top-[42%] flex justify-center items-center text-3xl text-[#1EA4CE] font-bold cursor-pointer xsm:w-[20px] xsm:h-[20px] xsm:right-[36%] sm:w-[30px] sm:h-[30px] sm:top-[35%] sm:right-[38%] md:w-[40px] md:h-[40px] md:right-[30%] lg:w-[50px] lg:h-[50px]"
              style={{ filter: "drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1))" }}
              onClick={handleArrow2Click}
            >
              <img src={Arrow2} className="self-center w-5 h-5 xsm:w-[8px] xsm:h-[8px] sm:w-[10px] sm:h-[10px] md:w-[12px] md:h-[12px] lg:w-4 lg:h-4" />
            </div>
          </div>
        </div>
      </>
      );
};

      export default Testimonial;
