import React from 'react'
import "./Pageheader.css";

const VideoTesttimonial = () => {
  return (
    <div className='flex flex-col gap-10'>
        <div>
            <div className='flex items-center gap-4'>
                <div className='w-[70px] border-[0.6px] border-[#3C3C3C]'/>
                <p className='text-[#3C3C3C] font-nu tracking-widest text-[14px]'>TESTIMONIAL</p>
            </div>
            <div className='font-pop font-semibold text-[32px] text-[#3C3C3C]'>What They Say?</div>
        </div>
        <div className='grid grid-cols-3 gap-10'>
            <div className='vt-card relative h-[280px] bg-red-500 rounded-xl overflow-hidden flex flex-col justify-end' style={{backgroundImage: "url('../Img/videotestimonialimg1.png')", backgroundSize: "100% 100%"}}>
                <div className='vt-onhover-overlay absolute top-[100%] bg-[#00000066] backdrop-blur-sm h-full flex flex-col gap-2 pt-8 px-2'>
                    <div>
                        <img src="../Icons/VTcomma.svg" alt="" className='w-[30px]' />
                    </div>
                    <p className='text-[#F5F5F5] text-[15px]'>React JS & Redux Essentials course, guiding you through creating dynamic user interfaces and mastering state management.</p>
                </div>
                <div className='flex justify-between items-center bg-[#000000BF] backdrop-blur-sm font-nu px-4 py-2'>
                    <div className='flex flex-col'>
                        <p className='text-white'>Rayna Aminoff</p>
                        <p className='text-[#BCBCBC] text-[13px]'>Unity Network</p>
                    </div>
                    <img className='w-[40px] h-[40px]' src="../Icons/playicon.svg" alt="" />
                </div>
            </div>
            <div className='vt-card relative h-[280px] bg-red-500 rounded-xl overflow-hidden flex flex-col justify-end' style={{backgroundImage: "url('../Img/videotestimonialimg1.png')", backgroundSize: "100% 100%"}}>
                <div className='vt-onhover-overlay absolute top-[100%] bg-[#00000066] backdrop-blur-sm h-full flex flex-col gap-2 pt-8 px-2'>
                    <div>
                        <img src="../Icons/VTcomma.svg" alt="" className='w-[30px]' />
                    </div>
                    <p className='text-[#F5F5F5] text-[15px]'>React JS & Redux Essentials course, guiding you through creating dynamic user interfaces and mastering state management.</p>
                </div>
                <div className='flex justify-between items-center bg-[#000000BF] backdrop-blur-sm font-nu px-4 py-2'>
                    <div className='flex flex-col'>
                        <p className='text-white'>Rayna Aminoff</p>
                        <p className='text-[#BCBCBC] text-[13px]'>Unity Network</p>
                    </div>
                    <img className='w-[40px] h-[40px]' src="../Icons/playicon.svg" alt="" />
                </div>
            </div>
            <div className='vt-card relative h-[280px] bg-red-500 rounded-xl overflow-hidden flex flex-col justify-end' style={{backgroundImage: "url('../Img/videotestimonialimg1.png')", backgroundSize: "100% 100%"}}>
                <div className='vt-onhover-overlay absolute top-[100%] bg-[#00000066] backdrop-blur-sm h-full flex flex-col gap-2 pt-8 px-2'>
                    <div>
                        <img src="../Icons/VTcomma.svg" alt="" className='w-[30px]' />
                    </div>
                    <p className='text-[#F5F5F5] text-[15px]'>React JS & Redux Essentials course, guiding you through creating dynamic user interfaces and mastering state management.</p>
                </div>
                <div className='flex justify-between items-center bg-[#000000BF] backdrop-blur-sm font-nu px-4 py-2'>
                    <div className='flex flex-col'>
                        <p className='text-white'>Rayna Aminoff</p>
                        <p className='text-[#BCBCBC] text-[13px]'>Unity Network</p>
                    </div>
                    <img className='w-[40px] h-[40px]' src="../Icons/playicon.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default VideoTesttimonial