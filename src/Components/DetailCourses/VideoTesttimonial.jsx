import React from 'react'
import "./Pageheader.css";

const VideoTesttimonial = () => {
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
            <div className='vt-card relative h-[280px] bg-red-500 rounded-xl overflow-hidden flex flex-col justify-end xsm:h-[180px]' style={{backgroundImage: "url('../Img/videotestimonialimg1.png')", backgroundSize: "100% 100%"}}>
                <div className='vt-onhover-overlay absolute top-[100%] bg-[#00000066] backdrop-blur-sm h-full flex flex-col gap-2 pt-8 px-2 xsm:pt-2 xsm:gap-1'>
                    <div>
                        <img src="../Icons/VTcomma.svg" alt="" className='w-[30px] xsm:w-[6px]' />
                    </div>
                    <p className='text-[#F5F5F5] text-[15px] xsm:text-[8px] xsm:leading-3'>React JS & Redux Essentials course, guiding you through creating dynamic user interfaces and mastering state management.</p>
                </div>
                <div className='flex justify-between items-center bg-[#000000BF] backdrop-blur-sm font-nu px-4 py-2 xsm:px-2'>
                    <div className='flex flex-col'>
                        <p className='text-white xsm:text-[12px]'>Rayna Aminoff</p>
                        <p className='text-[#BCBCBC] text-[13px] xsm:text-[10px]'>Unity Network</p>
                    </div>
                    <img className='w-[40px] h-[40px] xsm:w-[20px] xsm:h-[20px]' src="../Icons/playicon.svg" alt="" />
                </div>
            </div>
            <div className='vt-card relative h-[280px] bg-red-500 rounded-xl overflow-hidden flex flex-col justify-end xsm:h-[180px]' style={{backgroundImage: "url('../Img/videotestimonialimg1.png')", backgroundSize: "100% 100%"}}>
                <div className='vt-onhover-overlay absolute top-[100%] bg-[#00000066] backdrop-blur-sm h-full flex flex-col gap-2 pt-8 px-2 xsm:pt-2 xsm:gap-1'>
                    <div>
                        <img src="../Icons/VTcomma.svg" alt="" className='w-[30px] xsm:w-[6px]' />
                    </div>
                    <p className='text-[#F5F5F5] text-[15px] xsm:text-[8px] xsm:leading-3'>React JS & Redux Essentials course, guiding you through creating dynamic user interfaces and mastering state management.</p>
                </div>
                <div className='flex justify-between items-center bg-[#000000BF] backdrop-blur-sm font-nu px-4 py-2 xsm:px-2'>
                    <div className='flex flex-col'>
                        <p className='text-white xsm:text-[12px]'>Rayna Aminoff</p>
                        <p className='text-[#BCBCBC] text-[13px] xsm:text-[10px]'>Unity Network</p>
                    </div>
                    <img className='w-[40px] h-[40px] xsm:w-[20px] xsm:h-[20px]' src="../Icons/playicon.svg" alt="" />
                </div>
            </div>
            <div className='vt-card relative h-[280px] bg-red-500 rounded-xl overflow-hidden flex flex-col justify-end xsm:h-[180px]' style={{backgroundImage: "url('../Img/videotestimonialimg1.png')", backgroundSize: "100% 100%"}}>
                <div className='vt-onhover-overlay absolute top-[100%] bg-[#00000066] backdrop-blur-sm h-full flex flex-col gap-2 pt-8 px-2 xsm:pt-2 xsm:gap-1'>
                    <div>
                        <img src="../Icons/VTcomma.svg" alt="" className='w-[30px] xsm:w-[6px]' />
                    </div>
                    <p className='text-[#F5F5F5] text-[15px] xsm:text-[8px] xsm:leading-3'>React JS & Redux Essentials course, guiding you through creating dynamic user interfaces and mastering state management.</p>
                </div>
                <div className='flex justify-between items-center bg-[#000000BF] backdrop-blur-sm font-nu px-4 py-2 xsm:px-2'>
                    <div className='flex flex-col'>
                        <p className='text-white xsm:text-[12px]'>Rayna Aminoff</p>
                        <p className='text-[#BCBCBC] text-[13px] xsm:text-[10px]'>Unity Network</p>
                    </div>
                    <img className='w-[40px] h-[40px] xsm:w-[20px] xsm:h-[20px]' src="../Icons/playicon.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default VideoTesttimonial