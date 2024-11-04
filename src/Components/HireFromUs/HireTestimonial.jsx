import { Splide, SplideSlide } from '@splidejs/react-splide'
import React from 'react'
import './hirefromus.css'
import User11 from "../../Assests/Images/Aditya Sharma.jpg";
import User7 from "../../Assests/Images/Tanisha Sharma.jpg";
import User8 from "../../Assests/Images/Simran Singh.jpeg";
import User9 from "../../Assests/Images/Poonam Saliya.jpg";
import User10 from "../../Assests/Images/Loveneet Kaur.jpg";
import User2 from "../../Assests/Images/Sumit.jpg";
import User3 from "../../Assests/Images/Khushpreet Kaur.jpg";
import User4 from "../../Assests/Images/Amritpal Protiviti GDU 5.7.png";
import User5 from "../../Assests/Images/Ravinder Singh.jpg";
import User6 from "../../Assests/Images/Rupak Yadav.jpg";

import UserNew1 from "../../Assests/Images/New_Imgs/Aarzoo- RegisterKaro.jpeg";
import UserNew2 from "../../Assests/Images/New_Imgs/Akshita Thakur-Technossus.jpg";
import UserNew3 from "../../Assests/Images/New_Imgs/Kirandeep Kaur- deFacto.jpeg";
import UserNew4 from "../../Assests/Images/New_Imgs/Manish Bhandari- deFacto.jpeg";
import UserNew5 from "../../Assests/Images/New_Imgs/Ishita- deFacto.jpeg";
import UserNew6 from "../../Assests/Images/New_Imgs/Ankush- deFacto.jpg";
import UserNew7 from "../../Assests/Images/New_Imgs/Gungun-deFacto.jpeg";
import UserNew8 from "../../Assests/Images/New_Imgs/Harveen Kaur- deFacto.jpeg";
import UserNew9 from "../../Assests/Images/New_Imgs/Loveena-deFacto.jpeg";
import UserNew10 from "../../Assests/Images/New_Imgs/Manik Garg-deFacto.png";
import UserNew11 from "../../Assests/Images/New_Imgs/Arjit Dixit- deFacto.jpeg";
import UserNew12 from "../../Assests/Images/New_Imgs/Suraj Kumar Thakur-deFacto.jpeg";


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
            star:3,
            emptystar:0,
            image: User10,
        },
        
        {
            text:'Placed in Dubai startup, 5 LPA as backend engineer. Grateful to Hoping Minds via college for training, support, and preparation. Their guidance aligned me with industry demands, aiding in the pursuit of my dreams.',
            name:'Poonam Saliya ',
            star:4,
            emptystar:0,
            image: User9,
        },
        {
            text:'Joining Hoping Minds for cyber security training was pivotal. The supportive environment, dedicated placement team, and excellent teachers facilitated my journey to a job at Cyber Assure Company. Grateful for the growth, friendships, and opportunities gained.',
            name:'Simran Singh',
            star:3,
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
            star:4,
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
            star:4,
            emptystar:0,
            image: User3,
        },
        {
            text:'HopingMinds played a crucial role in securing my first job, providing unwavering support, essential skills, and invaluable guidance. Their exceptional job placement assistance led me to a role aligned with my aspirations, illuminating my path to success.',
            name:'SUMIT VERMA',
            star:4,
            emptystar:0,
            image: User2,
        },
        // {
        //     text:'Being a recent Computer Science graduate from Jaypee University, MP,I faced job challenges post-college. Enrolling in Hoping Minds for personal development and placement training, I swiftly secured a System Developer role at Data Resolve, grateful for their transformative assistance in my professional journey.',
        //     name:'SAURABH PAL',
        //     star:5,
        //     emptystar:0,
        //     image: User1,
        // },
      
    ]

    const tempdata2 = [
        {
            text:"I'm incredibly grateful to the team at Hoping Minds for their unwavering support and dedication in helping me secure a placement. Their expertise, guidance, and encouragement were instrumental in navigating through the challenges and uncertainties.'",
            name:'Aarzoo',
            star:5,
            emptystar:0,
            image: UserNew1,
        },
        {
            text:'Hi My name is  Akshita Thakur .I am a full stack developer Trainee at Hoping Minds, I have very good  experience at Hoping Minds . The instructors here are very knowledgeable and supporting. The hands-on approach helps me to  gain practical skills that are directly applicable to the industry.',
            name:'Akshita Thakur',
            star:4,
            emptystar:0,
            image: UserNew2,
        },
        {
            text:" It was a great experience learning at Hoping minds . I started my journey at Hoping minds as Data science intern . The trainers and mentors at Hoping minds helped me enhance my technical as well as interpersonal skills .",
            name:'Kirandeep kaur',
            star:5,
            emptystar:0,
            image: UserNew3,
        },
        {
            text:'My six-month training at Hoping Minds has been exceptional. The curriculum is comprehensive and the instructors are knowledgeable and supportive. The hands-on projects have enhanced my practical skills, and the career workshops have boosted my confidence in job hunting. ',
            name:'Manish bhandari',
            star:5,
            emptystar:0,
            image: UserNew4,
        },
        {
            text:'I had a great experience here over in hoping minds. The trainer assigned to us for our course was throughly well versed with the field as he was a senior developer. He made sure we all practice what is being taught. Placement committee tried their best to grab as much opportunities they could',
            name:'Ishita',
            star:4,
            emptystar:0,
            image: UserNew5,
        },
        {
            text:"I had a fantastic experience as a Data Science intern at Hoping Minds. The instructors were knowledgeable and supportive, making complex topics easy to understand. The hands-on projects were invaluable, giving me real-world experience. Additionally, they actively call companies to the institute for placements, providing excellent support in helping students get placed in the industry. ",
            name:'Ankush',
            star:5,
            emptystar:0,
            image: UserNew6,
        },
        {
            text:'Six-month internship at Hoping Minds, Mohali, offered dynamic growth environment. Mentorship in Cybersecurity, practical applications honed problem-solving. Emphasis on continuous learning, supportive culture. Grateful for guidance shaping confident professional. ',
            name:'Gungun',
            star:5,
            emptystar:0,
            image: UserNew7,
        },
        {
            text:"My name is Harveen Kaur, a BE Computer Science final-year student from Chitkara University. Hoping Minds full stack training program is well-regarded for its comprehensive curriculum and strong industry connections. Training helped me to gain technical skills as well as the soft skills.",
            name:'Harveen Kaur',
            star:5,
            emptystar:0,
            image: UserNew8,
        },
        {
            text:"It was an amazing experience learning at Hoping minds . I started my journey at Hoping minds as Full stack intern . The trainers and mentors at Hoping minds helped me enhance my technical as well as interpersonal skills . ",
            name:'Loveena',
            star:5,
            emptystar:0,
            image: UserNew9,
        },
        {
            text:"Hoping Minds 'comprehensive training approach is focused on technical skills, aptitude development, and personality enhancement, making it a truly holistic experience. The skilled trainers provided engaging sessions and personalized attention, ensuring I grasped concepts thoroughly. ",
            name:'Manik Garg',
            star:5,
            emptystar:0,
            image: UserNew10,
        },
        {
            text:"It was my immense luck and fortune to be the part of Hoping Minds where I can grow. The entire faculty and mentors leaves no stone unturned to shape one's future. My 6 months at Hoping Minds have been a wonderful experience of learning with prolific exposure to outside. Huge respect, love and devotion for entire faculty members and teachers.",
            name:'Arjit Dixit',
            star:5,
            emptystar:0,
            image: UserNew11,
        },
        {
            text:'placement-oriented Cloud Computing Course, which I joined  in  December 2023, was pivotal in landing my dream role as a Software Developer at De Facto Infotech. The expert-led curriculum, hands-on projects, and personalized career support equipped me with essential skills and confidence. Their commitment to student success, including resume building and interview preparation, made a significant difference. ',
            name:'Suraj Kumar Thakur',
            star:5,
            emptystar:0,
            image: UserNew12,
        },
       
    ]

  return (
    <div>
        <div className='py-[4%] text-white font-pop font-semibold text-[40px] text-center md:text-[20px] xsm:text-[18px] '>
            <p>If They Found a Way,<span className='text-[#1DBF73]'>So Will You!</span> </p>
         
        </div>
        {/* splide */}
        <div className='flex flex-col gap-8'>
            {/* row1 */}
            <div className=' '>
                <Splide
                    options={{
                        type: "loop",
                        perPage: window.innerWidth <= 480 ? 1.5 : (window.innerWidth > 480 && window.innerWidth <721) ? 2 : (window.innerWidth >= 721 && window.innerWidth <= 1024) ? 3 : (window.innerWidth >= 1025 && window.innerWidth <= 1599) ? 4 : 5,
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
                        perPage: window.innerWidth <= 480 ? 1.5 : (window.innerWidth > 480 && window.innerWidth <721) ? 2 : (window.innerWidth >= 721 && window.innerWidth <= 1024) ? 3 : (window.innerWidth >= 1025 && window.innerWidth <= 1599) ? 4 : 5,
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
                    {tempdata2.slice(0).reverse().map((data,index)=>(
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