import React, { useState } from 'react'
import "./Pageheader.css";
import ReactPlayer from 'react-player';
import { CiPause1 } from 'react-icons/ci';

const VideoTesttimonial = ({ data }) => {
  data=data?.map((val)=>{return {...val,isPlaying:false}})
  
  const [newdata,setNewData]=useState(data)
  console.log(data)
   const handleContextMenu = (e) => {
     e.preventDefault(); // Prevent default context menu behavior
  };

  const handlePlay = (id) => {
    // let temp = newdata;
    // temp?.map((val, i) => {
    //   if (i === id) {
    //    return val.isPlaying === true;
    //   }
    // })
    // setNewData(temp)
  }
  const handlePause = (id) => {
    
  }
  
  return (
    <div className='flex flex-col gap-10 xsm:gap-6'>
        <div>
            <div className='flex items-center gap-4 xsm:gap-2'>
                <div className='w-[70px] border-[0.6px] border-[#3C3C3C] xsm:w-[30px]'/>
                <p className='text-[#3C3C3C] font-nu tracking-widest text-[14px] xsm:text-[10px]'>TESTIMONIAL</p>
            </div>
            <div className='font-pop font-semibold text-[32px] text-[#3C3C3C] xsm:text-[14px]'>What They Say?</div>
        </div>
          <div className='grid grid-cols-3 gap-10 xsm:grid-cols-2 xsm:gap-2'>
              
              {data?.map((val, ind) => {
                  return (
                    <>
                      <div className=" relative  rounded-xl overflow-hidden flex flex-col justify-end xsm:h-[180px]">
                        <ReactPlayer
                          // onContextMenu={handleContextMenu}
                          height="100%"
                          width="100%"
                          url={val?.reviewVideo}
                          playing={true}
                          loop={true}
                          controls={false}
                          onError={(e) =>
                            console.error("ReactPlayer Error:", e)
                          }
                        />
                        <div className="vt-onhover-overlay absolute top-[100%] bg-[#00000066] backdrop-blur-sm h-full flex flex-col gap-2 pt-8 px-2 xsm:pt-2 xsm:gap-1">
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
                        </div>
                        <div className="flex justify-between items-center bg-[#000000BF] backdrop-blur-sm font-nu px-4 py-2 xsm:px-2">
                          <div className="flex flex-col">
                            <p className="text-white xsm:text-[12px]">
                              {val?.userName}
                            </p>
                          </div>
                          {val?.isPlaying ? (
                            <CiPause1
                              className="w-[40px] h-[40px] xsm:w-[20px] xsm:h-[20px]"
                              onClick={() => handlePause(ind)}
                            />
                          ) : (
                            <img
                              className="w-[40px] h-[40px] xsm:w-[20px] xsm:h-[20px]"
                              src="../Icons/playicon.svg"
                              alt=""
                              onClick={() => handlePlay(ind)}
                            />
                          )}
                        </div>
                      </div>
                    </>
                  );
}) }
          
           
        </div>
    </div>
  )
}

export default VideoTesttimonial