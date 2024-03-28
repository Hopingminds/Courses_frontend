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
    const [Data, setData] = useState(null);
    const [completed_lessons, setcompleted_lessons] = useState([])
    const [count, setcount] = useState(0)
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [ALLCHAPTER, setALLCHAPTER] = useState([])
const [courseId, setcourseId] = useState()

    const [url, seturl] = useState()
    const params = useParams()
    // console.log(params.slug);

    // useEffect(() => {
    //     ClickSection();
    // }, [])
    let completed = [];
    let allchapters=[]
  
    useEffect(() => {
        async function Fetchdata() {
            let login=localStorage.getItem('COURSES_USER_TOKEN')
            if(login){
                let token=jwtDecode(login)
                let url1 = BASE_URL + '/user/' + token.email+'/'+params.slug
             
                const data = await fetch(url1);
                const response = await data.json()
                // console.log(response);
                if (response?.data?.course) {
                    setcourseId(response?.data?.course?._id)
                    response?.data?.completed_lessons?.forEach((val) => {
                        completed.push(val)
            
                })
            }
                
                if (response?.data?.course) {
                    response?.data?.course?.curriculum?.forEach((val) => {
                        val?.lessons?.map((it)=>{
                            // console.log("it",val);
                            allchapters.push({video:BASE_URL+'/videos/'+it?.video,_id:it?._id})
                        })
            
                })
            }
                // console.log("all",allchapters[0]?.video);
                setALLCHAPTER(allchapters)
                seturl(allchapters[0]?.video)
                setData(response?.data?.course)
                setcompleted_lessons(response?.data?.completed_lessons)
                setVideoUrl(response?.data?.course?.curriculum[0]?.lessons[0]?.video)
                // console.log("data", data && (BASE_URL+'/videos/'+ data[0]?.lessons[0]?.video));

            }
           
        }
        Fetchdata()
    }, [])
    const handleVideoEnded = async() => {
        setcount(count+1);
        seturl(ALLCHAPTER[count+1]?.video)
        completed_lessons.push([...ALLCHAPTER],ALLCHAPTER[count+1]?._id)
        
        try {
            let login=localStorage.getItem('COURSES_USER_TOKEN')
            if(login){
                let url=BASE_URL+'/lessoncompleted'
                let bodydata={courseId,lessonId:ALLCHAPTER[count+1]?._id}
                const data1=await fetch(url,{
                            method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization':'Bearer '+login
                    },
                    body:JSON.stringify(bodydata)
                })
                const response=await data1.json()
                console.log(response);
            }
            
        } catch (error) {
            console.log(error);
        }
      };
      
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
    const handleDuration = (duration) => {
        // setDuration(duration);
        console.log(duration);
      };
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
                                url={url}
                                onDuration={handleDuration}
                                onEnded={handleVideoEnded}
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
