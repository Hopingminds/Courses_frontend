import { useEffect, useRef, useState } from "react";
import "./courseDetails.css";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../Api/api";
import Coursecontents from "../Meeting/Coursecontents";
import { jwtDecode } from "jwt-decode";
import { ReactComponent as Menu } from "../../Assests/Icons/menu.svg";
import CourseNavigation from "../CourseNavigation/CourseNavigation";
import NewSideBar from "./NewSideBar.jsx";
import { FiMenu } from "react-icons/fi";


export default function CDDetails() {
  const [clicked, setclicked] = useState(false);
  const [menu, setMenu] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [Data, setData] = useState(null);
  const [completed_lessons, setcompleted_lessons] = useState([]);
  const [count, setcount] = useState(0);
  const [ALLCHAPTER, setALLCHAPTER] = useState([]);
  const [courseId, setcourseId] = useState();
  const [courseAssignment, setCourseAssignment] = useState([]);
  const [courseLessons, setCourseLessons] = useState([]);
  const [showSmallvideo, setshowSmallvideo] = useState(false)
  const [smallVideourl, setsmallVideourl] = useState('')
  const [pdfurl, setpdfurl] = useState('')
  const [url, seturl] = useState("");
  const [starttime, setstarttime] = useState()
  const [endtime, setendtime] = useState()
  const [showLive, setshowLive] = useState(false)
  const [showend, setshowend] = useState(false)
  const params = useParams();
  let completed = [];
  let allchapters = [];

  useEffect(() => {
    async function Fetchdata() {
      let login = localStorage.getItem("COURSES_USER_TOKEN");
      if (login) {
        let token = jwtDecode(login);
        let url1 = BASE_URL + "/user/" + token.email + "/" + params.slug;

        const data = await fetch(url1);
        const response = await data.json();
        // console.log("Course particular", response);
        setCourseLessons(response?.data?.completed_lessons);
        setCourseAssignment(response?.data?.completed_assignments);
        if (response?.data?.course) {
          setcourseId(response?.data?.course?._id);
          if (!response?.data?.completed_lessons?.length) {
            completed.push(
              response?.data?.course?.curriculum[0]?.lessons[0]?._id
            );
          } else {
            response?.data?.completed_lessons?.forEach((val) => {
              completed.push(val);
            });
          }
        }
        // console.log(completed);
        if (response?.data?.course) {
          response?.data?.course?.curriculum?.forEach((val) => {
            val?.lessons?.map((it) => {
              // console.log("it",val);
                allchapters.push({
                  video: it?.video,
                  _id: it?._id,
                  isLiveClass:it?.isLiveClass,
                  liveClass:it?.liveClass
                });
              
            });
          });
        }
        // console.log("all", allchapters[0]?.video);
        // allchapters=[...new Set(allchapters)]
        // console.log(allchapters);
        setALLCHAPTER(allchapters);
        setData(response?.data?.course);
        completed = [...new Set(completed)];
        let videoindex = completed.length;
        seturl(allchapters[videoindex - 1]?.video);
        setcompleted_lessons(completed);
        setVideoUrl(response?.data?.course?.curriculum[0]?.lessons[0]?.video);
        // console.log("data", data && (BASE_URL+'/videos/'+ data[0]?.lessons[0]?.video));
      }
    }
    Fetchdata();
  }, []);
  const handleKeyDown = (e) => {
    console.log(e.key);
    // if (e.metaKey) {
    //   alert("Screenshot is not allowed")
    //   e.preventDefault()
    //   return false;
    //   // e.preventDefault(); // Prevent default behavior for Win Key + PrtSc
    // }
  };

  // useEffect hook to add event listeners when the component mounts
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    // document.addEventListener('keyup', (e)=>{
    //   navigator.clipboard.writeText('')
    //   alert('Screenshot is not allowed')
    // });
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [])


  function handleActiveVideo(url) {
    // console.log(url);
    setshowSmallvideo(false)
    seturl(url);
  }

  // console.log(allchapters);
  const handleVideoEnded = async () => {
    // console.log(count + 1);
    setshowSmallvideo(false)
    seturl(ALLCHAPTER[count + 1]?.video);
    let temp = completed_lessons;
    temp.push(ALLCHAPTER[count + 1]?._id);
    // console.log(count);v
    setcompleted_lessons(temp);

    try {
      let login = localStorage.getItem("COURSES_USER_TOKEN");
      if (login) {
        let url = BASE_URL + "/lessoncompleted";
        let bodydata = { courseId, lessonId: ALLCHAPTER[count]?._id };
        const data1 = await fetch(url, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + login,
          },
          body: JSON.stringify(bodydata),
        });
        const response = await data1.json();

        setcount(count + 1);

        // console.log(response);
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

  const toggleMenu = () => {
    // if (window.innerWidth <= 480) {
    setMenu((prevClicked) => !prevClicked);
    // console.log("Menu toggled");
    // }
  };
  const countLessons = () => {
    let temp = 0;
    Data?.curriculum?.forEach((val) => {
      temp += val?.lessons?.length;
    });
    return temp;
  };

  let totalLessons = countLessons();
  // console.log("Count",totalLessons);
  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent default context menu behavior
  };

  const handleToggleNotes = async (pdf, videourl) => {
    // console.log(pdfurl);
    setshowSmallvideo(true)
    // seturl(pdfurl)
    setpdfurl(pdf)
    setsmallVideourl(videourl)
  };

  function handleProject(pdf){
    setpdfurl(pdf)
    setshowSmallvideo(true)
  }

  function handleNext() {
    setshowSmallvideo(false)
    if (count == completed_lessons.length) {
      handleVideoEnded()
    }
    else {
      seturl(ALLCHAPTER[count + 1]?.video);
    }

  }
  function formatDate(dateString) {
    const dateObj = new Date(dateString);
    
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();

    const monthNames = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[dateObj.getMonth()];

    let hours = dateObj.getHours();
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');

    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    
    const time = `${hours}.${minutes}${ampm}`;

    return `${day} ${month} ${year} ${time}`;
}

// Example usage

// console.log(formattedDate); // Output: "08 July 2024 2.30pm"

  useEffect(() => {
    if(ALLCHAPTER[count]?.isLiveClass){
      let today=new Date()
      let startdate=new Date(ALLCHAPTER[count]?.liveClass.startDate);
      let enddate=new Date(ALLCHAPTER[count]?.liveClass.endDate);
      console.log(startdate);
      if(startdate>today){
        setshowLive(true)
        // console.log("yess");
        let tmp=formatDate(startdate)
        setstarttime(tmp)
       
      }
      else if(enddate>today){
        setshowLive(false)
        setshowend(true)
        let tmp=formatDate(enddate)
        setendtime(tmp)
      }
      else{
        setshowLive(false)
        setshowend(false)
        setcount((prev)=>prev+1)
        handleVideoEnded()
      }
      // if()
      
    }
  }, [count])
  return (
    <>
      <div className="flex justify-between gap-5">
        {/* side menu */}
        <div className='w-[20%] sticky top-20 h-max xsm:hidden'>
          {/* <SideBar /> */}
          <NewSideBar />
        </div>

        <div className="w-[85%] xsm:w-full ">
          <div className="CCD-container pb-10 pr-16  xsm:h-[42vh] md:pr-[5%] md:h-[50vh] xsm:px-4">
            {showSmallvideo && <div className="fixed bottom-0 left-0 z-20 rounded-xl">
              <ReactPlayer
                onContextMenu={handleContextMenu}
                height="200px"
                width="250px"
                borderRadius="14px"
                className="shadow-2xl rounded-xl"
                style={{ borderRadius: "14px !important" }}
                playing={true}
                controls={true}
                autoPlay={true}
                url={smallVideourl}
                onDuration={handleDuration}
                onEnded={handleVideoEnded}
                config={{
                  file: {
                    attributes: {
                      controlsList: "nodownload",
                    },
                  },
                }}

              />
            </div>}
            {
              window.innerWidth <= 480 ? <FiMenu className="absolute top-14 right-1 " onClick={() => setMenu(true)} size={24} /> : <></>
            }
            <div className="flex gap-20 xsm:gap-0">
              <div className="CCD-content flex gap-5 pt-10">
                <div className="CCD-content-left 2xl:w-[55%] xsm:w-[100%]">
                  <div className="relative h-[100%] grid place-items-center xsm:h-[35vh] md:h-[40vh]" style={{ borderRadius: "14px !important" }}>
                    {showSmallvideo || url?.toString().endsWith("pdf") ? (
                    //  <div className="relative">
                         <iframe  src={pdfurl} width="100%" height="100%" />
                        //  <button className="absolute top-2 right-3 bg-[#1DBF73] text-white rounded px-3 py-1">Next</button>
                    //  </div>
                    ) :
                    showLive ? <div className="flex justify-center items-center">Live Class Will Start On {starttime}</div>:
                    showend ? <div className="flex justify-center items-center">Live Class Will End On {endtime}</div>
                    : url?.toString().endsWith("mp3") ? (
                      <iframe src={url} width="100%" height="100%" />
                    ) : (

                      <ReactPlayer
                        onContextMenu={handleContextMenu}
                        height="auto"
                        width="100%"
                        borderRadius="14px"
                        className="shadow-2xl rounded-[18px]"
                        style={{ borderRadius: "14px !important" }}
                        playing={true}
                        controls={true}
                        autoPlay={true}
                        url={url}
                        onDuration={handleDuration}
                        onEnded={handleVideoEnded}
                        config={{
                          file: {
                            attributes: {
                              controlsList: "nodownload",
                            },
                          },
                        }}

                      />
                    )}

                  </div>
                </div>

                {window.innerWidth <= 480 ? (
                  menu ? (
                    <div className="w-[45%] h-[80vh] overflow-y-auto ">
                      <Coursecontents
                        handleActiveVideo={handleActiveVideo}
                        data={Data?.curriculum}
                        courseId={courseId}
                        completed_lessons={completed_lessons}
                        setMenu={setMenu}
                        handleProject={handleProject}

                      />
                    </div>
                  ) : (
                    <></>
                  )
                ) : (
                  <div className="w-[45%]  h-[80vh] overflow-y-auto customScroll md:h-[40vh]">
                    <Coursecontents
                      handleActiveVideo={handleActiveVideo}
                      data={Data?.curriculum}
                      courseId={courseId}
                      completed_lessons={completed_lessons}
                      setMenu={setMenu}
                      handleToggleNotes={handleToggleNotes}
                      ALLCHAPTER={ALLCHAPTER}
                      count={count}
                      handleProject={handleProject}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div id="ScrollToTop" className=" w-[65%] pb-10 xsm:px-5 xsm:w-full md:mb-10 md:px-[5%]">
            <div className="CCD-Header-container flex justify-evenly">
              <div className="w-[100%] xsm:mb-10">
                <div className=" mt-8 xsm:mt-0 md:mt-0">
                  <div className="bg-[#1DBF73] rounded-2xl py-6 px-12 flex justify-between items-center xsm:py-3 xsm:px-5 xsm:rounded-md md:px-8 md:py-4">
                    <div className="space-y-2 xsm:space-y-0 md:space-y-1">
                      <p
                        className={`font-pop font-semibold text-[22px] text-[#FFFFFF] xsm:text-[10px] md:text-[18px]`}
                      >
                        {Data?.title}{" "}
                      </p>
                      <div className="flex space-x-4">
                        <p className="font-pop text-[#FFFFFF] text-[14px] xsm:text-[8px] md:text-[12px]">
                          {totalLessons} Lesson
                        </p>
                        <p className="font-pop text-[#FFFFFF] text-[14px] xsm:text-[8px] md:text-[12px]">
                          6h 30min
                        </p>
                      </div>
                    </div>
                    {window.innerWidth <= 480 && (
                      <div className="menu-icon" onClick={toggleMenu}>
                        <Menu />
                      </div>
                    )}
                  </div>
                </div>

                {/* <div className="CCD-Main-container mt-10 px-2 text-justify xsm:mt-0 xsm:py-3 xsm:px-1 md:mt-4">
                  <div className="CCD-Main-container-content">
                    <p className="xsm:text-[8px] md:text-[14px]">
                      {Data?.overview}
                    </p>
                  </div>
                </div> */}
                <CourseNavigation
                  courseLessons={courseLessons}
                  courseAssignment={courseAssignment}
                  totalLessons={totalLessons}
                  liveclass={Data?.liveClasses}
                  slug={params?.slug}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
