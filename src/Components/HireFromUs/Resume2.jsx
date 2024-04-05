import React from 'react'
import './hirefromus.css'

const Resume2 = () => {
  return (
    <div className='px-[5%] py-[21%] bg-gradient-to-r from-[#0F2027] to-[#203A43] resumebg w-full' style={{  width: "100%" }}>
        <div className='text-white font-pop font-semibold text-[40px] text-center relative md:text-[32px]'>
            <p><span className='text-[#1DBF73]'>Thousands</span> of successful tech</p>
            <div className='absolute left-[30%] top-[43%] md:left-[25%]'>
                <img className='w-[70%] md:w-[50%]' src="../Icons/yellowcurve.svg" alt="" />
                <img className='w-[70%] md:w-[50%] absolute top-[50%] rotate-[357deg]' src="../Icons/yellowcurve.svg" alt="" />
            </div>
            <p>careers, fuelled by Hoping minds</p>
        </div>
        <div className='flex justify-end'>
            <p className='font-pop font-bold text-[#1DBF73] mt-4 md::text-[14px]'>See All</p>
        </div>
        <div className='grid grid-cols-3 gap-8 mt-8 md:mt-4'>
            <div className='bg-[#E2FFF1] p-8 rounded-3xl flex flex-col gap-4 md:rounded-xl md:p-4 md:gap-2'>
                <div className='flex justify-between'>
                    <div className='font-int w-[60%] flex flex-col justify-between md:w-full'>
                        <p className='font-medium text-[18px] md:text-[14px]'>Anchal</p>
                        <p className='font-bold md:text-[12px]'>Graphic Designer</p>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-1 md:gap-0'>
                                <img className='w-5 md:w-3' src="../Icons/Briefcase.svg" alt="" />
                                <p className='font-bold text-[14px] md:text-[10px]'>2-7 Yrs</p>
                            </div>
                            <p className='font-medium text-[18px]'>|</p>
                            <div className='flex items-center gap-1 md:gap-0'>
                                <img className='w-5 md:w-3' src="../Icons/location.svg" alt="" />
                                <p className='font-medium text-[14px] md:text-[10px]'>Chandigarh</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className='w-24 md:w-16' src="../img/hireprofile.png" alt="" />
                    </div>
                </div>
                <div className='flex pr-6'>
                    <div className='w-[15%]'>
                        <img className='w-5 h-5' src="../Icons/fileempty.svg" alt="" />
                    </div>
                    <div>
                        <p className='font-int font-medium text-justify text-[14px] md:text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci....</p>
                    </div>
                </div>
                {/* <div className='flex justify-center'>
                    <button className='text-white font-int font-bold bg-black px-4 py-1 rounded-lg'>View Resume</button>
                </div> */}
            </div>
            <div className='bg-[#E2FFF1] p-8 rounded-3xl flex flex-col gap-4 md:rounded-xl md:p-4 md:gap-2'>
                <div className='flex justify-between'>
                    <div className='font-int w-[60%] flex flex-col justify-between md:w-full'>
                        <p className='font-medium text-[18px] md:text-[14px]'>Anchal</p>
                        <p className='font-bold md:text-[12px]'>Graphic Designer</p>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-1 md:gap-0'>
                                <img className='w-5 md:w-3' src="../Icons/Briefcase.svg" alt="" />
                                <p className='font-bold text-[14px] md:text-[10px]'>2-7 Yrs</p>
                            </div>
                            <p className='font-medium text-[18px]'>|</p>
                            <div className='flex items-center gap-1 md:gap-0'>
                                <img className='w-5 md:w-3' src="../Icons/location.svg" alt="" />
                                <p className='font-medium text-[14px] md:text-[10px]'>Chandigarh</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className='w-24 md:w-16' src="../img/hireprofile.png" alt="" />
                    </div>
                </div>
                <div className='flex pr-6'>
                    <div className='w-[15%]'>
                        <img className='w-5 h-5' src="../Icons/fileempty.svg" alt="" />
                    </div>
                    <div>
                        <p className='font-int font-medium text-justify text-[14px] md:text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci....</p>
                    </div>
                </div>
                {/* <div className='flex justify-center'>
                    <button className='text-white font-int font-bold bg-black px-4 py-1 rounded-lg'>View Resume</button>
                </div> */}
            </div>
            <div className='bg-[#E2FFF1] p-8 rounded-3xl flex flex-col gap-4 md:rounded-xl md:p-4 md:gap-2'>
                <div className='flex justify-between'>
                    <div className='font-int w-[60%] flex flex-col justify-between md:w-full'>
                        <p className='font-medium text-[18px] md:text-[14px]'>Anchal</p>
                        <p className='font-bold md:text-[12px]'>Graphic Designer</p>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-1 md:gap-0'>
                                <img className='w-5 md:w-3' src="../Icons/Briefcase.svg" alt="" />
                                <p className='font-bold text-[14px] md:text-[10px]'>2-7 Yrs</p>
                            </div>
                            <p className='font-medium text-[18px]'>|</p>
                            <div className='flex items-center gap-1 md:gap-0'>
                                <img className='w-5 md:w-3' src="../Icons/location.svg" alt="" />
                                <p className='font-medium text-[14px] md:text-[10px]'>Chandigarh</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className='w-24 md:w-16' src="../img/hireprofile.png" alt="" />
                    </div>
                </div>
                <div className='flex pr-6'>
                    <div className='w-[15%]'>
                        <img className='w-5 h-5' src="../Icons/fileempty.svg" alt="" />
                    </div>
                    <div>
                        <p className='font-int font-medium text-justify text-[14px] md:text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci....</p>
                    </div>
                </div>
                {/* <div className='flex justify-center'>
                    <button className='text-white font-int font-bold bg-black px-4 py-1 rounded-lg'>View Resume</button>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Resume2