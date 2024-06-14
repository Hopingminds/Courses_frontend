import React from "react";
import User11 from "../../Assests/Images/Aditya Sharma.jpg";
import User7 from "../../Assests/Images/Tanisha Sharma.jpg";
import User8 from "../../Assests/Images/Simran Singh.jpeg";
import User9 from "../../Assests/Images/Poonam Saliya.jpg";
import User10 from "../../Assests/Images/Loveneet Kaur.jpg";
import User1 from "../../Assests/Images/Saurabh Pal-Data Resolve.png";
import User2 from "../../Assests/Images/Sumit.jpg";
import User3 from "../../Assests/Images/Khushpreet Kaur-Delta IT.jpeg";
import User4 from "../../Assests/Images/Amritpal Protiviti GDU 5.7.png";
import User5 from "../../Assests/Images/Ravinder Singh.jpg";
import User6 from "../../Assests/Images/Rupak Yadav.jpg";
import { IoMdStar } from "react-icons/io";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const testimonials = [
  {
    text: "Joined Hoping Minds for semester training in January, swiftly placed at Bellboy as a backend engineer in Python with a 5 LPA package. Improved coding and problem- solving skills significantly with their thorough guidance and training.",
    name: "Aditya Sharma ",
    image: User11,
  },
  {
    text: "Placed at Virtuos Digital via Hoping Minds. Transitioned from tech novice to adept with insights into corporate culture. Grateful for guidance from teachers and placement coordinators, fostering a valuable learning journey.",
    name: "LOVNEET KAUR ",
    image: User10,
  },
  {
    text: "Placed in Dubai startup, 5 LPA as backend engineer. Grateful to Hoping Minds via college for training, support, and preparation. Their guidance aligned me with industry demands, aiding in the pursuit of my dreams.",
    name: "Poonam Saliya ",
    image: User9,
  },
  {
    text: "Joining Hoping Minds for cyber security training was pivotal. The supportive environment, dedicated placement team, and excellent teachers facilitated my journey to a job at Cyber Assure Company. Grateful for the growth, friendships, and opportunities gained.",
    name: "Simran Singh",
    image: User8,
  },
  {
    text: "Underwent 6-month industrial training in Data Science at Hoping Minds, leading to a rewarding placement as a software developer at WLTH company. Grateful for their support and guidance, instrumental in realizing full potential.",
    name: "Tanisha Sharma",
    image: User7,
  },
  {
    text: " Hoping Minds transformed my naive knowledge, providing a roadmap and problem- solving approach. Guidance from teachers and placement coordinators, including mock tests, prepared me for interviews. Grateful for the learning journey.",
    name: "Rupak Yadav",
    image: User6,
  },
  {
    text: "Six-month internship at Hoping Minds, Mohali, offered dynamic growth environment. Mentorship in Cybersecurity, practical applications honed problem-solving. Emphasis on continuous learning, supportive culture. Grateful for guidance shaping confident professional.",
    name: "Ravinder Singh",
    image: User5,
  },
  {
    text: "Thrilled to join Protiviti, thanks to Hoping Minds' fantastic support. The journey was challenging, but their assistance and opportunities for growth were invaluable. Grateful to family, teachers, and friends. Excited and determined for this new career chapter!",
    name: "AMRITPAL SINGH",
    image: User4,
  },
  {
    text: "Hoping Minds' dedicated efforts and comprehensive job assistance program transformed me from a hopeful job seeker to a proud employee. Their personalized approach, insightful counseling, and invaluable support led to securing my first job and equipped me for future career success.",
    name: "KHUSHPREET KAUR",
    image: User3,
  },
  {
    text: "HopingMinds played a crucial role in securing my first job, providing unwavering support, essential skills, and invaluable guidance. Their exceptional job placement assistance led me to a role aligned with my aspirations, illuminating my path to success.",
    name: "SUMIT VERMA",
    image: User2,
  },
  {
    text: "Being a recent Computer Science graduate from Jaypee University, MP,I faced job challenges post-college. Enrolling in Hoping Minds for personal development and placement training, I swiftly secured a System Developer role at Data Resolve, grateful for their transformative assistance in my professional journey.",
    name: "SAURABH PAL",
    image: User1,
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
              style={{ boxSizing: "border-box" }}
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
