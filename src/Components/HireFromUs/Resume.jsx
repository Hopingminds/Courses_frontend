import React from 'react'
import './hirefromus.css'

const Resume = () => {
  return (
    <div className='py-[4%] '>
        <div className='py-[4%] text-white font-pop font-semibold text-[40px] text-center relative'>
            <p><span className='text-[#1DBF73]'>Thousands</span> of successful tech</p>
            <div className='absolute left-[30%] top-[43%]'>
                <img className='w-[70%]' src="../Icons/yellowcurve.svg" alt="" />
                <img className='w-[70%] absolute top-[50%] rotate-[357deg]' src="../Icons/yellowcurve.svg" alt="" />
            </div>
            <p>careers, fuelled by Hoping minds</p>
        </div>
        <div className='flex justify-end'>
            <p className='font-pop font-bold text-[#1DBF73]'>See All</p>
        </div>
        <div className='grid grid-cols-3 gap-8 mt-8'>
            <div className='bg-[#E2FFF1] p-8 rounded-3xl flex flex-col gap-4 '>
                <div className='flex justify-between'>
                    <div className='font-int w-[60%] flex flex-col justify-between'>
                        <p className='font-medium text-[18px]'>Anchal</p>
                        <p className='font-bold'>Graphic Designer</p>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-1'>
                                <img className='w-5' src="../Icons/Briefcase.svg" alt="" />
                                <p className='font-bold text-[14px]'>2-7 Yrs</p>
                            </div>
                            <p className='font-medium text-[18px]'>|</p>
                            <div className='flex items-center gap-1'>
                                <img className='w-5' src="../Icons/location.svg" alt="" />
                                <p className='font-medium text-[14px]'>Chandigarh</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className='w-24' src="../img/hireprofile.png" alt="" />
                    </div>
                </div>
                <div className='flex pr-6'>
                    <div className='w-[15%]'>
                        <img className='w-5 h-5' src="../Icons/fileempty.svg" alt="" />
                    </div>
                    <div>
                        <p className='font-int font-medium text-justify text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci....</p>
                    </div>
                </div>
                {/* <div className='flex justify-center'>
                    <button className='text-white font-int font-bold bg-black px-4 py-1 rounded-lg'>View Resume</button>
                </div> */}
            </div>
            <div className='bg-[#E2FFF1] p-8 rounded-3xl flex flex-col gap-4 '>
                <div className='flex justify-between'>
                    <div className='font-int w-[60%] flex flex-col justify-between'>
                        <p className='font-medium text-[18px]'>Anchal</p>
                        <p className='font-bold'>Graphic Designer</p>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-1'>
                                <img className='w-5' src="../Icons/Briefcase.svg" alt="" />
                                <p className='font-bold text-[14px]'>2-7 Yrs</p>
                            </div>
                            <p className='font-medium text-[18px]'>|</p>
                            <div className='flex items-center gap-1'>
                                <img className='w-5' src="../Icons/location.svg" alt="" />
                                <p className='font-medium text-[14px]'>Chandigarh</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className='w-24' src="../img/hireprofile.png" alt="" />
                    </div>
                </div>
                <div className='flex pr-6'>
                    <div className='w-[15%]'>
                        <img className='w-5 h-5' src="../Icons/fileempty.svg" alt="" />
                    </div>
                    <div>
                        <p className='font-int font-medium text-justify text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci....</p>
                    </div>
                </div>
                {/* <div className='flex justify-center'>
                    <button className='text-white font-int font-bold bg-black px-4 py-1 rounded-lg'>View Resume</button>
                </div> */}
            </div>
            <div className='bg-[#E2FFF1] p-8 rounded-3xl flex flex-col gap-4 '>
                <div className='flex justify-between'>
                    <div className='font-int w-[60%] flex flex-col justify-between'>
                        <p className='font-medium text-[18px]'>Anchal</p>
                        <p className='font-bold'>Graphic Designer</p>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-1'>
                                <img className='w-5' src="../Icons/Briefcase.svg" alt="" />
                                <p className='font-bold text-[14px]'>2-7 Yrs</p>
                            </div>
                            <p className='font-medium text-[18px]'>|</p>
                            <div className='flex items-center gap-1'>
                                <img className='w-5' src="../Icons/location.svg" alt="" />
                                <p className='font-medium text-[14px]'>Chandigarh</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className='w-24' src="../img/hireprofile.png" alt="" />
                    </div>
                </div>
                <div className='flex pr-6'>
                    <div className='w-[15%]'>
                        <img className='w-5 h-5' src="../Icons/fileempty.svg" alt="" />
                    </div>
                    <div>
                        <p className='font-int font-medium text-justify text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci....</p>
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

export default Resume