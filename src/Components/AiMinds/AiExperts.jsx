import React, { useState } from "react";
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function AiExperts() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const experts = [
        {
            text: "I have observed the transformation HopingMinds' programs bring in their students. Their hands-on approach, personalised focus on each student and curriculum alignment with market trends are key strengths. I recommend their programs as a pathway to a better future.",
            author: "Ajitesh Abhishek",
            desig: "Product Manager",
            company: 'Google',
            image: '../img/ajitesh.jpeg',
        },
        {
            text: "Right from the recruitment and interview process, we were able to see a different level of professionalism in Hm's candidates. It is great to see freshers demonstrating corporate maturity.",
            author: "Lakshay S",
            desig: "Co-founder",
            company: 'Astrotalk',
            image: '../img/subhash.jpeg',
        },
        {
            text: "Their program cultivated skilled and motivated coders who now excel in their roles, driving impressive performance. They have been able to quickly adopt their roles and outshine.",
            author: "Sidharth Kakkar",
            desig: "Co-founder",
            company: 'Astrotalk',
            image: '../img/subhash.jpeg',
        },
        {
            text: "HM's students come with a certain level of exposure and practical experience that distinguishes them from the rest. We are able to save critical time as they start delivering early.",
            author: "Tuhina Jain",
            desig: "Co-founder",
            company: 'Astrotalk',
            image: '../img/TuhinaJain.jpeg',
        },
    ];

    return (
        <div  id="experts" className="px-[5%] py-[4%] pl-[24%] bg-[#F1F1F1] flex flex-col gap-4">
            <p className="font-mons font-extrabold text-[30px] text-[#169f63]">What Industry Experts Say?</p>
            <div className="">
                <Splide
                    options={{
                        type: "loop",
                        perPage: 3,
                        pagination: true,
                        perMove: 1,
                        wheel: false,
                        arrows: false,
                        autoplay: true,
                        interval: 10000,
                        speed: 1500,
                        delay: 4,
                        pauseOnHover: false,
                        drag: true,
                        gap:'1rem',
                        

                    }}>
                    {experts.map((expert, index) => (
                        <SplideSlide>
                            <div key={index} className=" bg-[#169f63] flex flex-col items-center py-8 px-10 gap-4 h-[475px]">
                                <div className="w-[33%] rounded-full overflow-hidden">
                                    <img src={expert.image} alt="" />
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <p className="font-mons font-extrabold text-white text-[18px]">{expert.author}</p>
                                    <p className="font-mons">{expert.desig}</p>
                                    <p className="font-mons font-bold">{expert.company}</p>
                                </div>
                                <div className="mt-6 ">
                                    <p className="font-mons text-white text-[14px] text-center">{expert.text}</p>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>

                
            </div>
        </div>
    );
}
