import React from 'react'
import styles from './NewTestimonial.module.css'
import User1 from "../../Assests/Images/Saurabh Pal-Data Resolve.png";
import User2 from "../../Assests/Images/Sumit.jpg";
import User3 from "../../Assests/Images/Khushpreet Kaur-Delta IT.jpeg";
import User4 from "../../Assests/Images/Amritpal Protiviti GDU 5.7.png";
import User5 from "../../Assests/Images/Ravinder Singh.jpg";
import User6 from "../../Assests/Images/Rupak Yadav.jpg";
import User7 from "../../Assests/Images/Tanisha Sharma.jpg";
import User8 from "../../Assests/Images/Simran Singh.jpeg";
import User9 from "../../Assests/Images/Poonam Saliya.jpg";
import User10 from "../../Assests/Images/Loveneet Kaur.jpg";
import User11 from "../../Assests/Images/Aditya Sharma.jpg";

const testimonials = [
    {
        name: "SAURABH PAL",
        email: "saurabh@dataresolve.com",
        image: User1,
        description1:
            "Being a recent Computer Science graduate from Jaypee University, MP,I faced job challenges post-college. Enrolling in Hoping Minds for personal development and placement training, I swiftly secured a System Developer role at Data Resolve, grateful for their transformative assistance in my professional journey.",
        description2: "Lorem ipsuut labore et dolore magna aliqua.",
        description3:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        name: "SUMIT VERMA",
        email: "sumit@example.com",
        image: User2,
        description1:
            "HopingMinds played a crucial role in securing my first job, providing unwavering support, essential skills, and invaluable guidance. Their exceptional job placement assistance led me to a role aligned with my aspirations, illuminating my path to success.",
        description2:
            "Ut enim ad min, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        description3: "Ut enim ad minim vequat.",
    },
    {
        name: "KHUSHPREET KAUR",
        email: "khushpreet@example.com",
        image: User3,
        description1:
            "Hoping Minds' dedicated efforts and comprehensive job assistance program transformed me from a hopeful job seeker to a proud employee. Their personalized approach, insightful counseling, and invaluable support led to securing my first job and equipped me for future career success.",
        description2: "Duis aute irure dolor nulla pariatur.",
        description3:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillumulla pariatur.",
    },
    {
        name: "AMRITPAL SINGH",
        email: "jack@example.com",
        image: User4,
        description1:
            "Thrilled to join Protiviti, thanks to Hoping Minds' fantastic support. The journey was challenging, but their assistance and opportunities for growth were invaluable. Grateful to family, teachers, and friends. Excited and determined for this new career chapter!",
        description2: "Exce cupidatat non proident, sunt in culpaborum.",
        description3:
            "Excepteur sint occaect in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        name: "Ravinder Singh ",
        email: "jack@example.com",
        image: User5,
        description1:
            "Six-month internship at Hoping Minds, Mohali, offered dynamic growth environment. Mentorship in Cybersecurity, practical applications honed problem-solving. Emphasis on continuous learning, supportive culture. Grateful for guidance shaping confident professional.",
        description2: "Cyber Security Associate (Cyber Assure)",
        // description3:
        //     "Excepteur sint occaect in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        name: "Rupak Yadav ",
        email: "jack@example.com",
        image: User6,
        description1:
            " Hoping Minds transformed my naive knowledge, providing a roadmap and problem- solving approach. Guidance from teachers and placement coordinators, including mock tests, prepared me for interviews. Grateful for the learning journey.",
        description2: "Placed in Netsmartz as a junior DevOps engineer.",
        // description3:
        //     "Excepteur sint occaect in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        name: "Tanisha Sharma  ",
        email: "jack@example.com",
        image: User7,
        description1:
            "Underwent 6-month industrial training in Data Science at Hoping Minds, leading to a rewarding placement as a software developer at WLTH company. Grateful for their support and guidance, instrumental in realizing full potential.",
            description2: "SD Engineer (WLTH)",
        // description3:
        //     "Excepteur sint occaect in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        name: "Simran Singh ",
        email: "jack@example.com",
        image: User8,
        description1:
            "Joining Hoping Minds for cyber security training was pivotal. The supportive environment, dedicated placement team, and excellent teachers facilitated my journey to a job at Cyber Assure Company. Grateful for the growth, friendships, and opportunities gained.",
            description2: "Cyber Security Associate (Cyber Assure)",
        // description3:
        //     "Excepteur sint occaect in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        name: "Poonam Saliya  ",
        email: "jack@example.com",
        image: User9,
        description1:
            "Placed in Dubai startup, 5 LPA as backend engineer. Grateful to Hoping Minds via college for training, support, and preparation. Their guidance aligned me with industry demands, aiding in the pursuit of my dreams.",
            description2: "Backend Engineer (BellBoy)",
        // description3:
        //     "Excepteur sint occaect in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        name: "LOVNEET KAUR ",
        email: "jack@example.com",
        image: User10,
        description1:
            "Placed at Virtuos Digital via Hoping Minds. Transitioned from tech novice to adept with insights into corporate culture. Grateful for guidance from teachers and placement coordinators, fostering a valuable learning journey.",
            description2: "App.Developer Associate (Virtuas Digital)",
        // description3:
        //     "Excepteur sint occaect in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        name: "Aditya Sharma ",
        email: "jack@example.com",
        image: User11,
        description1:
            "Joined Hoping Minds for semester training in January, swiftly placed at Bellboy as a backend engineer in Python with a 5 LPA package. Improved coding and problem- solving skills significantly with their thorough guidance and training.",
        description2: "Backend Engineer (BellBoy)",
        // description3:
        //     "Excepteur sint occaect in culpa qui officia deserunt mollit anim id est laborum.",
    },

]
const NewTestimonial = () => {



    return (
        <div className={styles.main_container}>
            <h2>What our students have to say</h2>
            <div className={styles.container}>
                <div className={styles.mov_line1}>
                    {testimonials.map((val, ind) => {
                        return (
                            <div className={styles.testimonial} key={ind}>
                                <img src={val?.image} alt='...' />
                                <div className={styles.about}>

                                    <p>{val.description1}</p>
                                    <span>
                                        <img src={val?.image} alt="..." />
                                        <h4>{val?.name}</h4>
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.mov_line2}>
                    {testimonials.map((val, ind) => {
                        return (
                            <div className={styles.testimonial} key={ind}>
                                <img src={val?.image} alt='...' />
                                <div className={styles.about}>

                                    <p>{val.description1}</p>
                                    <span>
                                        <img src={val?.image} alt="..." />
                                        <h4>{val?.name}</h4>
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.mov_line2}></div>
            </div>
        </div>
    )
}

export default NewTestimonial