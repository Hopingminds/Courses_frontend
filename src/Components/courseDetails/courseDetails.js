import { useEffect, useState } from "react";
import "./courseDetails.css";
import ReactPlayer from "react-player";
import ChatBot from "../chatbot/chatbot";
import { useParams, useSearchParams } from "react-router-dom";
import { BASE_URL } from "../../Api/api";
import { CiSettings } from "react-icons/ci";
import Coursecontents from "../Meeting/Coursecontents";
import { jwtDecode } from "jwt-decode";

export default function CDDetails() {
    const [clicked, setclicked] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');
    const [Data, setData] = useState();
    const [completed_lessons, setcompleted_lessons] = useState([])
    const params = useParams()
    // console.log(params.slug);

    // useEffect(() => {
    //     ClickSection();
    // }, [])
    let completed = [];
    
    useEffect(() => {
        async function Fetchdata() {
            let login=localStorage.getItem('COURSES_USER_TOKEN')
            if(login){
                let token=jwtDecode(login)
                let url = BASE_URL + '/user/' + token.email+'/'+params.slug
                const data = await fetch(url);
                const response = await data.json()
                if (response?.data?.course) {
                    response?.data?.completed_lessons?.forEach((val) => {
                        completed.push(val)
            
                })
            }
                setData(response?.data?.course)
                // console.log(response?.data?.course?.curriculum[0]?.lessons[0]?.video);
                setcompleted_lessons(response?.data?.completed_lessons)
                setVideoUrl(response?.data?.course?.curriculum[0]?.lessons[0]?.video)
            }
           
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
            <div className="CCD-container py-10 px-16">
                <div className="CCD-content flex gap-5">
                    <div className="CCD-content-left 2xl:w-[55%]">
                        <div className="relative h-[100%]">
                            <ReactPlayer
                                height="100%"
                                width="100%"
                                playing={true}
                             controls={true}
                                autoPlay={true}
                                url={BASE_URL+'/videos/'+videoUrl}

                            />
                            <div className="absolute right-0 bottom-10">
                                <ChatBot className="w-fit" />
                            </div>
                        </div>

                    </div>
                    <div className="w-[45%]  h-[80vh] overflow-y-auto">

                        <Coursecontents data={Data?.curriculum} completed_lessons={completed_lessons}/>
                    </div>
                </div>
            </div>
            <div className="h-full w-[72vw] px-16">
                <div className="CCD-Header-container flex justify-evenly">
                    <div className="w-[100%]">

                        <div className=" mt-8">
                            <div className="bg-[#E2FFF1] rounded-2xl py-6 px-12 flex justify-between items-center">
                                <div className="space-y-2">
                                    <p className={`font-pop font-semibold text-[22px] text-[#1DBF73] `}>{Data?.title} </p>
                                    <div className="flex space-x-4">
                                        <p className="font-pop text-[#1DBF73] text-[14px]">{Data?.curriculum[0]?.lessons?.length} Lesson</p>
                                        <p className="font-pop text-[#1DBF73] text-[14px]">6h 30min</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="CCD-Main-container mt-10 px-2 text-justify">
                            <div className="CCD-Main-container-content">
                                <p>
                                    {Data?.overview}
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div >

        </>
    );
}
