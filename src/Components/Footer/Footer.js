import React from 'react';
import Img1 from "../../Assests/Icons/footer1.svg";
import Img2 from "../../Assests/Images/hmlogo.png";
import Icon1 from "../../Assests/Icons/insta.svg";
import Icon2 from "../../Assests/Icons/fb.svg";
import Icon3 from "../../Assests/Icons/lkd.svg";
import Icon4 from "../../Assests/Icons/yt.svg";
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const { pathname } = useLocation();
    // console.log(pathname)
    return (
        <>
            <div className='flex flex-col gap-14 bg-[#E2FFF1] py-10 xsm:gap-8 xsm:mt-8'>
                <div className='flex  justify-between px-[5%] xsm:pl-[5%] xsm:flex xsm:flex-col xsm:gap-8'>
                    <div className='flex flex-col gap-8 w-[220px] xsm:gap-2 xsm:w-[90%]'>
                        <img src={Img2} className='w-[140px] h-[55px] xsm:w-[40%] xsm:h-[10%]' />
                        <p className='text-[#555555] text-[14px] font-nu text-balance w-full xsm:text-[10px]'>Empower your future with interactive courses tailored to your goals. Join our dynamic eLearning community and unlock your potential today!</p>
                    </div>
                    <div className='flex flex-col gap-4 xsm:gap-2  '>
                        <p className='text-[#555555] text-[20px] font-nu font-semibold xsm:text-[10px]'>GET HELP</p>
                        <div className='flex flex-col gap-4 xsm:gap-1'>
                            {/* <Link className='text-[#555555] text-[16px] font-nu xsm:text-[8px]'>Contact Us</p> */}
                            <Link className='text-[#555555] text-[16px] font-nu xsm:text-[8px]'>Privacy Policy</Link>
                            <Link className='text-[#555555] text-[16px] font-nu xsm:text-[8px]'>Terms and Conditions</Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 xsm:gap-2  '>
                        <p className='text-[#555555] text-[20px] font-nu font-semibold xsm:text-[10px]'>PROGRAMS</p>
                        <div className='flex flex-col gap-4 xsm:gap-1'>
                            <Link to='/course?category=Management' className='text-[#555555] text-[16px] font-nu xsm:text-[8px]'>Management</Link>
                            <Link to='/course?category=Finance' className='text-[#555555] text-[16px] font-nu xsm:text-[8px]'>Finance</Link>
                            <Link to='/course?category=Full Stack Development' className='text-[#555555] text-[16px] font-nu xsm:text-[8px]'>Full Stack Development</Link>
                            <Link to='/course?category=AI' className='text-[#555555] text-[16px] font-nu xsm:text-[8px]'>AI/ML</Link>
                            <Link to='/course?category=Cyber Security' className='text-[#555555] text-[16px] font-nu xsm:text-[8px]'>Cyber Security</Link>
                            <Link to='/course?category=Electric Vehicle Design' className='text-[#555555] text-[16px] font-nu xsm:text-[8px]'>Electric Vehicle Design</Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 xsm:gap-2  '>
                        <p className='text-[#555555] text-[20px] font-nu font-semibold xsm:text-[10px]'>CONTACT US</p>
                        <div className='flex flex-col gap-4 xsm:gap-1'>
                            <p className='text-[#555555] text-[16px] font-nu xsm:text-[8px]'>Tel: + 9779886900</p>
                            <p className='text-[#555555] text-[16px] font-nu xsm:text-[8px]'>Mail: Support@hopingminds.com</p>
                            <div className='flex flex-row gap-2 items-center'>
                               <Link to='https://www.instagram.com/hopingminds_?igsh=MWxvN2F5YmM0aW1lYQ=='> <img src={Icon1} className='w-[28px] h-[28px] xsm:w-[15px] xsm:h-[15px]' /></Link>
                               <Link to='https://www.facebook.com/share/Z3c1iwpnxsDk3YJH/?mibextid=qi2Omg'> <img src={Icon2} className='w-[28px] h-[28px] xsm:w-[15px] xsm:h-[15px]' /></Link>
                                <Link to='https://www.linkedin.com/company/hoping-minds/'><img src={Icon3} className='w-[28px] h-[28px] xsm:w-[15px] xsm:h-[15px]' />
</Link>
                                <Link to='https://youtube.com/@HopingMinds?si=t7nBGjhMukWF6aN9'> <img src={Icon4} className='w-[35px] h-[35px] xsm:w-[15px] xsm:h-[15px]' /></Link>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-2 items-center justify-center xsm:gap-1'>
                    <img src={Img1} className=' xsm:w-[15px] xsm:h-[15px]' />
                    <p className='text-[#555555] text-[14px] font-nu font-semibold xsm:text-[10px]'>KATINA SKILLS PRIVATE LIMITED 2023</p>
                </div>
            </div>
        </>
    )
}

export default Footer