import React from 'react';
import Img1 from "../../Assests/Icons/footer1.svg";
import Img2 from "../../Assests/Images/hmlogo.png";
import Icon1 from "../../Assests/Icons/insta.svg";
import Icon2 from "../../Assests/Icons/fb.svg";
import Icon3 from "../../Assests/Icons/lkd.svg";
import Icon4 from "../../Assests/Icons/yt.svg";
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const { pathname } = useLocation();
    console.log(pathname)
    return (
        <>
            <div className='flex flex-col gap-14 bg-[#E2FFF1] py-5 mt-12 xsm:gap-8'>
                <div className='grid grid-cols-4 justify-between pl-36 xsm:pl-[5%] xsm:flex xsm:flex-col xsm:gap-8'>
                    <div className='flex flex-col gap-8 w-[220px] xsm:gap-2 xsm:w-[90%]'>
                        <img src={Img2} className='w-[217px] h-[84px] xsm:w-[40%] xsm:h-[10%]' />
                        <p className='text-[#555555] text-[14px] font-nu text-balance w-full xsm:text-[10px]'>Holistic a development programs that place students in specific high growth roles across 150+ Corporate Partners.</p>
                    </div>
                    <div className='flex flex-col gap-4 xsm:gap-2'>
                        <p className='text-[#555555] text-[24px] font-nu font-semibold xsm:text-[10px]'>GET HELP</p>
                        <div className='flex flex-col gap-4 xsm:gap-1'>
                            <p className='text-[#555555] text-[16px] font-nu xsm:text-[8px]'>Contact Us</p>
                            <p className='text-[#555555] text-[16px] font-nu xsm:text-[8px]'>Latest Articles</p>
                            <p className='text-[#555555] text-[16px] font-nu xsm:text-[8px]'>FAQ</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 xsm:gap-2'>
                        <p className='text-[#555555] text-[24px] font-nu font-semibold xsm:text-[10px]'>PROGRAMS</p>
                        <div className='flex flex-col gap-4 xsm:gap-1'>
                            <p className='text-[#555555] text-[16px] font-nu xsm:text-[8px]'>Data Science</p>
                            <p className='text-[#555555] text-[16px] font-nu xsm:text-[8px]'>Full Stack Development</p>
                            <p className='text-[#555555] text-[16px] font-nu xsm:text-[8px]'>AI/ML</p>
                            <p className='text-[#555555] text-[16px] font-nu xsm:text-[8px]'>Cyber  Security</p>
                            <p className='text-[#555555] text-[16px] font-nu xsm:text-[8px]'>Electric Vehicle Design</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 xsm:gap-2'>
                        <p className='text-[#555555] text-[20px] font-nu font-semibold xsm:text-[10px]'>CONTACT US</p>
                        <div className='flex flex-col gap-4 xsm:gap-1'>
                            <p className='text-[#555555] text-[16px] font-nu xsm:text-[8px]'>Tel: + 9779886900</p>
                            <p className='text-[#555555] text-[16px] font-nu xsm:text-[8px]'>Mail: Support@Hopingminds.com</p>
                            <div className='flex flex-row gap-1'>
                                <img src={Icon1} className='w-[28px] h-[28px] xsm:w-[15px] xsm:h-[15px]' />
                                <img src={Icon2} className='w-[28px] h-[28px] xsm:w-[15px] xsm:h-[15px]' />
                                <img src={Icon3} className='w-[28px] h-[28px] xsm:w-[15px] xsm:h-[15px]' />
                                <img src={Icon4} className='w-[28px] h-[28px] xsm:w-[15px] xsm:h-[15px]' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-2 items-center justify-center xsm:gap-1'>
                    <img src={Img1} className='xsm:w-[15px] xsm:h-[15px]' />
                    <p className='text-[#555555] text-[20px] font-nu font-semibold xsm:text-[10px]'>KATINA SKILLS PRIVATE LIMITED 2023</p>
                </div>
            </div>
        </>
    )
}

export default Footer