import React from 'react';
import Img1 from "../../Assests/Icons/footer1.svg";
import Icon1 from "../../Assests/Icons/insta.svg";
import Icon2 from "../../Assests/Icons/fb.svg";
import Icon3 from "../../Assests/Icons/lkd.svg";
import Icon4 from "../../Assests/Icons/yt.svg";
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation();
    function Top() {
        window.scrollTo(0, 0);
    }
    // console.log(pathname)
    return (
        <>
            <style>
                {`
            @layer utilities {
                .bg-radial-gradient {
                  background-image: radial-gradient(circle, #0F2027 0%, #0B1418 100%, #203A43 100%);
                }
              }
            `}
            </style>
            <div className='flex flex-col gap-14  pt-10 pb-4 xsm:gap-8 bg-radial-gradient md:gap-10 md:pt-8'>
                <div className='flex  justify-between px-[5%] xsm:pl-[5%] xsm:flex xsm:flex-col xsm:gap-8'>
                    <div className='flex flex-col gap-5 w-[260px] xsm:gap-2 xsm:w-[90%] md:gap-6'>
                        <div onClick={() => navigate('/')}><img src='/logo.png' className='w-auto h-[50px] xsm:w-[40%] xsm:h-[10%] md:w-[60%]  cursor-pointer' /></div>
                        <p className='text-white text-[12px] font-pop text-balance w-[90%] xsm:text-[10px] md:text-[12px] md:w-[90%] md:pl-2'>HopingMinds offers holistic development programs designed to position students in high-growth roles through our network of over 200+ corporate partners. Our tailored approach ensures you're not just prepared, but primed for success in your chosen field.</p>
                    </div>
                    <div className='flex flex-col gap-8 xsm:gap-2  '>
                        <p className='text-white text-[20px] font-pop font-semibold xsm:text-[10px] md:text-[14px]'>GET HELP</p>
                        <div className='flex flex-col gap-3 xsm:gap-1 md:gap-2'>
                            {/* <Link className='text-white text-[16px] font-pop xsm:text-[8px]'>Contact Us</p> */}
                            <Link to='/privacy' className='text-white text-[16px] font-pop xsm:text-[8px] md:text-[10px]'>Privacy Policy</Link>
                            <Link to='/terms' className='text-white text-[16px] font-pop xsm:text-[8px] md:text-[10px]'>Terms and Conditions</Link>
                            <Link to='/pap' className='text-white text-[16px] font-pop xsm:text-[8px] md:text-[10px]'>Pay After Placement</Link>
                            <Link to='/career' className='text-white text-[16px] font-pop xsm:text-[8px] md:text-[10px]'>Career</Link>
                            <Link to='/about' className='text-white text-[16px] font-pop xsm:text-[8px] md:text-[10px]'>About</Link>
                            {/* <Link to='/hire-from-us' className='text-white text-[16px] font-pop xsm:text-[8px] md:text-[10px]'>Hire From Us</Link> */}
                            <Link to='/cv-builder' className='text-white text-[16px] font-pop xsm:text-[8px] md:text-[10px]'>CV Builder</Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-8 xsm:gap-2 ' >
                        <p className='text-white text-[20px] font-pop font-semibold xsm:text-[10px] md:text-[14px]'>PROGRAMS</p>
                        <div className='flex flex-col gap-3 xsm:gap-1 md:gap-2' onClick={Top}>
                            <Link to='/course?category=Management' className='text-white text-[16px] font-pop xsm:text-[8px] md:text-[10px]'>Management</Link>
                            <Link to='/course?category=Finance' className='text-white text-[16px] font-pop xsm:text-[8px] md:text-[10px]'>Finance</Link>
                            <Link to='/course?category=Full Stack Development' className='text-white text-[16px] font-pop xsm:text-[8px] md:text-[10px]'>Full Stack Development</Link>
                            <Link to='/course?category=AI/ML' className='text-white text-[16px] font-pop xsm:text-[8px] md:text-[10px]'>AI/ML</Link>
                            <Link to='/course?category=Networking' className='text-white text-[16px] font-pop xsm:text-[8px] md:text-[10px]'>Networking</Link>
                            <Link to='/course?category=Data Science' className='text-white text-[16px] font-pop xsm:text-[8px] md:text-[10px]'>Data Science</Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-8 xsm:gap-2  '>
                        <p className='text-white text-[20px] font-pop font-semibold xsm:text-[10px] md:text-[14px]'>CONTACT US</p>
                        <div className='flex flex-col gap-3 xsm:gap-1 md:gap-2'>
                            <p className='text-white text-[16px] font-pop xsm:text-[8px] md:text-[10px]'>Tel: +91 91931 00050 , +91 76579 22600 
                            </p>
                            <Link to='mailto:support@hopingminds.com' target='_blank' className='text-white text-[16px] font-pop xsm:text-[8px] md:text-[10px]'>Mail: support@hopingminds.com</Link>
                            <div className='flex flex-row gap-2 items-center'>
                                <Link target='_blank' to='https://www.instagram.com/hopingminds_?igsh=MWxvN2F5YmM0aW1lYQ=='> <img src={Icon1} className='w-[30px] h-[30px] xsm:w-[15px] xsm:h-[15px] md:w-[18px] md:h-[18px]' /></Link>
                                <Link target='_blank' to='https://www.facebook.com/share/Z3c1iwpnxsDk3YJH/?mibextid=qi2Omg'> <img src={Icon2} className='w-[32px] h-[32px] xsm:w-[15px] xsm:h-[15px] md:w-[18px] md:h-[18px]' /></Link>
                                <Link target='_blank' to='https://www.linkedin.com/company/hoping-minds/'><img src={Icon3} className='w-[30px] h-[30px] xsm:w-[15px] xsm:h-[15px] md:w-[18px] md:h-[18px]' />
                                </Link>
                                <Link target='_blank' to='https://youtube.com/@HopingMinds?si=t7nBGjhMukWF6aN9'> <img src={Icon4} className='w-[36px] h-[36px] xsm:w-[15px] xsm:h-[15px] md:w-[20px] md:h-[20px]' /></Link>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-2 items-center justify-center xsm:gap-1'>
                    <img src={Img1} className=' xsm:w-[15px] xsm:h-[15px] md:w-[16px] md:h-[16px]' />
                    <p className='text-white text-[16px] font-pop font-semibold xsm:text-[10px] md:text-[12px]'>KATINA SKILLS PRIVATE LIMITED 2023</p>
                </div>
            </div>
        </>
    )
}

export default Footer