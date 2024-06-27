import React, { useState } from 'react'
import "./Pageheader.css";
import ReactPlayer from 'react-player';
import { CiPause1 } from 'react-icons/ci';
import TestimonialInner from './testimonialInner';

const VideoTesttimonial = ({ data }) => {
  data=data?.map((val)=>{return {...val,isPlaying:false}})
  
  const [newdata,setNewData]=useState(data)
  // console.log(data)
   const handleContextMenu = (e) => {
     e.preventDefault(); // Prevent default context menu behavior
  };


  
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
                      <TestimonialInner val={val } />
                    </>
                  );
}) }
          
           
        </div>
    </div>
  )
}

export default VideoTesttimonial