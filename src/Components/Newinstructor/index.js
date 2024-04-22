import Img1 from "../../Assests/Images/hero2.jpeg";
import Img2 from "../../Assests/Images/hero7.jpeg";
import Img3 from "../../Assests/Images/hero8.jpeg";
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
                        interval: 4000,
                        speed: 5500,
                        delay: 1,
                        pauseOnHover: true,
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
              Data Scientist @ Divy Inc., ex Petrofac, Texas A&M. 10+ Years of
              Data Experience
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
              Financial Management
            </div>
          </div>
          </SplideSlide>
          <SplideSlide>
          <div className="space-y-2 xsm:w-full xsm:space-y-0">
            <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
              <img src={Img1} className="rounded-full w-full h-full object-cover" />
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
          <div className="space-y-2 xsm:w-full xsm:space-y-0">
            <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
              <img src={Img3} className="rounded-full w-full h-full object-cover" />
            </div>
            <div className="font-semibold text-center text-lg font-pop xsm:text-[10px] md:text-[14px] text-[#fff]">
              Sadashiv Pal
            </div>
            {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[10px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
            <div className="text-center text-[#fff] xsm:text-[8px] md:text-[12px]">
              Digital Marketing
            </div>
          </div>
          </SplideSlide>
          </Splide>
        </div>
      </div>
    </>
  );
}
