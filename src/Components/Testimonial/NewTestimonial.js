import React from 'react'
import styles from './NewTestimonial.module.css'
import User1 from "../../Assests/Images/Saurabh Pal-Data Resolve.png";
import User2 from "../../Assests/Images/Sumit.jpg";
import User3 from "../../Assests/Images/Khushpreet Kaur-Delta IT.jpeg";
import User4 from "../../Assests/Images/Amritpal Protiviti GDU 5.7.png";

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
    }

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