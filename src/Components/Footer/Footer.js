import React from 'react';
import Img1 from "../../Assests/Icons/footer1.svg";
import Img2 from "../../Assests/Images/hmlogo.png";
import Icon1 from "../../Assests/Icons/insta.svg";
import Icon2 from "../../Assests/Icons/fb.svg";
import Icon3 from "../../Assests/Icons/lkd.svg";
import Icon4 from "../../Assests/Icons/yt.svg";

const Footer = () => {
  return (
    <>
    <div className='flex flex-col gap-14 bg-[#E2FFF1] py-5'>
        <div className='grid grid-cols-4 justify-between pl-36'>
            <div className='flex flex-col gap-12 w-[220px]'>
                <img src={Img2} className='w-[217px] h-[84px]' />
                <p className='text-[#555555] text-[20px] font-Nunito Sans text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-[#555555] text-[24px] font-Nunito Sans font-semibold'>GET HELP</p>
                <div className='flex flex-col gap-4'>
                    <p className='text-[#555555] text-[20px] font-Nunito Sans'>Contact Us</p>
                    <p className='text-[#555555] text-[20px] font-Nunito Sans'>Latest Articles</p>
                    <p className='text-[#555555] text-[20px] font-Nunito Sans'>FAQ</p>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-[#555555] text-[24px] font-Nunito Sans font-semibold'>PROGRAMS</p>
                <div className='flex flex-col gap-4'>
                    <p className='text-[#555555] text-[20px] font-Nunito Sans'>Data Science</p>
                    <p className='text-[#555555] text-[20px] font-Nunito Sans'>Full Stack Development</p>
                    <p className='text-[#555555] text-[20px] font-Nunito Sans'>AI/ML</p>
                    <p className='text-[#555555] text-[20px] font-Nunito Sans'>Cyber  Security</p>
                    <p className='text-[#555555] text-[20px] font-Nunito Sans'>Electric Vehicle Design</p>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-[#555555] text-[24px] font-Nunito Sans font-semibold'>CONTACT US</p>
                <div className='flex flex-col gap-4'>
                    <p className='text-[#555555] text-[20px] font-Nunito Sans'>Tel: + 9779886900</p>
                    <p className='text-[#555555] text-[20px] font-Nunito Sans'>Mail: Support@Hopingminds.com</p>
                    <div className='flex flex-row gap-1'>
                        <img src={Icon1} className='w-[28px] h-[28px]' />
                        <img src={Icon2} className='w-[28px] h-[28px]' />
                        <img src={Icon3} className='w-[28px] h-[28px]' />
                        <img src={Icon4} className='w-[28px] h-[28px]' />
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-row gap-2 items-center justify-center'>
            <img src={Img1} />
            <p className='text-[#555555] text-[20px] font-Nunito Sans font-semibold'>KATINA SKILLS PRIVATE LIMITED 2023</p>
        </div>
    </div>
    </>
  )
}

export default Footer