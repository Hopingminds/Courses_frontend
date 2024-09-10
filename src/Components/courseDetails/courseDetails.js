import { useEffect, useRef, useState } from "react";
import "./courseDetails.css";
import ReactPlayer from "react-player";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../Api/api";
import Coursecontents from "../Meeting/Coursecontents";
import { jwtDecode } from "jwt-decode";
import { ReactComponent as Menu } from "../../Assests/Icons/menu.svg";
import CourseNavigation from "../CourseNavigation/CourseNavigation";
import NewSideBar from "./NewSideBar.jsx";
import { FiMenu } from "react-icons/fi";
import DrawerNavbar from "./DrawerNavbar.jsx";
import { FaLastfmSquare, FaPlay } from "react-icons/fa";

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
  const [showSmallvideo, setshowSmallvideo] = useState(false);
  const [smallVideourl, setsmallVideourl] = useState("");
  const [pdfurl, setpdfurl] = useState("");
  const [url, seturl] = useState("");
  const [starttime, setstarttime] = useState();
  const [endtime, setendtime] = useState();
  const [showLive, setshowLive] = useState(false);
  const [showend, setshowend] = useState(false);
  const [meetinglink, setmeetinglink] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeindex, setactiveindex] = useState("");
  const [idwise, setidwise] = useState({});
  const [expired, setexpired] = useState();
  const [sk, setsk] = useState("");
  const [dur, setdur] = useState();
  const playerRef = useRef(null);
  const playerRef2 = useRef(null);
  const [currentDuration, setCurrentDuration] = useState(0);
  const [playing, setPlaying] = useState(true);
  const params = useParams();
  let totalduration = 0;
  let finaldur = 0;
  let completed = [];
  let allchapters = [];
  let temp = true;
  const navigate = useNavigate();
  const [showBanner, setShowBanner] = useState(true);
  const [imageBanner, setImageBanner] = useState();
  const [currentid, setcurrentid] = useState()
 const [activesmallvideo, setactivesmallvideo] = useState(true)
 const [activelargevideo, setactivelargevideo] = useState(true)
  useEffect(() => {
    async function Fetchdata() {
      temp = false;
      let login = localStorage.getItem("COURSES_USER_TOKEN");
      if (login) {
        let token = jwtDecode(login);
        let url1 = BASE_URL + "/user/" + token.email + "/" + params.slug;

        const data = await fetch(url1);
        const response = await data.json();
        // console.log("Course particular", response);
        setImageBanner(response?.data?.course?.featured_image);
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
          let tempids = {};
          let ind = 0;
          response?.data?.course?.curriculum?.forEach((val) => {
            val?.lessons?.map((it) => {
              // console.log("it",val);

              totalduration = totalduration + parseInt(it?.duration);
              // console.log(totalduration);
              allchapters.push({
                video: it?.video,
                _id: it?._id,
                isLiveClass: it?.isLiveClass,
                liveClass: it?.liveClass,
                lesson_name: it?.lesson_name,
              });
              tempids[it?._id] = ind++;
            });
            val?.project?.map((it) => {
              totalduration = totalduration + parseInt(it?.duration);
              allchapters.push({
                video: "",
                _id: it?._id,
                isLiveClass: true,
                liveClass: {
                  startDate: it?.startDate,
                  endDate: it?.endDate,
                  meetingLink: it?.projectInfoPdf,
                  streamKey: it?.streamKey || "",
                },
                lesson_name: it?.title,
              });
              tempids[it?._id] = ind++;
            });
          });
          setidwise(tempids);
        }
        // console.log("all", allchapters[0]?.video);
        // allchapters=[...new Set(allchapters)]
        // console.log(allchapters);
        // finaldur=Timeconverter(totalduration);
        setdur(totalduration);
        setALLCHAPTER(allchapters);
        setData(response?.data?.course);
        completed = [...new Set(completed)];
        let videoindex = completed.length;

        // console.log(
        //   "length",
        //   allchapters,
        //   response?.data?.completed_lessons?.length
        // );
        // console.log("data",allchapters,completed);
        if (
          allchapters?.length === response?.data?.completed_lessons?.length ||
          response?.data?.completed_lessons?.length == 0
        ) {
          if (allchapters[0]?.isLiveClass) {
            // setsk()
            localStorage.setItem("sk", allchapters[0]?.liveClass?.streamKey);
            let today = new Date();
            let startdate = new Date(allchapters[0]?.liveClass.startDate);
            let enddate = new Date(allchapters[0]?.liveClass.endDate);

            // console.log(startdate);
            if (startdate > today) {
              setshowLive(true);
              // console.log("yess");
              let tmp = formatDate(startdate);
              setstarttime(tmp);
            } else if (enddate > today) {
              // console.log("i m inside");

              setshowLive(false);
              setshowend(true);
              let tmp = formatDate(enddate);
              setendtime(tmp);
            }
            // if()
          }
          seturl(allchapters[0]?.video);
          setactiveindex(allchapters[0]?.lesson_name);
          setcount(0);
        } else {
          // console.log("hi");
          seturl(allchapters[videoindex]?.video);
          setcount(videoindex);
          setactiveindex(allchapters[videoindex]?.lesson_name);
          completed.push(allchapters[videoindex]?._id);
        }
        // console.log(completed);
        setcompleted_lessons(completed);
        setVideoUrl(response?.data?.course?.curriculum[0]?.lessons[0]?.video);
        // console.log("data", data && (BASE_URL+'/videos/'+ data[0]?.lessons[0]?.video));
      }
    }
    if (temp) {
      Fetchdata();
    }
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
  const countLessons = () => {
    let temp = 0;
    Data?.curriculum?.forEach((val) => {
      temp += val?.lessons?.length;
      temp += val?.project?.length;
    });
    return temp;
  };

  let totalLessons = countLessons();
  // useEffect hook to add event listeners when the component mounts
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    // document.addEventListener('keyup', (e)=>{
    //   navigator.clipboard.writeText('')
    //   alert('Screenshot is not allowed')
    // });
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function handleActiveVideo(url, title, id) {
    setactivesmallvideo(true)
    
      if(playerRef2.current){
        const currenttime=playerRef2.current.getCurrentTime();
        // console.log("currenttime");
        
        // playerRef.current.seekTo(currenttime, 'seconds');

       localStorage.setItem(id,currenttime)

      }
    let getindex = idwise[id];
    setcount(getindex);
    setactiveindex(title);
    setshowLive(false);
    setshowend(false);
    setexpired(false);
    // console.log(url);
    setshowSmallvideo(false);
    seturl(url);
  }

  // console.log(allchapters);
  const handleVideoEnded = async () => {
    // console.log(count + 1);
    // console.log(totalLessons,ALLCHAPTER.length);

    setactiveindex(ALLCHAPTER[(count + 1) % ALLCHAPTER.length]?.lesson_name);
    setshowSmallvideo(false);
    seturl(ALLCHAPTER[(count + 1) % ALLCHAPTER.length]?.video);
    if (
      count + 1 >= completed_lessons.length &&
      ALLCHAPTER?.length >= completed_lessons.length
    ) {
      if (ALLCHAPTER?.length == completed_lessons.length) {
        let temp = completed_lessons;
        temp.push(ALLCHAPTER[count + 1]?._id);
        // console.log(count);v
        setcompleted_lessons(temp);
      }

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

          // console.log(response);
        }
      } catch (error) {
        console.log(error);
      }
      setcount((prev) => prev + 1);
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

  // console.log("Count",totalLessons);
  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent default context menu behavior
  };

  const handleToggleNotes = async (pdf, videourl,id) => {
    setactivelargevideo(true)
    // console.log(id);
    
    setcurrentid(id)

    try {
      if(playerRef.current){
       const currenttime=playerRef.current.getCurrentTime();
      //  setCurrentDuration(currenttime)
       localStorage.setItem(id,currenttime)
        setPlaying(true)
      } 
      // Show the small video player
      setshowSmallvideo(true);
  
      // Set the URLs for PDF and video
      setpdfurl(pdf);
      setsmallVideourl(videourl);
  
  // console.log(playerRef.current);
  
    } catch (error) {
      console.error("An error occurred while toggling notes:", error);
    }
   };

  function handleProject(project) {
    setactiveindex(project?.title);
    let today = new Date();
    let startdate = new Date(project?.startDate);
    let enddate = new Date(project?.endDate);
    setmeetinglink(project?.projectInfoPdf);
    // console.log(startdate);
    if (startdate > today) {
      setshowLive(true);
      // console.log("yess");
      let tmp = formatDate(startdate);
      setstarttime(tmp);
    } else if (enddate > today) {
      setshowLive(false);
      setshowend(true);
      let tmp = formatDate(enddate);
      setendtime(tmp);
    } else {
      setshowLive(false);
      setexpired(true);
      setshowend(false);
      // setcount((prev) => prev + 1);
      // handleVideoEnded();
    }
  }
  
  const handleSmallVideoReady = () => {
    if (playerRef2.current && activesmallvideo && localStorage.getItem(currentid)) {
      setactivesmallvideo(false)
      playerRef2.current.seekTo(localStorage.getItem(currentid), 'seconds');
      // playerRef2.current.play();
    } else {
      console.error("Player references are not available.");
    }
  };
  const handlelargeVideoReady = () => {
if (activelargevideo && localStorage.getItem(currentid)) {
    //  setactivelargevideo(false)
      playerRef.current.seekTo(localStorage.getItem(currentid), 'seconds');
      // playerRef2.current.play();
    } else {
      console.error("Player references are not available.");
    }
    setactivelargevideo(false)
  };
  function Timeconverter(totalMinutes) {
    const minutes = parseInt(totalMinutes, 10);
    if (isNaN(minutes)) {
      return;
    }

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  }

  function handleNext() {
    setshowSmallvideo(false);
    if (count == completed_lessons.length) {
      handleVideoEnded();
    } else {
      seturl(ALLCHAPTER[count + 1]?.video);
    }
  }
  function formatDate(dateString) {
    const dateObj = new Date(dateString);

    const day = String(dateObj.getDate()).padStart(2, "0");
    const year = dateObj.getFullYear();

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[dateObj.getMonth()];

    let hours = dateObj.getHours();
    const minutes = String(dateObj.getMinutes()).padStart(2, "0");

    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    const time = `${hours}.${minutes}${ampm}`;

    return `${day} ${month} ${year} ${time}`;
  }

  // Example usage

  // console.log(formattedDate); // Output: "08 July 2024 2.30pm"
  useEffect(() => {
    // console.log("adfdasf");

    if (ALLCHAPTER[count]?.isLiveClass) {
      localStorage.setItem("sk", ALLCHAPTER[count]?.liveClass?.streamKey);

      let today = new Date();
      let startdate = new Date(ALLCHAPTER[count]?.liveClass.startDate);
      let enddate = new Date(ALLCHAPTER[count]?.liveClass.endDate);

      // console.log(startdate);
      if (startdate > today) {
        setshowLive(true);
        // console.log("yess");
        let tmp = formatDate(startdate);
        setstarttime(tmp);
      } else if (enddate > today) {
        // console.log("i m inside");

        setshowLive(false);
        setshowend(true);
        let tmp = formatDate(enddate);
        setendtime(tmp);
      } else {
        setshowLive(false);
        setshowend(false);
        // setcount((prev) => prev + 1);
        handleVideoEnded();
      }
      // if()
    }
  }, [count]);
  function handleProgress(state){
    const { playedSeconds } = state;
    // console.log(playedSeconds);
    localStorage.setItem(currentid,playedSeconds)
    
  }
  return (
    <>
      <div className="flex justify-between gap-5">
        {/* side menu */}
        <div className="w-[20%] z-50 sticky top-20 h-max xsm:hidden sm:hidden">
          {/* <SideBar /> */}
          {/* <NewSideBar /> */}
          <DrawerNavbar />
        </div>

        <div className="w-[85%] xsm:w-full sm:w-full">
          <div className="CCD-container pb-10 pr-16  xsm:h-[42vh] sm:h-[42vh] sm:px-4 md:pr-[5%] md:h-[50vh] xsm:px-4">
            {showSmallvideo && (
              <div className="fixed bottom-0 left-0 z-[9999] rounded-xl">
                <ReactPlayer
                  onContextMenu={handleContextMenu}
                  height="200px"
                  width="250px"
                  ref={playerRef2}
                  borderRadius="14px"
                  className="shadow-2xl rounded-xl"
                  style={{ borderRadius: "14px !important" }}
                  playing={playing}
                  controls={true}
                  autoPlay={playing}
                  url={smallVideourl}
                  onReady={handleSmallVideoReady}
                  onDuration={handleDuration}
                  onEnded={handleVideoEnded}
                  config={{
                    file: {
                      attributes: {
                        controlsList: "nodownload",
                        playsInline: true,
                      },
                    },
                  }}
                />
              </div>
            )}
            {window.innerWidth <= 720 ? (
              <FiMenu
                className="absolute top-14 right-1 "
                onClick={() => setMenu(true)}
                size={24}
              />
            ) : (
              <></>
            )}
            <div className="flex gap-20 xsm:gap-0">
              <div className="CCD-content flex gap-5 pt-10">
                <div className="CCD-content-left 2xl:w-[55%] xsm:w-[100%] sm:w-[100%]">

                  <div
                    className="relative h-[100%] grid place-items-center xsm:h-[35vh] sm:h-[40vh] md:h-[40vh]"
                    style={{ borderRadius: "14px !important" }}
                  >
                    {showBanner &&
                    !showLive &&
                    !showend &&
                    !expired &&
                    url &&
                    url.toString().endsWith("mp4") ? (
                      <div
                        className="flex flex-col justify-center items-center w-full 2xl:h-[60vh] xl:h-[60vh] lg:h-[60vh] xsm:h-[30vh] sm:h-[30vh] rounded-xl"
                        style={{
                          backgroundImage: `url(${imageBanner})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <FaPlay
                          className="absolute text-green-400 p-4 sm:p-3 lg:p-4 xl:p-5 2xl:p-6 rounded-2xl shadow-xl cursor-pointer animate-customPulse"
                          style={{
                            backgroundColor: "rgba(255, 255, 255, 0.7)",
                          }}
                          onClick={() => setShowBanner(false)}
                          size={90}
                        />
                      </div>
                    ) : showLive ? (
                      <div className="text-center flex flex-col">
                        <p>Live Class Will Start On {starttime}.</p>
                        <p className="font-semibold cursor-pointer">
                          <Link to={`/stream/${params.slug}`} target="_blank">
                            GO TO LIVE CLASS
                          </Link>
                        </p>
                      </div>
                    ) : showend ? (
                      <div className="text-center flex flex-col">
                        <p>
                          Live Class is going on and it will end on {endtime}.
                        </p>
                        <p className="font-semibold cursor-pointer">
                          <Link to={`/stream/${params.slug}`} target="_blank">
                            GO TO LIVE CLASS
                          </Link>
                        </p>
                      </div>
                    ) : expired ? (
                      <div className="text-center flex flex-col">
                        <p>
                          Live class is over and you will get recording as soon
                          as possible.
                        </p>
                      </div>
                    ) : showSmallvideo || url?.toString().endsWith("pdf") ? (
                      <iframe src={pdfurl} width="100%" height="100%" />
                    ) : url?.toString().endsWith("mp3") ? (
                      <iframe src={url} width="100%" height="100%" />
                    ) : !showLive && !showend && url?.toString() === "" ? (
                      <div className="text-center flex flex-col ">
                        <p className="font-semibold">Coming soon</p>
                      </div>
                    ) : (
                      <ReactPlayer
                        onContextMenu={handleContextMenu}
                        height="auto"
                        width="100%"
                        ref={playerRef}
                        borderRadius="14px"
                        className="shadow-2xl rounded-[18px]"
                        style={{ borderRadius: "14px !important" }}
                        playing={!showBanner}
                        controls={true}
                        autoPlay={!showBanner}
                        url={url}
                        onDuration={handleDuration}
                        onEnded={handleVideoEnded}
                        onReady={handlelargeVideoReady}
                        onProgress={handleProgress}
                        config={{
                          file: {
                            attributes: {
                              controlsList: "nodownload",
                            },
                          },
                        }}
                      />
                    )}
                    <div className="font-bold xsm:h-[10vh] sm:h-[10vh] lg:items-start xl:items-start 2xl:items-start text-sm xsm:text-[10px] sm:text-[10px] flex justify-center xsm:py-5 sm:py-5 xsm:mb-5 sm:mb-5 xsm:w-full sm:w-full uppercase text-green-500">
                      {activeindex}
                    </div>
                  </div>
                </div>

                {window.innerWidth <= 720 ? (
                  menu ? (
                    <div className="w-[45%] h-[80vh] overflow-y-auto ">
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
            {/* <div className="font-bold text-lg text-wrap h-auto flex flex-wrap w-[70%]">{activeindex}</div> */}
          </div>
          <div
            id="ScrollToTop"
            className=" w-[65%] pb-10 xsm:px-5 xsm:w-full sm:w-full sm:px-[2%] md:mb-10 md:px-[5%]"
          >
            <div className="CCD-Header-container flex justify-evenly">
              <div className="w-[100%] xsm:mb-10 sm:mb-10">
                <div className=" mt-8 xsm:mt-0 sm:mt-0 md:mt-0">
                  <div className="bg-[#1DBF73] rounded-2xl py-6 px-12 flex justify-between items-center xsm:py-3 sm:py-3 xsm:px-5 sm:px-5 xsm:rounded-md sm:rounded-md md:px-8 md:py-4">
                    <div className="space-y-2 xsm:space-y-0 sm:space-y-0 md:space-y-1">
                      <p
                        className={`font-pop font-semibold text-[22px] text-[#FFFFFF] xsm:text-[10px] sm:text-[15px] md:text-[18px]`}
                      >
                        {Data?.title}{" "}
                      </p>
                      <div className="flex space-x-4">
                        <p className="font-pop text-[#FFFFFF] text-[14px] xsm:text-[8px] md:text-[12px] sm:text-[12px]">
                          {totalLessons} Lessons
                        </p>
                        <p className="font-pop text-[#FFFFFF] text-[14px] xsm:text-[8px] md:text-[12px] sm:text-[12px]">
                          {Timeconverter(dur)}
                        </p>
                      </div>
                    </div>
                    {window.innerWidth <= 720 && (
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
