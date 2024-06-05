import React from 'react'
import './hirefromus.css'

const Resume = () => {
  return (
    <div className='py-[4%] xsm:pb-[12%]'>
        <div className='py-[4%] text-white font-pop font-semibold text-[40px] text-center relative md:text-[32px] md:pt-[0%] xsm:text-[20px]'>
            <p><span className='text-[#1DBF73]'>Thousands</span> of successful tech</p>
            <div className='absolute left-[30%] top-[43%] md:left-[26%] md:top-[32%] xsm:left-[14%] xsm:top-[30%]'>
                <img className='w-[70%] md:w-[50%] xsm:w-[30%]' src="../Icons/yellowcurve.svg" alt="" />
                <img className='w-[70%] md:w-[50%] xsm:w-[30%] absolute top-[50%] rotate-[357deg]' src="../Icons/yellowcurve.svg" alt="" />
            </div>
            <p>careers, fuelled by Hoping minds</p>
        </div>
        <div className='flex justify-end'>
            <p className='font-pop font-bold text-[#1DBF73] md:text-[14px] xsm:text-[10px]'>See All</p>
        </div>
        <div className='grid grid-cols-3 gap-8 mt-8 md:mt-6 md:gap-6 xsm:mt-4 xsm:grid-cols-1'>
            <div className='bg-[#E2FFF1] p-8 rounded-3xl flex flex-col gap-4 md:p-4 md:gap-2 xsm:p-6'>
                <div className='flex justify-between'>
                    <div className='font-int w-[60%] md:w-full flex flex-col justify-between'>
                        <p className='font-medium text-[18px] md:text-[14px] xsm:text-[16px]'>Arjit Dixit</p>
                        <p className='font-bold md:text-[14px] md:leading-tight xsm:text-[12px]'>Full Stack Developer</p>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-1'>
                                <img className='w-5 md:w-4' src="../Icons/Briefcase.svg" alt="" />
                                <p className='font-bold text-[14px] md:text-[10px] xsm:text-[12px]'>1-2 Yrs</p>
                            </div>
                            <p className='font-medium text-[18px]'>|</p>
                            <div className='flex items-center gap-1'>
                                <img className='w-5 md:w-4' src="../Icons/location.svg" alt="" />
                                <p className='font-medium text-[14px] md:text-[10px] xsm:text-[12px]'>Mohali</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className='w-24 md:w-14 xsm:w-16' src="../img/hireprofile.png" alt="" />
                    </div>
                </div>
                <div className='flex pr-6 md:pr-0'>
                    <div className='w-[15%]'>
                        <img className='w-5 h-5' src="../Icons/fileempty.svg" alt="" />
                    </div>
                    <div>
                        <p className='font-int font-medium text-justify text-[14px] md:text-[10px] xsm:text-[12px]'>Currently honing problem-solving skills through coursework and hands-on projects. Demonstrated ability to
grasp complex concepts and apply them effectively. Eager to contribute a dedicated and proactive approach
to coding challenges and collaborative projects.</p>
                    </div>
                </div>
                {/* <div className='flex justify-center'>
                    <button className='text-white font-int font-bold bg-black px-4 py-1 rounded-lg'>View Resume</button>
                </div> */}
            </div>
            <div className='bg-[#E2FFF1] p-8 rounded-3xl flex flex-col gap-4 md:p-4 xsm:hidden'>
                <div className='flex justify-between'>
                    <div className='font-int w-[60%] md:w-full flex flex-col justify-between'>
                        <p className='font-medium text-[18px] md:text-[14px] xsm:text-[16px]'>Drishti</p>
                        <p className='font-bold md:text-[14px] md:leading-tight xsm:text-[12px]'>Data Science</p>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-1'>
                                <img className='w-5 md:w-4' src="../Icons/Briefcase.svg" alt="" />
                                <p className='font-bold text-[14px] md:text-[10px] xsm:text-[12px]'>2-3 Yrs</p>
                            </div>
                            <p className='font-medium text-[18px]'>|</p>
                            <div className='flex items-center gap-1'>
                                <img className='w-5 md:w-4' src="../Icons/location.svg" alt="" />
                                <p className='font-medium text-[14px] md:text-[10px] xsm:text-[12px]'>Punjab</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className='w-24 md:w-14 xsm:w-16' src="../img/hireprofile.png" alt="" />
                    </div>
                </div>
                <div className='flex pr-6 md:pr-0'>
                    <div className='w-[15%]'>
                        <img className='w-5 h-5' src="../Icons/fileempty.svg" alt="" />
                    </div>
                    <div>
                        <p className='font-int font-medium text-justify text-[14px] md:text-[10px] xsm:text-[12px]'>Proficient in Python and Data analysis tools with a strong foundation in Data Structures and Algorithms, enabling
effective problem solving in diverse scenarios. Strong teamwork skills with excellent communication and interpersonal
skills , Committed to delivering results while promoting quality work.</p>
                    </div>
                </div>
                {/* <div className='flex justify-center'>
                    <button className='text-white font-int font-bold bg-black px-4 py-1 rounded-lg'>View Resume</button>
                </div> */}
            </div>
            <div className='bg-[#E2FFF1] p-8 rounded-3xl flex flex-col gap-4 md:p-4 xsm:hidden'>
                <div className='flex justify-between'>
                    <div className='font-int w-[60%] md:w-full flex flex-col justify-between'>
                        <p className='font-medium text-[18px] md:text-[14px] xsm:text-[16px]'>Dupesh Malhan</p>
                        <p className='font-bold md:text-[14px] md:leading-tight xsm:text-[12px]'>Full Stack Developer</p>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-1'>
                                <img className='w-5 md:w-4' src="../Icons/Briefcase.svg" alt="" />
                                <p className='font-bold text-[14px] md:text-[10px] xsm:text-[12px]'>6 months</p>
                            </div>
                            <p className='font-medium text-[18px]'>|</p>
                            <div className='flex items-center gap-1'>
                                <img className='w-5 md:w-4' src="../Icons/location.svg" alt="" />
                                <p className='font-medium text-[14px] md:text-[10px] xsm:text-[12px]'>Mohali</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className='w-24 md:w-14 xsm:w-16' src="../img/hireprofile.png" alt="" />
                    </div>
                </div>
                <div className='flex pr-6 md:pr-0'>
                    <div className='w-[15%]'>
                        <img className='w-5 h-5' src="../Icons/fileempty.svg" alt="" />
                    </div>
                    <div>
                        <p className='font-int font-medium text-justify text-[14px] md:text-[10px] xsm:text-[12px]'>Highly motivated and passionate Computer Science student proficient in web development and problem-
solving. Demonstrated ability to approach challenges with a logical and strategic mindset. Dedicated team

player with excellent communication skills who fosters collaborative environments and contributes to
successful project outcomes.</p>
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