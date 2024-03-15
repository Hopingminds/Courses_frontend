import { useEffect, useState } from "react";
import "./courseDetails.css";
import ReactPlayer from "react-player";
import ChatBot from "../chatbot/chatbot";
import { useParams, useSearchParams } from "react-router-dom";
import { BASE_URL } from "../../Api/api";
import { CiSettings } from "react-icons/ci";

export default function CDDetails() {
    const [clicked, setclicked] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');
    const [Data, setData] = useState();
    const params = useParams()
    // console.log(params.slug);

    // useEffect(() => {
    //     ClickSection();
    // }, [])

    useEffect(() => {
        async function Fetchdata() {
            let url = BASE_URL + '/course/' + params.slug
            const data = await fetch(url);
            const response = await data.json()
            setData(response.course)
            // console.log(response.course.curriculum);
            setVideoUrl(response?.course?.curriculum[0]?.lessons[0]?.video)
        }
        Fetchdata()
    }, [])

    function ClickSection(id) {
        if (!clicked) {
            setclicked(true);
            let inner = document.getElementById(id);
            // console.log(inner);
            inner.style.display = "none";
        } else {
            setclicked(false);
            let inner = document.getElementById(id);

            // console.log(inner);
            inner.style.display = "block";
        }
    }

    return (
        <>
            <div className="CCD-container">
                <div className="CCD-content">
                    <div className="CCD-content-left px-12 pb-6 2xl:w-[100%]">
                        <div className="relative h-[100%]">
                            <ReactPlayer
                                height="100%"
                                width="100%"
                                playing={true}
                                autoPlay={false}
                                url={videoUrl}

                            />
                            <div className="absolute right-0 bottom-10">
                                <ChatBot className="w-[100%]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-full">
                <div className="CCD-Header-container flex justify-evenly">
                    <div className="w-full">

                        <div className=" w-[90%] ml-[5%] mt-8">
                            <div className="bg-[#E2FFF1] rounded-2xl py-6 px-12 flex justify-between items-center">
                                <div className="space-y-2">
                                    <p className="font-pop font-semibold text-[22px] text-[#1DBF73]">{Data?.title} </p>
                                    <div className="flex space-x-4">
                                        <p className="font-pop text-[#1DBF73] text-[14px]">{Data?.curriculum[0]?.lessons?.length} Lesson</p>
                                        <p className="font-pop text-[#1DBF73] text-[14px]">6h 30min</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="CCD-Main-container">
                            <div className="CCD-Main-container-content">
                                <p>
                                    {Data?.overview}
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="w-[59%] h-[500px] overflow-y-auto">
                        <div className="CCDetails-Header-content-right">
                            <div className="CCDetails-Header-content-right-list">
                                <div className="CCDetails-Header-content-right-list-heading">
                                    <p>Course Content</p>
                                </div>

                                {
                                    Data?.curriculum?.map((val, ind) => {
                                        return (
                                            <div key={ind}>
                                                <div
                                                    onClick={() => ClickSection(ind + 1)}
                                                    className="CCDetails-Header-content-right-list-course"
                                                >
                                                    <div className="CCDetails-Header-content-right-list-course-left">
                                                        <div className="CCDetails-Header-content-right-list-course-left-row1">
                                                            <p>Section {ind + 1} : {val.chapter_name}</p>
                                                        </div>
                                                        <div className="CCDetails-Header-content-right-list-course-left-row2">
                                                            <p>{val?.lessons?.length} Lessons</p>
                                                            <p>45 Mins</p>
                                                        </div>
                                                    </div>
                                                    <div className="CCDetails-Header-content-right-list-course-right">
                                                        <button>
                                                            <img
                                                                src="../Icons/dropdownarrow.svg"
                                                                alt="dropdownarrow"
                                                            ></img>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="outer-wrapper" id={ind + 1}>
                                                    {val?.lessons.map((chapter, index) => {
                                                        return (
                                                            <div className="CCDetails-Header-content-right-list-course-list" key={index}>
                                                                <div className="CCDetails-Header-content-right-list-course-list-video1" onClick={() => setVideoUrl(chapter?.video)}>
                                                                    <div className="CCDetails-Header-content-right-list-course-list-video1-row1">
                                                                        <input value="asnisaf" type="checkbox" />
                                                                        <label>
                                                                            1. {chapter?.lesson_name}
                                                                        </label>
                                                                    </div>
                                                                    <div className="CCDetails-Header-content-right-list-course-list-video1-row2">
                                                                        <img src="../Icons/youtube.svg" />
                                                                        <p>5 min</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        )
                                    })
                                }




                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
