import React, { useRef } from 'react';
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PackageCarousel = ({ data }) => {
  const splideRef = useRef(null);

  const options = {
    type: "slide",
    perPage: 3,
    pagination: false,
    perMove: 2,
    gap: "2vw",
    arrows: false, // Disable default arrows
    autoplay: true,
    interval: 3000,
    speed: 2500,
    delay: 3,
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
    <div className="relative">
      {data && data.length > 0 ? (
        <>
          <Splide aria-label="My Favorite Images" options={options} ref={splideRef}>
            {data.map((val, index) => (
              <SplideSlide
                key={index}
                className="bg-[radial-gradient(373.45%_1637.9%_at_223.96%_217.23%,_rgba(29,_191,_115,_0.3)_0%,_rgba(255,_255,_255,_0.3)_100%)] rounded-[10px] border border-[#1DBF73]"
              >
                <div className="p-4 flex h-full flex-col justify-between font-nu gap-5">
                  <span>
                    <h3 className="text-[12px] font-bold">{val?.companyName}</h3>
                    <h5 className="text-[#808080] text-[10px]">(Fresher)</h5>
                  </span>
                  <span className='flex flex-col'>
                    <span className='text-[1rem] font-bold'>{`${val?.avgpkg?.from} LPA To ${val?.avgpkg?.to} LPA`}</span>
                  </span>
                </div>
              </SplideSlide>
            ))}
          </Splide>
          {/* <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 px-3 py-2 bg-gray-300 text-white rounded-full h-[40px] w-[40px] hover:bg-gray-400 transition duration-300"
            onClick={() => splideRef.current?.splide.go('<')}
          >
            <FaChevronLeft />
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 px-3.5 py-2 bg-gray-300 text-white rounded-full h-[40px] w-[40px] hover:bg-gray-400 transition duration-300"
            onClick={() => splideRef.current?.splide.go('>')}
          >
            <FaChevronRight />
          </button> */}
        </>
      ) : (
        <div className="hidden">
          {/* Optionally include some placeholder or message when there's no data */}
        </div>
      )}
    </div>
  );
};

export default PackageCarousel;
