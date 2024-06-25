import React from 'react'

import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from '@splidejs/react-splide';

const PackageCarousel = ({data}) => {


     let options = {
       type:"slide",
       perPage: 3,
       pagination: false,
       perMove:2,
       gap: "2vw",
       arrows:true,
       autoplay: true,
       interval: 3000,
       speed: 2500,
       // easing: "linear",
       delay: 3,
       // pauseOnHover: true,
       drag: true,
       breakpoints: {
         900: {
           perPage: 2,
         },
         700: {
           perPage: 2,
         },
         500: {
           perPage: 2,
         },
       },
     };

  return (
    <div id={`${"carousel__arr"}`} className="">
      <Splide aria-label="My Favorite Images" options={options}>
       
       {   data &&
          data?.map((val, index) => {
            return (
              <SplideSlide
                key={index}
                className="bg-[radial-gradient(373.45%_1637.9%_at_223.96%_217.23%,_rgba(29,_191,_115,_0.3)_0%,_rgba(255,_255,_255,_0.3)_100%)] rounded-[10px] border border-[#1DBF73]"
              >
                <div className="p-4 flex h-full flex-col justify-between">
                  <span>
                    <h3 className="text-[12px] font-semibold">
                      {val?.companyName}
                    </h3>
                    <h5 className="text-gray-400 text-[10px]"> (Fresher)</h5>
                  </span>
                  <span>
                    <h3 className=" text-lg">
                      {" "}
                      {Math.ceil(val?.avgpkg?.from + val?.avgpkg?.to) / 2 + 
                        " LPA"}
                    </h3>
                    <h5>{` ${val?.avgpkg?.from} LPA - ₹ ${val?.avgpkg?.to}   LPA`}</h5>
                  </span>
                </div>
              </SplideSlide>
            );
          })}
      </Splide>
      </div>
       

  );
}

export default PackageCarousel