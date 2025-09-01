import { useEffect, useRef, useState } from "react";
import "./courseDetails.css";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { BASE_URL } from "../../Api/api";
import Coursecontents from "../Meeting/Coursecontents";
import { jwtDecode } from "jwt-decode";
import { ReactComponent as Menu } from "../../Assests/Icons/menu.svg";
import CourseNavigation from "../CourseNavigation/CourseNavigation";
import { FiMenu } from "react-icons/fi";
import DrawerNavbar from "./DrawerNavbar.jsx";
import { FaPlay } from "react-icons/fa";
import Draggable from "react-draggable";

import NotesModal from "./NotesModal.jsx";
// import { YoutubeTranscript } from "youtube-transcript";
import { MdClose } from "react-icons/md";
import { TbWindowMaximize } from "react-icons/tb";
import axios from "axios";
export default function CDDetails() {
  const [maxWatched, setMaxWatched] = useState(0); // Maximum watched time
  const [isSeeking, setIsSeeking] = useState(false);
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
  const [activeindex, setactiveindex] = useState("");
  const [idwise, setidwise] = useState({});
  const [expired, setexpired] = useState();
  const [dur, setdur] = useState();
  const playerRef = useRef(null);
  const playerRef2 = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [allotedbycollege, setallotedbycollege] = useState(false);
  const params = useParams();
  let totalduration = 0;
  let completed = [];
  let allchapters = [];
  let temp = true;
  const [showBanner, setShowBanner] = useState(true);
  const [imageBanner, setImageBanner] = useState();
  const [currentid, setcurrentid] = useState();
  const [activesmallvideo, setactivesmallvideo] = useState(true);
  const [activelargevideo, setactivelargevideo] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [courseData, setCourseData] = useState();
  const [isNotesModalOpen, setIsNotesModalOpen] = useState(false);
  const [currentNotesUrl, setCurrentNotesUrl] = useState("");
  const [playbackPositions, setPlaybackPositions] = useState({});
  const [lastPlayerType, setLastPlayerType] = useState("");

  const [selectedLanguage, setSelectedLanguage] = useState("original");
  const [translatedTranscript, setTranslatedTranscript] = useState("");
  const [currentLesson, setCurrentLesson] = useState(null);
  const [isTranslating, setIsTranslating] = useState(false);

  // Helper function to translate text

  const translateText = async (text, targetLang, sourceLang = "auto") => {
    if (!text || targetLang === "original") return text;

    try {
      const res = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(
          text
        )}`
      );

      const data = await res.json();
      return data[0].map((item) => item[0]).join("");
    } catch (error) {
      console.error("Google Translate API Error:", error);
      return text;
    }
  };

  const handleLanguageChange = async (lang) => {
    setSelectedLanguage(lang);

    if (lang === "original") {
      return;
    }

    setIsTranslating(true);

    const text = currentLesson?.transcript || "";
    const isHindi = /[\u0900-\u097F]/.test(text);
    const sourceLang = isHindi ? "hi" : "en";

    try {
      const translated = await translateText(text, lang, sourceLang);
      setTranslatedTranscript(translated);
    } catch (err) {
      setTranslatedTranscript(text); // fallback
      console.error("Translation failed", err);
    } finally {
      setIsTranslating(false);
    }
  };

  // Find the current lesson
  useEffect(() => {
    if (courseData?.curriculum?.length > 0) {
      for (const chapter of courseData.curriculum) {
        for (const lesson of chapter.lessons || []) {
          if (lesson._id === currentid) {
            setCurrentLesson(lesson);
            return;
          }
        }
      }
    }
  }, [courseData, currentid]);

  // Translate transcript if language changes
  useEffect(() => {
    const fetchTranslation = async () => {
      if (currentLesson?.transcript) {
        const translated = await translateText(
          currentLesson.transcript,
          selectedLanguage
        );
        setTranslatedTranscript(translated);
      }
    };

    fetchTranslation();
  }, [selectedLanguage, currentLesson]);

  useEffect(() => {
    return () => {
      // Save position when component unmounts
      if (playerRef.current) {
        const currentTime = playerRef.current.getCurrentTime();
        localStorage.setItem(currentid, currentTime);
      }
      if (playerRef2.current) {
        const currentTime = playerRef2.current.getCurrentTime();
        localStorage.setItem(currentid, currentTime);
      }
    };
  }, [currentid]);

  useEffect(() => {
    async function FetchData() {
      try {
        const res = await fetch(`${BASE_URL}/course/${params.slug}`);
        const response = await res.json();
        setCourseData(response.course);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    }

    FetchData();
  }, [params.slug]);

  // console.log("Course Data:", courseData);

  useEffect(() => {
    async function Fetchdata() {
      temp = false;
      let login = localStorage.getItem("COURSES_USER_TOKEN");
      if (login) {
        let token = jwtDecode(login);
        let url1 = BASE_URL + "/user/" + token.email + "/" + params.slug;

        const data = await fetch(url1);
        const response = await data.json();
        console.log("Course allotted", response);
        setallotedbycollege(response?.data?.allotedByCollege);
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

        // console.log("This is data for check course detsils : ",data);
        if (response?.data?.course) {
          let tempids = {};
          let ind = 0;
          response?.data?.course?.curriculum?.forEach((val) => {
            val?.lessons?.map((it) => {
              // console.log("it",val);

              totalduration = totalduration + (parseInt(it?.duration) || 0);
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
          setcurrentid(allchapters[0]?._id);
          setVideoUrl(allchapters[0]?.video);
        } else {
          // console.log("hi");
          let last = localStorage.getItem("last");
          if (!last) {
            seturl(allchapters[videoindex]?.video);
            setcurrentid(allchapters[videoindex]?._id);
            // setcount(videoindex);
            setactiveindex(allchapters[videoindex]?.lesson_name);
          } else {
            seturl(allchapters[last]?.video);
            setcurrentid(allchapters[last]?._id);
            setactiveindex(allchapters[last]?.lesson_name);
          }
          setcount(videoindex);
          completed.push(allchapters[videoindex]?._id);
        }
        // console.log(completed);
        setcompleted_lessons(completed);
        // console.log("data", data && (BASE_URL+'/videos/'+ data[0]?.lessons[0]?.video));
      }
    }
    if (temp) {
      Fetchdata();
    }
  }, []);
  const handleKeyDown = (e) => {
    // console.log(e.key);
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

  // ...............................transcript part ......................................

  const parseTranscript = (text) => {
    if (!text) return [];

    // Split transcript into lines and parse timestamps
    const lines = text.split("\n");
    return lines.map((line) => {
      const timeMatch = line.match(/^(\d{1,2}:\d{2})/);
      if (timeMatch) {
        return {
          time: timeMatch[1],
          text: line.replace(timeMatch[1], "").trim(),
          timestamp: convertTimeToSeconds(timeMatch[1]),
        };
      }
      return {
        time: "",
        text: line.trim(),
        timestamp: 0,
      };
    });
  };

  const convertTimeToSeconds = (timeString) => {
    const [minutes, seconds] = timeString.split(":").map(Number);
    return minutes * 60 + seconds;
  };

  const handleTimestampClick = (seconds) => {
    if (playerRef.current) {
      playerRef.current.seekTo(seconds, "seconds");
      setPlaying(true);
    }
    if (playerRef2.current) {
      playerRef2.current.seekTo(seconds, "seconds");
      setPlaying(true);
    }
  };

  // Add state for parsed transcript
  const [parsedTranscript, setParsedTranscript] = useState([]);
  const [currentTranscriptIndex, setCurrentTranscriptIndex] = useState(0);

  // Update when currentLesson changes
  useEffect(() => {
    if (currentLesson?.transcript) {
      const parsed = parseTranscript(currentLesson.transcript);
      setParsedTranscript(parsed);
    }
  }, [currentLesson]);

  // Add effect to track current transcript position based on video time
  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current && !showSmallvideo) {
        const currentTime = playerRef.current.getCurrentTime();
        updateActiveTranscriptLine(currentTime);
      } else if (playerRef2.current && showSmallvideo) {
        const currentTime = playerRef2.current.getCurrentTime();
        updateActiveTranscriptLine(currentTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [showSmallvideo]);

  const updateActiveTranscriptLine = (currentTime) => {
    for (let i = parsedTranscript.length - 1; i >= 0; i--) {
      if (parsedTranscript[i].timestamp <= currentTime) {
        setCurrentTranscriptIndex(i);
        break;
      }
    }
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

  // function handleActiveVideo(url, title, id) {
  //   setactivesmallvideo(true);
  //   setactivelargevideo(true);
  //   setcurrentid(id);
  //   if (playerRef2.current) {
  //     const currenttime = playerRef2.current.getCurrentTime();
  //     // console.log("currenttime");

  //     // playerRef.current.seekTo(currenttime, 'seconds');

  //     localStorage.setItem(id, currenttime);
  //   }
  //   let getindex = idwise[id];
  //   setcount(getindex);
  //   localStorage.setItem("last", getindex);

  //   setactiveindex(title);
  //   setshowLive(false);
  //   setshowend(false);
  //   setexpired(false);
  //   // console.log(url);
  //   setshowSmallvideo(false);
  //   seturl(url);
  // }

  const handleActiveVideo = (url, title, id) => {
    // Save current position from whichever player is active
    if (playerRef.current && !showSmallvideo) {
      const currentTime = playerRef.current.getCurrentTime();
      localStorage.setItem(id, currentTime);
      setPlaybackPositions((prev) => ({ ...prev, [id]: currentTime }));
    } else if (playerRef2.current && showSmallvideo) {
      const currentTime = playerRef2.current.getCurrentTime();
      localStorage.setItem(id, currentTime);
      setPlaybackPositions((prev) => ({ ...prev, [id]: currentTime }));
    }

    // Set states for the new video
    setactivesmallvideo(true);
    setactivelargevideo(true);
    setcurrentid(id);

    const getindex = idwise[id];
    setcount(getindex);
    localStorage.setItem("last", getindex);

    setactiveindex(title);
    setshowLive(false);
    setshowend(false);
    setexpired(false);
    setshowSmallvideo(false);
    seturl(url);

    // Store which player we're switching from
    setLastPlayerType(showSmallvideo ? "small" : "large");
  };

  // console.log(allchapters);
  const handleVideoEnded = async () => {
    // console.log(count + 1);
    // console.log(totalLessons,ALLCHAPTER.length);
    localStorage.setItem("last", count + 1);

    setactivelargevideo(true);
    setactivesmallvideo(true);
    setcurrentid(ALLCHAPTER[(count + 1) % ALLCHAPTER.length]?._id);
    setactiveindex(ALLCHAPTER[(count + 1) % ALLCHAPTER.length]?.lesson_name);
    setshowSmallvideo(false);
    seturl(ALLCHAPTER[(count + 1) % ALLCHAPTER.length]?.video);
    if (
      count + 1 >= completed_lessons.length &&
      ALLCHAPTER?.length >= completed_lessons.length
    ) {
      // if (ALLCHAPTER?.length == completed_lessons.length) {

      // }
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

          // console.log(response);
        }
      } catch (error) {
        console.log(error);
      }
      setcount((prev) => prev + 1);
    }
  };

  // Function to convert YouTube URL
  const getEmbedUrl = (url) => {
    const match = url.match(/v=([^&]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  };

  // const fetchTranscript = async (videoUrl) => {
  //   const videoId = getYouTubeVideoID(videoUrl); // you need to extract this
  //   const transcript = await YoutubeTranscript.fetchTranscript(videoId);
  //   return transcript; // array of { text, start, duration }
  // };

  // Helper to extract video ID from URL
  // const getYouTubeVideoID = (url) => {
  //   const regex = /(?:v=|\/)([0-9A-Za-z_-]{11}).*/;
  //   const match = url.match(regex);
  //   return match ? match[1] : null;
  // };

  const handleBannerClick = () => {
    setShowBanner(false);
    playerRef?.current?.getInternalPlayer()?.play?.(); // optional: force play if needed
  };

  const handleDuration = (duration) => {
    // setDuration(duration);
    localStorage.setItem("duration" + currentid, duration);
    // console.log(duration);
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

  // const handleToggleNotes = async (pdf, videourl, id, lesson) => {
  //   setactivelargevideo(true);
  //   // console.log(id);
  //   setactiveindex(lesson);
  //   setcurrentid(id);
  //   let getindex = idwise[id];
  //   localStorage.setItem("last", getindex);

  //   try {
  //     if (playerRef.current) {
  //       const currenttime = playerRef.current.getCurrentTime();
  //       //  setCurrentDuration(currenttime)
  //       localStorage.setItem(id, currenttime);
  //       setPlaying(true);
  //     }
  //     // Show the small video player
  //     setshowSmallvideo(true);

  //     // Set the URLs for PDF and video
  //     setpdfurl(pdf);
  //     setsmallVideourl(videourl);

  //     // console.log(playerRef.current);
  //   } catch (error) {
  //     console.error("An error occurred while toggling notes:", error);
  //   }
  // };

  const handleToggleNotes = async (pdf, videourl, id, lesson) => {
    setactiveindex(lesson);
    setcurrentid(id);

    try {
      if (playerRef.current) {
        const currenttime = playerRef.current.getCurrentTime();
        localStorage.setItem(id, currenttime);
      }

      // Always handle video if present
      if (videourl) {
        setshowSmallvideo(true);
        setsmallVideourl(videourl);
      }

      // Independently handle PDF if present
      if (pdf) {
        setCurrentNotesUrl(pdf);
        setIsNotesModalOpen(true);
      }
    } catch (error) {
      console.error("Error:", error);
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
    if (
      playerRef2.current &&
      activesmallvideo &&
      localStorage.getItem(currentid)
    ) {
      setactivesmallvideo(false);
      playerRef2.current.seekTo(localStorage.getItem(currentid), "seconds");
      // playerRef2.current.play();
    } else {
      console.error("Player references are not available.");
    }
  };
  const handlelargeVideoReady = () => {
    // console.log(currentid,activelargevideo);

    if (activelargevideo && localStorage.getItem(currentid)) {
      //  setactivelargevideo(false)
      let durationtime = localStorage.getItem("duration" + currentid);
      let playedtime = localStorage.getItem(currentid);
      if (Math.floor(durationtime) == Math.floor(playedtime)) {
        playerRef.current.seekTo(0, "seconds");
      } else {
        playerRef.current.seekTo(localStorage.getItem(currentid), "seconds");
      }
      // playerRef2.current.play();
    } else {
      console.error("Player references are not available.");
    }
    setactivelargevideo(false);
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
  const handleProgress = (state) => {
    const { playedSeconds } = state;
    // console.log(isSeeking);

    // Update maxWatched only if the user is actively watching
    if (!isSeeking) {
      setMaxWatched((prevMax) => Math.max(prevMax, playedSeconds));
    } else {
      setMaxWatched(playedSeconds);
      localStorage.setItem(currentid, playedSeconds);
    }
    setIsSeeking(false);
  };

  // Function to restrict seeking beyond maxWatched
  const handleSeek = (seekTime) => {
    // console.log("handleseeking");
    // console.log("maxWatched",maxWatched);
    setIsSeeking(true);
    if (seekTime > maxWatched) {
      playerRef.current.seekTo(maxWatched, "seconds"); // Revert to maxWatched time
    }
  };

  // Detect when user starts and stops seeking
  const handleSeeking = (seeking) => {
    setIsSeeking(seeking);
  };

  return (
    <>
      <div className="flex justify-between w-full h-max xsm:flex-col sm:flex-col">
        {/* side menu */}
        <div className="w-[20%] z-50 sticky top-20 h-max xsm:hidden sm:hidden">
          {/* <SideBar /> */}
          {/* <NewSideBar /> */}
          <DrawerNavbar />
        </div>

        {/* <div className="w-[85%] xsm:w-full sm:w-full"> */}
        <div className="w-full xsm:w-full sm:w-full justify-between">
          <div className="CCD-container pb-10 pr-16  xsm:h-[42vh] sm:h-[42vh] sm:px-4 md:pr-[5%] md:h-[50vh] xsm:px-4">
            {/* {showSmallvideo && (
              <Draggable>
                <div className="fixed bottom-0 left-0 z-[9999] rounded-xl">
                  <ReactPlayer
                    onContextMenu={handleContextMenu}
                    height="280px"
                    width="350px"
                    ref={playerRef2}
                    className="shadow-2xl rounded-xl"
                    // playing={playing}
                    playing={false}
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
              </Draggable>
            )} */}
            {showSmallvideo && (
              <Draggable>
                <div className="fixed bottom-0 left-0 z-[9999] rounded-xl">
                  {/* Close button added here */}
                  <div className="w-[350px] bg-green-700 p-2 rounded-t-xl flex justify-between items-center relative">
                    {/* Button to close everything and resume main video */}
                    <button
                      className="bg-green-500 text-white p-2 rounded-full z-50"
                      onClick={() => {
                        setshowSmallvideo(false);
                        setPlaying(true); // Resume main video
                        setIsNotesModalOpen(false); // Close notes
                      }}
                    >
                      <TbWindowMaximize size={20} />
                    </button>

                    {/* Button to close only small video */}
                    <button
                      className="bg-red-500 text-white p-2 rounded-full z-50"
                      onClick={() => {
                        setshowSmallvideo(false); // Only close small player
                      }}
                    >
                      <MdClose size={20} />
                    </button>
                  </div>

                  {/* <ReactPlayer
                    ref={playerRef}
                    onContextMenu={handleContextMenu}
                    height="280px"
                    width="350px"
                    // ref={playerRef2}
                    className="shadow-2xl rounded-xl"
                    playing={false}
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
                  /> */}

                  <ReactPlayer
                    ref={playerRef2}
                    onContextMenu={handleContextMenu}
                    height="280px"
                    width="350px"
                    className="shadow-2xl rounded-xl"
                    playing={false}
                    controls={true}
                    autoPlay={playing}
                    url={smallVideourl}
                    onReady={() => {
                      const savedPosition =
                        playbackPositions[currentid] ||
                        localStorage.getItem(currentid);
                      if (savedPosition && showSmallvideo) {
                        setTimeout(() => {
                          playerRef2.current.seekTo(
                            parseFloat(savedPosition),
                            "seconds"
                          );
                        }, 100);
                      }
                    }}
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
              </Draggable>
            )}
            {window.innerWidth <= 720 ? (
              <FiMenu
                className="absolute top-14 right-1 z-999"
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
                      // <div className="relative">
                      <iframe src={pdfurl} width="100%" height="100%" />
                    ) : //  <button className="absolute top-0 right-0">ABC</button>
                    // </div>
                    url?.toString().endsWith("mp3") ? (
                      <iframe src={url} width="100%" height="100%" />
                    ) : !showLive && !showend && url?.toString() === "" ? (
                      <div className="text-center flex flex-col ">
                        <p className="font-semibold">Coming soon</p>
                      </div>
                    ) : (
                      // <div className="relative w-full aspect-video rounded-[18px] overflow-hidden shadow-2xl">
                      //   <ReactPlayer
                      //     onContextMenu={handleContextMenu}
                      //     className="absolute top-0 left-0 rounded-[18px]"
                      //     width="100%"
                      //     height="100%"
                      //     // playing={true}
                      //     // controls={true}
                      //     // autoPlay={true}
                      //     ref={playerRef}
                      //     borderRadius="14px"
                      //     style={{ borderRadius: "14px !important" }}
                      //     playing={!showBanner}
                      //     controls={true}
                      //     autoPlay={!showBanner}
                      //     // url={url}
                      //     url={getEmbedUrl(url)}
                      //     onDuration={handleDuration}
                      //     onEnded={handleVideoEnded}
                      //     onReady={handlelargeVideoReady}
                      //     onProgress={handleProgress}
                      //     onSeek={handleSeek}
                      //     onSeekStart={() => handleSeeking(true)}
                      //     onSeekEnd={() => handleSeeking(false)}
                      //     config={{
                      //       file: {
                      //         attributes: {
                      //           controlsList: "nodownload",
                      //         },
                      //       },
                      //     }}
                      //   />
                      // </div>

                      <div className="relative w-full aspect-video rounded-[18px] overflow-hidden shadow-2xl md:mt-0 mt-10">
                        {/* <ReactPlayer
                          onContextMenu={handleContextMenu}
                          className="absolute top-0 left-0 rounded-[18px]"
                          width="100%"
                          height="100%"
                          ref={playerRef}
                          // ref={playerRef2}
                          playing={!showBanner}
                          controls={true}
                          autoPlay={!showBanner}
                          url={getEmbedUrl(url)}
                          onDuration={handleDuration}
                          onEnded={handleVideoEnded}
                          onReady={handlelargeVideoReady}
                          onProgress={handleProgress}
                          onSeek={handleSeek}
                          onSeekStart={() => handleSeeking(true)}
                          onSeekEnd={() => handleSeeking(false)}
                          config={{
                            file: {
                              attributes: {
                                controlsList: "nodownload",
                              },
                            },
                          }}
                        /> */}

                        <ReactPlayer
                          ref={playerRef}
                          onContextMenu={handleContextMenu}
                          className="absolute top-0 left-0 rounded-[18px]"
                          width="100%"
                          height="100%"
                          playing={!showBanner}
                          controls={true}
                          autoPlay={!showBanner}
                          url={getEmbedUrl(url)}
                          onDuration={handleDuration}
                          onEnded={handleVideoEnded}
                          onReady={() => {
                            const savedPosition =
                              playbackPositions[currentid] ||
                              localStorage.getItem(currentid);
                            if (savedPosition && !showSmallvideo) {
                              setTimeout(() => {
                                playerRef.current.seekTo(
                                  parseFloat(savedPosition),
                                  "seconds"
                                );
                              }, 100);
                            }
                          }}
                          onProgress={handleProgress}
                          onSeek={handleSeek}
                          config={{
                            file: {
                              attributes: {
                                controlsList: "nodownload",
                              },
                            },
                          }}
                        />

                        {showBanner && (
                          <div
                            onClick={handleBannerClick}
                            className="absolute inset-0 bg-black bg-opacity-60 z-10 cursor-pointer flex items-center justify-center rounded-[18px]"
                          >
                            <img
                              src={imageBanner}
                              alt="Banner"
                              className="w-full h-full object-fill rounded-[18px]"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="animate-ping-slow rounded-full bg-white bg-opacity-80 p-6">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-12 w-12"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      // <div className="relative w-full aspect-video rounded-[18px] overflow-hidden shadow-2xl">
                      //   <ReactPlayer
                      //     // key={_id}
                      //     ref={playerRef2}
                      //     className="absolute top-0 left-0 rounded-[18px]"
                      //     width="100%"
                      //     height="100%"
                      //     playing={false}
                      //     controls={true}
                      //     autoPlay={false}
                      //     url={getEmbedUrl(url)}
                      //     config={{
                      //       youtube: {
                      //         playerVars: {
                      //           modestbranding: 1,
                      //           rel: 0,
                      //           showinfo: 0,
                      //           controls: 1,
                      //         },
                      //       },
                      //       file: {
                      //         attributes: {
                      //           controlsList: "nodownload",
                      //         },
                      //       },
                      //     }}
                      //     loop={false}
                      //     muted={false}
                      //     playbackRate={1}
                      //     progressInterval={1000}
                      //     stopOnUnmount={true}
                      //     // Inside onReady
                      //     onReady={() => {
                      //       const lastIndex = localStorage.getItem("last");
                      //       const currentId = allchapters?.[lastIndex]?._id;
                      //       const lastTime =
                      //         parseFloat(localStorage.getItem(currentId)) || 0;

                      //       if (playerRef2.current && lastTime > 0) {
                      //         // Delay seeking just a bit to make sure video is ready
                      //         setTimeout(() => {
                      //           playerRef2.current.seekTo(lastTime, "seconds");
                      //           console.log("Seeked after delay to:", lastTime);
                      //         }, 500); // try 500ms
                      //       }
                      //     }}
                      //   />
                      // </div>
                    )}
                    <div className="font-bold h-[10vh] xsm:h-[5vh] xsm:mt-10 top-[15vh] sm:h-[10vh] lg:items-start xl:items-start 2xl:items-start text-sm xsm:text-[10px] sm:text-[10px] flex justify-center xsm:py-5 sm:py-5 xsm:mb-5 sm:mb-5 xsm:w-full sm:w-full uppercase text-green-500">
                      {activeindex}
                    </div>
                    <div
                      onClick={openModal}
                      className="cursor-pointer text-white bg-green-400 hover:bg-green-600 uppercase border border-1
                       p-2 px-4 rounded-xl w-1/2 text-center md:mt-2 mt-0"
                    >
                      Transcript
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
                        currentid={currentid}
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
                      currentid={currentid}
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
                          {Data?.duration} Hours
                        </p>
                        {/* {!allotedbycollege ? (
                          <p className="font-pop text-[#FFFFFF] text-[14px] xsm:text-[8px] md:text-[12px] sm:text-[12px]">
                            {Timeconverter(dur)}
                          </p>
                        ) : (
                          ""
                        )} */}
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

        <div className="p-4 max-h-[80vh] overflow-y-auto">
          {/* Overlay */}
          {isOpen && (
            <div
              onClick={closeModal}
              className="fixed inset-0 bg-black bg-opacity-30 z-40"
            ></div>
          )}

          {/* Slide-in Modal */}
          <div className="p-4 max-h-[80vh] overflow-y-auto">
            {/* Overlay */}
            {isOpen && (
              <div
                onClick={closeModal}
                className="fixed inset-0 bg-black bg-opacity-30 z-40"
              ></div>
            )}

            {/* Slide-in Modal */}
            <div
              className={`fixed top-10 mt-10 right-0 h-full bg-white shadow-lg z-50 transform transition-transform duration-300
    w-[80%] sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4
    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
              {/* Loader Overlay */}
              {isTranslating && (
                <div className="absolute inset-0 z-50 bg-white bg-opacity-70 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-green-600"></div>
                </div>
              )}

              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-xl uppercase text-green-600 underline-offset-1">
                  Transcript
                </h2>
                <button onClick={closeModal} className="text-gray-500 text-2xl">
                  &times;
                </button>
              </div>

              {/* Language Selector */}
              {/* <div className="p-4 flex justify-end gap-2">
                {[
                  { label: "Original", value: "original" },
                  { label: "Hindi", value: "hi" },
                  { label: "English", value: "en" },
                  { label: "Punjabi", value: "pa" },
                ].map((lang) => (
                  <button
                    key={lang.value}
                    onClick={() => handleLanguageChange(lang.value)}
                    className={`px-3 py-1 text-sm rounded ${
                      selectedLanguage === lang.value
                        ? "bg-green-600 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div> */}

              {/* Modal Content */}
              <div className="p-4 pb-10 overflow-y-auto max-h-[calc(100vh-180px)]">
                {currentLesson ? (
                  <div className="mb-4 pl-4 border-l-4 border-gray-200">
                    <h4 className="text-md mb-1 text-green-400">
                      {currentLesson.lesson_name}
                    </h4>

                    {parsedTranscript.length > 0 ? (
                      <div className="text-gray-700 space-y-2">
                        {parsedTranscript.map((line, idx) => {
                          const isActive = idx === currentTranscriptIndex;
                          return (
                            <div
                              key={idx}
                              className={`flex items-start gap-3  my-0 rounded-md cursor-pointer transition-colors *:
                              
                                ${
                                  isActive
                                    ? "bg-blue-100 border-green-500 p-2"
                                    : "hover:bg-gray-100 p-2 "
                                }`}
                              onClick={() =>
                                line.timestamp &&
                                handleTimestampClick(line.timestamp)
                              }
                            >
                              {/* Time */}
                              {line.time && (
                                <span className="font-bold text-green-600 hover:underline">
                                  {line.time}
                                </span>
                              )}

                              {/* Text */}
                              <span className="text-gray-700">{line.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="text-gray-400 italic">
                        Transcript not available.
                      </p>
                    )}
                  </div>
                ) : (
                  <p className="text-gray-500 italic">
                    No curriculum data found.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <NotesModal
          isOpen={isNotesModalOpen}
          onClose={() => {
            setIsNotesModalOpen(false);
            setPlaying(true);
            setshowSmallvideo(false);
          }}
          pdfUrl={currentNotesUrl}
        />
      </div>
    </>
  );
}
