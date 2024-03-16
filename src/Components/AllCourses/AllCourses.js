import React, { useEffect, useState } from "react";
import Img1 from "../../Assests/Images/searchbanner.png";
import Img2 from "../../Assests/Images/creator.png";
import Img3 from "../../Assests/Images/searchuser.png";
import Icon1 from "../../Assests/Icons/twitter.svg";
import Icon2 from "../../Assests/Icons/facebook.svg";
import Icon3 from "../../Assests/Icons/instagram.svg";
import User1 from "../../Assests/Images/user1.png";
import User2 from "../../Assests/Images/user2.png";
import User3 from "../../Assests/Images/user3.png";
import User4 from "../../Assests/Images/user4.png";
import axios from "axios";
import { BASE_URL } from "../../Api/api";
import { Link } from "react-router-dom";

const AllCourses = () => {
    const [allCourses, setAllCourses] = useState([]);
    useEffect(() => {
        fetchCourses();
    }, [])


    const fetchCourses = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/courses`);
            console.log(res);
            setAllCourses(res.data)
        } catch (error) {

        }
    }

    return (
        <>
            <head>
                <title>
                    Courses | HopingMinds
                </title>
            </head>
            {/* Search */}
            <div
                className="flex flex-col gap-5 p-20 items-center"
                style={{ backgroundImage: `url(${Img1})`, backgroundSize: "cover" }}
            >
                <div className="flex flex-row rounded-2xl w-[70%]">
                    <input
                        type="text"
                        placeholder="Search Here..."
                        className="flex-1 outline-none placeholder-gray-500 text-[16px] font-poppins rounded-l-2xl py-3 px-4"
                    />
                    <button className="text-[#ffffff] text-[16px] font-poppins bg-[#1DBF73] rounded-r-2xl py-3 px-10">
                        Search
                    </button>
                </div>
                <div className="grid grid-cols-6 gap-6 w-[70%]">
                    <select className="w-full p-3 px-4 text-[16px] text-[#000000] rounded-lg outline-none">
                        <option value="" disabled selected hidden>
                            Subject
                        </option>
                        <option value="math">Math</option>
                        <option value="science">Science</option>
                        <option value="history">History</option>
                    </select>
                    <select className="w-full p-3 px-4 text-[16px] text-[#000000] rounded-lg outline-none">
                        <option value="" disabled selected hidden>
                            Partner
                        </option>
                        <option value="math">Math</option>
                        <option value="science">Science</option>
                        <option value="history">History</option>
                    </select>
                    <select className="w-full p-3 px-4 text-[16px] text-[#000000] rounded-lg outline-none">
                        <option value="" disabled selected hidden>
                            Program
                        </option>
                        <option value="math">Math</option>
                        <option value="science">Science</option>
                        <option value="history">History</option>
                    </select>
                    <select className="w-full p-3 px-4 text-[16px] text-[#000000] rounded-lg outline-none">
                        <option value="" disabled selected hidden>
                            Language
                        </option>
                        <option value="math">Math</option>
                        <option value="science">Science</option>
                        <option value="history">History</option>
                    </select>
                    <select className="w-full p-3 px-4 text-[16px] text-[#000000] rounded-lg outline-none">
                        <option value="" disabled selected hidden>
                            Abaility
                        </option>
                        <option value="math">Math</option>
                        <option value="science">Science</option>
                        <option value="history">History</option>
                    </select>
                    <select className="w-full p-3 text-[16px] text-[#000000] rounded-lg outline-none">
                        <option value="" disabled selected hidden>
                            Learning Type
                        </option>
                        <option value="math">Math</option>
                        <option value="science">Science</option>
                        <option value="history">History</option>
                    </select>
                </div>
            </div>

            {/* cards */}
            <div className="my-6 mx-[5%] grid grid-cols-4 gap-y-6 gap-x-[20px]">

                {
                    allCourses.map((val, ind) => {
                        return (
                            <Link to={'/detailcourse/' + val.slug} className=" px-4 py-6 mt-2 h-[350px] rounded-xl shadow-xl shadow-[#D9D9D9]transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                                <div className="h-[55%]">
                                    <img className="w-full h-full" src={val?.featured_image} />
                                </div>
                                <div className="space-y-2 mt-2 ">
                                    <div className="flex justify-between mt-6">
                                        <div className="flex space-x-2 items-center">
                                            <img className="w-[16px] h-[16px]" src="../Icons/RCDesign.svg" />
                                            <p className="font-pop text-[12px] font-medium text-[#555555]">{val?.category}</p>
                                        </div>
                                        <div className="flex space-x-2 items-center">
                                            <img className="w-[16px] h-[16px] text-[#555555]" src="../Icons/RCClock.svg" />
                                            <p className="font-pop text-[12px] font-medium text-[#555555]">{val?.duration}</p>
                                        </div>
                                    </div>
                                    <p className="font-pop font-semibold text-[16px] text-[#252641]">{val?.title}</p>
                                    <div className=" flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <img className="w-[32px] h-[32px]" src="../img/RCimg2.png" />
                                            <p className="font-pop font-medium text-[14px]">{val?.instructor.firstName + val?.instructor.lastName}</p>
                                        </div>
                                        <div>
                                            <p className="font-pop font-bold text-[#49BBBD] text-[16px]">₹ {val?.base_price}</p>
                                        </div>
                                    </div>

                                </div>
                            </Link>
                        )
                    })
                }


            </div>

            {/* recommended cards */}

            {/* creater */}
            <div className="flex flex-col gap-14 px-24 py-20">
                <p className="text-[#252641] text-[32px] font-poppins font-semibold pl-4">
                    Classes taught by real creators
                </p>
                <div className="grid grid-cols-3 gap-20">
                    <div className="h-[45vh] flex justify-center items-end relative">
                        <div
                            className="flex flex-col gap-2 h-[70%] justify-end items-center text-center py-6"
                            style={{ boxShadow: "2px 2px 10px 2px rgba(0, 0, 0, 0.25)" }}
                        >
                            <p className="text-[#252641] text-[24px] font-poppins font-semibold">
                                Adam
                            </p>
                            <p className="text-[#696984] text-[16px] font-poppins w-[70%]">
                                Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                                eiusmod tempor
                            </p>
                        </div>
                        <img src={Img2} className="absolute top-0 w-[50%]" />
                    </div>
                    <div className="h-[45vh] flex justify-center items-end relative">
                        <div
                            className="flex flex-col gap-2 h-[70%] justify-end items-center text-center py-6"
                            style={{ boxShadow: "2px 2px 10px 2px rgba(0, 0, 0, 0.25)" }}
                        >
                            <p className="text-[#252641] text-[24px] font-poppins font-semibold">
                                Adam
                            </p>
                            <p className="text-[#696984] text-[16px] font-poppins w-[70%]">
                                Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                                eiusmod tempor
                            </p>
                        </div>
                        <img src={Img2} className="absolute top-0 w-[50%]" />
                    </div>
                    <div className="h-[45vh] flex justify-center items-end relative">
                        <div
                            className="flex flex-col gap-2 h-[70%] justify-end items-center text-center py-6"
                            style={{ boxShadow: "2px 2px 10px 2px rgba(0, 0, 0, 0.25)" }}
                        >
                            <p className="text-[#252641] text-[24px] font-poppins font-semibold">
                                Adam
                            </p>
                            <p className="text-[#696984] text-[16px] font-poppins w-[70%]">
                                Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                                eiusmod tempor
                            </p>
                        </div>
                        <img src={Img2} className="absolute top-0 w-[50%]" />
                    </div>
                    <div className="h-[45vh] flex justify-center items-end relative">
                        <div
                            className="flex flex-col gap-2 h-[70%] justify-end items-center text-center py-6"
                            style={{ boxShadow: "2px 2px 10px 2px rgba(0, 0, 0, 0.25)" }}
                        >
                            <p className="text-[#252641] text-[24px] font-poppins font-semibold">
                                Adam
                            </p>
                            <p className="text-[#696984] text-[16px] font-poppins w-[70%]">
                                Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                                eiusmod tempor
                            </p>
                        </div>
                        <img src={Img2} className="absolute top-0 w-[50%]" />
                    </div>
                    <div className="h-[45vh] flex justify-center items-end relative">
                        <div
                            className="flex flex-col gap-2 h-[70%] justify-end items-center text-center py-6"
                            style={{ boxShadow: "2px 2px 10px 2px rgba(0, 0, 0, 0.25)" }}
                        >
                            <p className="text-[#252641] text-[24px] font-poppins font-semibold">
                                Adam
                            </p>
                            <p className="text-[#696984] text-[16px] font-poppins w-[70%]">
                                Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                                eiusmod tempor
                            </p>
                        </div>
                        <img src={Img2} className="absolute top-0 w-[50%]" />
                    </div>
                    <div className="h-[45vh] flex justify-center items-end relative">
                        <div
                            className="flex flex-col gap-2 h-[70%] justify-end items-center text-center py-6"
                            style={{ boxShadow: "2px 2px 10px 2px rgba(0, 0, 0, 0.25)" }}
                        >
                            <p className="text-[#252641] text-[24px] font-poppins font-semibold">
                                Adam
                            </p>
                            <p className="text-[#696984] text-[16px] font-poppins w-[70%]">
                                Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                                eiusmod tempor
                            </p>
                        </div>
                        <img src={Img2} className="absolute top-0 w-[50%]" />
                    </div>
                </div>
            </div>

            {/* review */}
            <div className="flex flex-col gap-10 bg-[#E2FFF1] px-28 py-16">
                <p className="text-[#000000] text-[30px] font-poppins font-semibold">
                    What our students have to say
                </p>
                <div className="bg-[#ffffff] rounded-xl flex flex-row gap-28 py-10 pt-20 px-14">
                    <div className="flex w-[55%] justify-end">
                        <img src={Img3} className="w-[90%] object-contain" />
                    </div>
                    <div className="flex flex-col gap-4 w-full justify-end pl-4">
                        <p className="text-[#252641] text-[30px] font-poppins font-semibold">
                            Savannah Nguyen
                        </p>
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col gap-10 w-[55%]">
                                <div className="flex flex-col gap-2">
                                    <p className="text-[#252641] text-[24px] font-poppins font-semibold">
                                        tanya.hill@example.com
                                    </p>
                                    <p className="text-[#696984] text-[16px] font-poppins">
                                        Lorem ipsum dolor sit amet, consectetur adipising elit, sed
                                        do eiusmod tempor
                                    </p>
                                    <p className="text-[#696984] text-[16px] font-poppins">
                                        Lorem ipsum dolor sit amet, consectetur adipising elit, sed
                                        do eiusmod tempor
                                    </p>
                                    <p className="text-[#696984] text-[16px] font-poppins">
                                        Lorem ipsum dolor sit amet, consectetur adipising elit, sed
                                        do eiusmod tempor
                                    </p>
                                </div>
                                <div className="flex flex-row gap-6">
                                    <img src={Icon1} className="w-[6%] object-contain" />
                                    <img src={Icon2} className="w-[6%] object-contain" />
                                    <img src={Icon3} className="w-[6%] object-contain" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 justify-between">
                                <img src={User1} className="w-full object-contain" />
                                <img src={User2} className="w-full object-contain" />
                                <img src={User3} className="w-full object-contain" />
                                <img src={User4} className="w-full object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllCourses;
