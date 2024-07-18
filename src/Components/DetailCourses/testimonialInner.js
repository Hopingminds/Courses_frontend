import React, { useState } from 'react'
import { CiPause1 } from 'react-icons/ci'
import ReactPlayer from 'react-player'
import './Pageheader.css'

const TestimonialInner = ({ val }) => {
    
    const [isPlay, setIsPlay] = useState(false)
    
    const handleChangePlaypause = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsPlay((prev) => !prev);
    };

  return (
      <div className=" w-full object-cover xl:h-[450px] md:h-[260px] md:w-[150px] lg:h-[310px] border rounded-xl overflow-hidden flex flex-col justify-end xsm:h-[180px]">
          <div className='vt-card relative'>
          <ReactPlayer
             height="100%"
              width="100%"
              className=""
              url={val?.reviewVideo}
              playing={isPlay}
              loop={true}
              controls={true}
              onError={(e) =>
                  console.error("ReactPlayer Error:", e)
              }
          />
          {/* <div className="vt-onhover-overlay absolute top-[100%] bg-[#00000066] backdrop-blur-sm h-full flex flex-col justify-center gap-2 pt-8 px-2 xsm:pt-2 xsm:gap-1">
              <div>
                  <img
                      src="../Icons/VTcomma.svg"
                      alt=""
                      className="w-[30px] xsm:w-[6px]"
                  />
              </div>
              <p className="text-[#F5F5F5] text-[15px] xsm:text-[8px] xsm:leading-3">
                  {val?.review}
              </p>
              </div> */}
          </div>
          <div className="flex justify-between items-center bg-[#000000BF] backdrop-blur-sm font-nu px-4 py-2 xsm:px-2">
              <div className="flex flex-col">
                  <p className="text-white xsm:text-[12px]">
                      {val?.userName}
                  </p>
              </div>
              {isPlay ? (
                  <CiPause1 color='grey'
                      className="w-[40px] h-[40px] xsm:w-[20px] xsm:h-[20px] "
                      onClick={ handleChangePlaypause}
                  />
              ) : (
                  <img
                      className="w-[40px] h-[40px] xsm:w-[20px] xsm:h-[20px]"
                      src="../Icons/playicon.svg"
                      alt=""
                          onClick={handleChangePlaypause}
                  />
              )}
          </div>
      </div>
  )
}

export default TestimonialInner