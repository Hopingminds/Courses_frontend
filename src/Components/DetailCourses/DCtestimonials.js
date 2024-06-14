import React from "react";
import User1 from "../../Assests/Images/Saurabh Pal-Data Resolve.png";
import User2 from "../../Assests/Images/Sumit.jpg";
import User3 from "../../Assests/Images/Khushpreet Kaur.jpg";
import User4 from "../../Assests/Images/Amritpal Protiviti GDU 5.7.png";
import { IoMdStar } from "react-icons/io";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const testimonials = [
  {
    text: "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. HopingMinds is exactly what our business has been lacking.",
    image: User1,
    name: "Srishti- Akki Studios",
  },
  {
    text: "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. HopingMinds is exactly what our business has been lacking.",
    image: User2,
    name: "Srishti- Akki Studios",
  },
  {
    text: "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. HopingMinds is exactly what our business has been lacking.",
    image: User3,
    name: "Srishti- Akki Studios",
  },
  {
    text: "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. HopingMinds is exactly what our business has been lacking.",
    image: User4,
    name: "Srishti- Akki Studios",
  },
];

const DCtestimonials = () => {
  return (
    <div className="px-[5%] py-20 pb-40 flex flex-col items-center gap-8 font-nu">
      <p className="font-extrabold text-[#0F2027] text-[50px]">Testimonials</p>
      <Splide
        options={{
          type: "loop",
          perPage:
            window.innerWidth <= 480
              ? 2
              : window.innerWidth >= 721 && window.innerWidth <= 1024
              ? 3
              : 4,
          pagination: false,
          perMove: 1,
          wheel: false,
          arrows: false,
          autoplay: true,
          interval: 4000,
          speed: 5500,
          delay: 1,
          pauseOnHover: false,
          drag: true,
          gap: "1rem",
        }}
        className="w-full"
      >
        {testimonials.map((testimonial, index) => (
          <SplideSlide key={index}>
            <div
              className={`flex flex-col gap-4 rounded-xl shadow-lg px-6 py-8 ${
                index % 2 !== 0 ? "mt-16 mb-4" : "mt-4"
              }`}
              style={{ boxSizing: 'border-box' }}
            >
              <p className="text-[#5F5F7E] text-justify leading-7 tracking-wide">
                "{testimonial.text}"
              </p>
              <div className="flex gap-4 items-center">
                <div className="rounded-full h-16 w-16 overflow-hidden">
                  <img
                    src={testimonial.image}
                    className="object-cover object-center"
                    alt={testimonial.name}
                  />
                </div>
                <div>
                  <p className="text-[#5F5F7E] font-extrabold">
                    {testimonial.name}
                  </p>
                  <span className="flex gap-1 text-2xl text-[#ED9B4D]">
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </span>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default DCtestimonials;
