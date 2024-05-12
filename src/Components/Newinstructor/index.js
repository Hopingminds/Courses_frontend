import Img1 from "../../Assests/Images/hero2.jpeg";
import Img2 from "../../Assests/Images/hero7.jpeg";
import Img3 from "../../Assests/Images/hero8.jpeg";
import Img4 from "../../Assests/Images/huzefa.jpeg";
import Img5 from "../../Assests/Images/saloni.png";
import Img6 from "../../Assests/Images/Lalit.png";
import Img7 from "../../Assests/Images/Anju.jpg";
import Img8 from "../../Assests/Images/mohd.jpg";
import Img9 from "../../Assests/Images/Abhishek.jpeg";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default function Newinstructor() {
  return (
    <>
      <div className="font-pop px-[5%] py-10 pt-14 xsm:py-[5%] bg-[#111F25] mt-20 xsm:mt-12">
        <div className="text-[#fff] font-pop text-3xl font-semibold xsm:text-[14px] md:text-[20px]">
          Our Instructors
        </div>
        <div className=" py-10">
        <Splide  options={{
                        type: "loop",
                        perPage: window.innerWidth <= 480 ? 2 : (window.innerWidth >= 721 && window.innerWidth <= 1024) ? 3 : 4,
                        pagination: false,
                        perMove: 1,
                        wheel: false,
                        arrows: false,
                        autoplay: true,
                        interval: 3000,
                        speed: 5000,
                        // delay: 1,
                        // pauseOnHover: true,
                        drag: true,
                        gap:'1rem',
                    }}>
        <SplideSlide>
          <div className=" space-y-2 xsm:w-full xsm:space-y-0">
            <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
              <img src="/ins1.png" className="rounded-full" />
            </div>
            <div className="font-semibold text-center text-lg font-pop xsm:text-[10px] md:text-[14px] text-[#fff]">
              Akarshan Puri
            </div>
            {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[10px] md:text-[14px] md:leading-tight">Data Scientist</div> */}
            <div className="text-center text-[#fff] xsm:text-[8px] md:text-[12px]">
            Vice Chancellors Gold Medalist at BITS Pilani Dubai| 9+ years ofData Science Experience |Currently managing a credit portfolio of approx. $3bn
            </div>
          </div>
          </SplideSlide>
          <SplideSlide>
          <div className=" space-y-2 xsm:w-full xsm:space-y-0">
            <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
              <img src="/ins2.jpg" className="rounded-full" />
            </div>
            <div className="font-semibold text-center text-lg font-pop xsm:text-[10px] md:text-[14px] text-[#fff]">
              Aditya Sen
            </div>
            {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[10px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
            <div className="text-center text-[#fff] xsm:text-[8px] md:text-[12px]">
              Associate Director – Cognisant UK, ex Infosys, ex Wipro Experience
              – Clean Tech, Digital Transformation
            </div>
          </div>
          </SplideSlide>
          <SplideSlide>
          <div className="  space-y-2 xsm:w-full xsm:space-y-0">
            <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
              <img src="/ins3.png" className="rounded-full" />
            </div>
            <div className="font-semibold text-center text-lg font-pop xsm:text-[10px] md:text-[14px] text-[#fff]">
              Mohit Banka
            </div>
            {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[10px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
            <div className="text-center text-[#fff] xsm:text-[8px] md:text-[12px]">
              Amazon, Ex Microsoft, Ex Ameyo Product Management
            </div>
          </div>
          </SplideSlide>
          <SplideSlide>
          <div className="space-y-2 xsm:w-full xsm:space-y-0">
            <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
              <img src="/ins4.png" className="rounded-full" />
            </div>
            <div className="font-semibold text-center text-lg font-pop xsm:text-[10px] md:text-[14px] text-[#fff]">
              Hardik Mehta
            </div>
            {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[10px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
            <div className="text-center text-[#fff] xsm:text-[8px] md:text-[12px]">
              Senior Manager Wipro Product Management
            </div>
          </div>
          </SplideSlide>
          <SplideSlide>
          <div className=" space-y-2 xsm:w-full xsm:space-y-0">
            <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
              <img src={Img2} className="rounded-full h-full w-full " />
            </div>
            <div className="font-semibold text-center text-lg font-pop xsm:text-[10px] md:text-[14px] text-[#fff]">
              Praachee Bhargava
            </div>
            {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[10px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
            <div className="text-center text-[#fff] xsm:text-[8px] md:text-[12px]">
            Retail SME | Strategist | Marketer | Planner | Business Analyst |23+ years Experience
            </div>
          </div>
          </SplideSlide>
          <SplideSlide>
          <div className="space-y-2 xsm:w-full xsm:space-y-0">
            <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
              <img src={Img3} className="rounded-full w-full h-full object-cover" />
            </div>
            <div className="font-semibold text-center text-lg font-pop xsm:text-[10px] md:text-[14px] text-[#fff]">
              Sadashiv Pal
            </div>
            {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[10px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
            <div className="text-center text-[#fff] xsm:text-[8px] md:text-[12px]">
            SEO Manager @ Sogolytics | 10+years Experience
            </div>
          </div>
          </SplideSlide>
          <SplideSlide>
          <div className="space-y-2 xsm:w-full xsm:space-y-0">
            <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
              <img src={Img4} className="rounded-full w-full h-full object-cover" />
            </div>
            <div className="font-semibold text-center text-lg font-pop xsm:text-[10px] md:text-[14px] text-[#fff]">
            Huzefa Lohawala
            </div>
            {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[10px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
            <div className="text-center text-[#fff] xsm:text-[8px] md:text-[12px]">
            Data Scientist @ PayPal | IIT (BHU), Varanasi Alumni
            </div>
          </div>
          </SplideSlide>
          <SplideSlide>
          <div className="space-y-2 xsm:w-full xsm:space-y-0">
            <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
              <img src={Img5} className="rounded-full w-full h-full object-cover" />
            </div>
            <div className="font-semibold text-center text-lg font-pop xsm:text-[10px] md:text-[14px] text-[#fff]">
            Saloni Chanauria
            </div>
            {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[10px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
            <div className="text-center text-[#fff] xsm:text-[8px] md:text-[12px]">
            Full Stack Developer & Trainer @ BigBoxx Academy | 7+years Experience
            </div>
          </div>
          </SplideSlide>
          <SplideSlide>
          <div className="space-y-2 xsm:w-full xsm:space-y-0">
            <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
              <img src={Img1} className="rounded-full w-full h-full object-cover" />
            </div>
            <div className="font-semibold text-center text-lg font-pop xsm:text-[10px] md:text-[14px] text-[#fff]">
            Tanwee Hargave
            </div>
            {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[10px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
            <div className="text-center text-[#fff] xsm:text-[8px] md:text-[12px]">
            Co-Founder and Research Lead | 8+years Experience
            </div>
          </div>
          </SplideSlide>
          <SplideSlide>
          <div className="space-y-2 xsm:w-full xsm:space-y-0">
            <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
              <img src={Img6} className="rounded-full w-full h-full object-cover" />
            </div>
            <div className="font-semibold text-center text-lg font-pop xsm:text-[10px] md:text-[14px] text-[#fff]">
            Lalit Arora
            </div>
            {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[10px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
            <div className="text-center text-[#fff] xsm:text-[8px] md:text-[12px]">
            Professor at Entrepreneurship Development Institute of India (EDII), |20+years Experiece
            </div>
          </div>
          </SplideSlide>
          <SplideSlide>
          <div className="space-y-2 xsm:w-full xsm:space-y-0">
            <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
              <img src={Img7} className="rounded-full w-full h-full object-cover" />
            </div>
            <div className="font-semibold text-center text-lg font-pop xsm:text-[10px] md:text-[14px] text-[#fff]">
            Dr.Anju Mehta
            </div>
            {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[10px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
            <div className="text-center text-[#fff] xsm:text-[8px] md:text-[12px]">
            Instructor with 22+years Experience
            </div>
          </div>
          </SplideSlide>
          <SplideSlide>
          <div className="space-y-2 xsm:w-full xsm:space-y-0">
            <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
              <img src={Img8} className="rounded-full w-full h-full object-cover" />
            </div>
            <div className="font-semibold text-center text-lg font-pop xsm:text-[10px] md:text-[14px] text-[#fff]">
            Mohd Asad Siddiqui
            </div>
            {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[10px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
            <div className="text-center text-[#fff] xsm:text-[8px] md:text-[12px]">
            Professor at GD Goenka University (Gurgaon) | 12+ years Experience
            </div>
          </div>
          </SplideSlide>
          <SplideSlide>
          <div className="space-y-2 xsm:w-full xsm:space-y-0">
            <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
              <img src={Img9} className="rounded-full w-full h-full object-cover" />
            </div>
            <div className="font-semibold text-center text-lg font-pop xsm:text-[10px] md:text-[14px] text-[#fff]">
            Abhishek Shankar
            </div>
            {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[10px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
            <div className="text-center text-[#fff] xsm:text-[8px] md:text-[12px]">
            Ex Microsoft
            </div>
          </div>
          </SplideSlide>
          </Splide>
        </div>
      </div>
    </>
  );
}
