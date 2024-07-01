import { Splide, SplideSlide } from '@splidejs/react-splide'
import React from 'react'
import './hirefromus.css'
import User11 from "../../Assests/Images/Aditya Sharma.jpg";
import User7 from "../../Assests/Images/Tanisha Sharma.jpg";
import User8 from "../../Assests/Images/Simran Singh.jpeg";
import User9 from "../../Assests/Images/Poonam Saliya.jpg";
import User10 from "../../Assests/Images/Loveneet Kaur.jpg";
import User1 from "../../Assests/Images/Saurabh Pal-Data Resolve.png";
import User2 from "../../Assests/Images/Sumit.jpg";
import User3 from "../../Assests/Images/Khushpreet Kaur.jpg";
import User4 from "../../Assests/Images/Amritpal Protiviti GDU 5.7.png";
import User5 from "../../Assests/Images/Ravinder Singh.jpg";
import User6 from "../../Assests/Images/Rupak Yadav.jpg";


const HireTestimonial = () => {

    const tempdata = [
        {
            text:'Joined Hoping Minds for semester training in January, swiftly placed at Bellboy as a backend engineer in Python with a 5 LPA package. Improved coding and problem- solving skills significantly with their thorough guidance and training.',
            name:'Aditya Sharma ',
            star:5,
            emptystar:0,
            image: User11,
        },
        {
            text:'Placed at Virtuos Digital via Hoping Minds. Transitioned from tech novice to adept with insights into corporate culture. Grateful for guidance from teachers and placement coordinators, fostering a valuable learning journey.',
            name:'LOVNEET KAUR ',
            star:5,
            emptystar:0,
            image: User10,
        },
        {
            text:'Placed in Dubai startup, 5 LPA as backend engineer. Grateful to Hoping Minds via college for training, support, and preparation. Their guidance aligned me with industry demands, aiding in the pursuit of my dreams.',
            name:'Poonam Saliya ',
            star:5,
            emptystar:0,
            image: User9,
        },
        {
            text:'Joining Hoping Minds for cyber security training was pivotal. The supportive environment, dedicated placement team, and excellent teachers facilitated my journey to a job at Cyber Assure Company. Grateful for the growth, friendships, and opportunities gained.',
            name:'Simran Singh',
            star:5,
            emptystar:0,
            image: User8,
        },
        {
            text:'Underwent 6-month industrial training in Data Science at Hoping Minds, leading to a rewarding placement as a software developer at WLTH company. Grateful for their support and guidance, instrumental in realizing full potential.',
            name:'Tanisha Sharma',
            star:5,
            emptystar:0,
            image: User7,
        },
        {
            text:' Hoping Minds transformed my naive knowledge, providing a roadmap and problem- solving approach. Guidance from teachers and placement coordinators, including mock tests, prepared me for interviews. Grateful for the learning journey.',
            name:'Rupak Yadav',
            star:5,
            emptystar:0,
            image: User6,
        },
        {
            text:'Six-month internship at Hoping Minds, Mohali, offered dynamic growth environment. Mentorship in Cybersecurity, practical applications honed problem-solving. Emphasis on continuous learning, supportive culture. Grateful for guidance shaping confident professional.',
            name:'Ravinder Singh',
            star:5,
            emptystar:0,
            image: User5,
        },
        {
            text:"Thrilled to join Protiviti, thanks to Hoping Minds' fantastic support. The journey was challenging, but their assistance and opportunities for growth were invaluable. Grateful to family, teachers, and friends. Excited and determined for this new career chapter!",
            name:'AMRITPAL SINGH',
            star:5,
            emptystar:0,
            image: User4,
        },
        {
            text:"Hoping Minds' dedicated efforts and comprehensive job assistance program transformed me from a hopeful job seeker to a proud employee. Their personalized approach, insightful counseling, and invaluable support led to securing my first job and equipped me for future career success.",
            name:'KHUSHPREET KAUR',
            star:5,
            emptystar:0,
            image: User3,
        },
        {
            text:'HopingMinds played a crucial role in securing my first job, providing unwavering support, essential skills, and invaluable guidance. Their exceptional job placement assistance led me to a role aligned with my aspirations, illuminating my path to success.',
            name:'SUMIT VERMA',
            star:5,
            emptystar:0,
            image: User2,
        },
        {
            text:'Being a recent Computer Science graduate from Jaypee University, MP,I faced job challenges post-college. Enrolling in Hoping Minds for personal development and placement training, I swiftly secured a System Developer role at Data Resolve, grateful for their transformative assistance in my professional journey.',
            name:'SAURABH PAL',
            star:5,
            emptystar:0,
            image: User1,
        },
    ]

  return (
    <div>
        <div className='py-[4%] text-white font-pop font-semibold text-[40px] text-center md:text-[20px] xsm:text-[18px] '>
            <p>Hear directly from <span className='text-[#1DBF73]'>our students.</span> </p>
         
        </div>
        {/* splide */}
        <div className='flex flex-col gap-8'>
            {/* row1 */}
            <div className=' '>
                <Splide
                    options={{
                        type: "loop",
                        perPage: window.innerWidth <= 480 ? 1.5 : (window.innerWidth >= 721 && window.innerWidth <= 1024) ? 3 : (window.innerWidth >= 1025 && window.innerWidth <= 1599) ? 4 : 5,
                        pagination: false,
                        perMove: 1,
                        wheel: false,
                        arrows: false,
                        autoplay: true,
                        interval: 4000,
                        speed: 5500,
                        delay: 1,
                        pauseOnHover: false,
                        drag: true,
                        swipeThreshold: false,
                        gap:'1rem',
                    }}>
                    {tempdata.map((data,index)=>(
                    <SplideSlide>
                        <div
                            key={index}
                            className={`w-full p-4 rounded-lg flex flex-col gap-2 h-full  ${index%2 === 0 ?'bg-[#4C4646] text-[#fff]':'bg-[#fff] text-[#4C4646]'}`}>
                            <div>
                                <img className={`w-4 md:w-3 xsm:w2 ${index%2 === 0 ?' ':' hire-icon-color-invert'}`} src="../Icons/hireinvertedcomma.svg" alt="" />
                            </div>
                            <div className='h-[70%]'>
                                <p className='text-[12px] font-pop md:text-[10px] xsm:text-[11px]'>{data.text}</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='rounded-full'>
                                    <img className='rounded-full w-16 h-16 md:w-12 md:h-12 xsm:w-8 xsm:h-8' src={data.image} alt="" />
                                </div>
                                <div>
                                    <div>
                                        <p className='font-pop font-semibold text-[12px] md:text-[10px] xsm:text-[12px]'>{data.name}</p>
                                    </div>
                                    <div className='flex gap-1'>
                                        {[...Array(data.star)].map( () => {
                                            return (<img className='w-3' src='../Icons/hirestar.svg' alt="" />)
                                        })}
                                        {[...Array(data.emptystar)].map( () => {
                                            return (<img className='w-3' src='../Icons/hirestarempty.svg' alt="" />)
                                        })}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                </SplideSlide>
                    ))}
                </Splide>
            </div>
            {/* row2 */}
            <div className=' '>
                <Splide
                    options={{
                        type: "loop",
                        perPage: window.innerWidth <= 480 ? 1.5 : (window.innerWidth >= 721 && window.innerWidth <= 1024) ? 3 : (window.innerWidth >= 1025 && window.innerWidth <= 1599) ? 4 : 5,
                        pagination: false,
                        perMove: 1,
                        wheel: false,
                        arrows: false,
                        autoplay: true,
                        interval: 4000,
                        speed: 5500,
                        direction:'rtl',
                        right: true, // Set rtl option to true to move from left to right
                        pauseOnHover: false,
                        drag: true,
                        swipeThreshold: false,
                        gap:'1rem',
                    }}>
                    {tempdata.slice(0).reverse().map((data,index)=>(
                    <SplideSlide>
                        <div
                            key={index}
                            className={`w-full p-4 rounded-lg flex flex-col gap-2 h-full  ${index%2 === 0 ?'bg-[#e2dfdf] text-[#4C4646]':'bg-[#4C4646] text-white'}`}>
                            <div className='flex justify-end'>
                                <img className={`w-4 md:w-3 xsm:w-2 ${index%2 === 0 ?' hire-icon-color-invert':' '}`} src="../Icons/hireinvertedcomma.svg" alt="" />
                            </div>
                            <div className='h-[70%]'>
                                <p className='text-[12px] font-pop text-left md:text-[10px] xsm:text-[11px]'>{data.text}</p>
                            </div>
                            <div className='flex flex-row-reverse items-center gap-2'>
                                <div className='rounded-full'>
                                    <img className='rounded-full w-16 h-16 md:w-12 md:h-12 xsm:w-8 xsm:h-8' src={data.image} alt="" />
                                </div>
                                <div>
                                    <div>
                                        <p className='font-pop font-semibold text-left text-[12px] md:text-[10px] xsm:text-[12px]'>{data.name}</p>
                                    </div>
                                    <div className='flex flex-row-reverse gap-1'>
                                        {[...Array(data.star)].map( () => {
                                            return (<img className='w-3' src='../Icons/hirestar.svg' alt="" />)
                                        })}
                                        {[...Array(data.emptystar)].map( () => {
                                            return (<img className='w-3' src='../Icons/hirestarempty.svg' alt="" />)
                                        })}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    </div>
  )
}

export default HireTestimonial