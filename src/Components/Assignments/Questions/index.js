import { useEffect, useState, useRef } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { BASE_URL } from "../../../Api/api";
import Spinner from "../../Spinner";
import toast, { Toaster } from "react-hot-toast";
import html2canvas from "html2canvas";
import RecordRTC, { getMediaElement } from 'recordrtc';
let screenshotInterval;


export default function Question() {
  const [Selected, setSelected] = useState();
  const [data, setdata] = useState([]);
  const [show, setshow] = useState(false);
  const [params, setparams] = useSearchParams();
  const [index, setindex] = useState(1);
  let navigate = useNavigate();
  const [Length, setLength] = useState();
  let token = localStorage.getItem("COURSES_USER_TOKEN");

  //   ..........
  const [timer, setTimer] = useState(20);
  const [timeString, setTimeString] = useState("");
  const [userImage, setUserImage] = useState(null);
  const [recorderInstance, setRecorderInstance] = useState(null); // Define recorderInstance
  const [recordedVideoURL, setRecordedVideoURL] = useState(null);
  //   ..........

  async function Fetchdata() {
    try {
      let url =
        BASE_URL +
        "/getmodulequestions?module_id=" +
        params.get("module_id") +
        "&index=" +
        params.get("index");
      // console.log(url);
      setshow(true);
      const data = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await data.json();
      console.log(response);
      if (response.success) {
        setshow(false);
        setdata(response?.data);
        setLength(response?.length);
      } else {
        navigate("/submitted");
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    Fetchdata();
  }, [params.get("index")]);
  const handleSubmit = async () => {
    try {
      let url = BASE_URL + "/submittestanswer";
      setshow(true);
      const data1 = await fetch(url, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          questionID: data?.question?._id,
          moduleID: params.get("module_id"),
          answer: Selected,
        }),
      });
      const response = await data1.json();
      if (response.success) {
        setindex(index + 1);
        setshow(false);
        setSelected("");
        navigate(
          `/questions?module_id=${params.get("module_id")}&index=${index + 1}`
        );
      }
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  function Nextquestion() {
    if (index <= Length) {
      Fetchdata();
      setindex(index + 1);
      navigate(
        `/questions?module_id=${params.get("module_id")}&index=${index + 1}`
      );
    }
  }
  function Previousquestion() {
    if (index >= 1) {
      Fetchdata();
      setindex(index - 1);
      navigate(
        `/questions?module_id=${params.get("module_id")}&index=${index - 1}`
      );
    }
  }
  async function handleClick() {
    try {
      let url = BASE_URL + "/submitmodule";
      const data = await fetch(url, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ moduleID: params.get("module_id") }),
      });
      const response = await data.json();
      if (response.success) {
        // stopRecording();
        navigate("/submitted");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  //   ............
  //   timer
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (timer > 0) {
  //       setTimer((prevTimer) => prevTimer - 1);
  //     } else {
  //       clearInterval(interval);
  //       // exitFullscreen();
  //       navigate("/submitted"); // Redirect when time is up
  //     }
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, [timer, navigate]);
  // useEffect(() => {
  //   const minutes = Math.floor(timer / 60);
  //   const seconds = timer % 60;
  //   setTimeString(`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);
  // }, [timer]);
  // timer

  // tab switch
  // useEffect(() => {
  //   const handleVisibilityChange = () => {
  //     if (document.hidden) {
  //       // User switched tabs or minimized the window
  //       alert("Please do not switch tabs during the assessment.");
  //       // Block navigation (not fully enforceable)
  //       document.addEventListener("visibilitychange", handleBlockedNavigation);
  //     } else {
  //       // Remove the block on navigation
  //       document.removeEventListener(
  //         "visibilitychange",
  //         handleBlockedNavigation
  //       );
  //     }
  //   };

  //   const handleBeforeUnload = (event) => {
  //     // Prompt the user before leaving the page
  //     event.preventDefault();
  //     event.returnValue = "";
  //   };

  //   const handleBlockedNavigation = (event) => {
  //     // Block navigation while assessment is ongoing
  //     event.preventDefault();
  //     event.returnValue = "";
  //   };

  //   // Add event listeners for visibility change and before unload 
  //   document.addEventListener("visibilitychange", handleVisibilityChange);
  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   // Clean up event listeners on component unmount
  //   return () => {
  //     document.removeEventListener("visibilitychange", handleVisibilityChange);
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);
  // tab switch

  // Request fullscreen mode when the assessment starts
  // useEffect(() => {
  //   const handleVisibilityChange = () => {
  //     if (document.hidden) {
  //       // User switched tabs or minimized the window
  //       alert("Please do not switch tabs during the assessment.");
  //       // Block navigation (not fully enforceable)
  //       document.addEventListener("visibilitychange", handleBlockedNavigation);
  //     } else {
  //       // Remove the block on navigation
  //       document.removeEventListener(
  //         "visibilitychange",
  //         handleBlockedNavigation
  //       );
  //     }
  //   };

    // const handleBeforeUnload = (event) => {
    //   // Prompt the user before leaving the page
    //   event.preventDefault();
    //   event.returnValue = "";
    // };

    // const handleBlockedNavigation = (event) => {
    //   // Block navigation while assessment is ongoing
    //   event.preventDefault();
    //   event.returnValue = "";
    // };

    // const enterFullscreen = () => {
    //   if (document.documentElement.webkitRequestFullscreen) {
    //     // Safari
    //     document.documentElement.webkitRequestFullscreen();
    //   } else if (document.documentElement.msRequestFullscreen) {
    //     // IE11
    //     document.documentElement.msRequestFullscreen();
    //   }
    // };

    // enterFullscreen();

    // const takeScreenshot = () => {
    //   html2canvas(document.body).then(canvas => {
    //     // Convert canvas to data URL
    //     const screenshot = canvas.toDataURL("image/png");
    
    //     // Send the screenshot data to the server
    //     fetch("/save-screenshot", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ screenshot }),
    //     })
    //     .then(response => {
    //       if (response.ok) {
    //         console.log("Screenshot saved on server.");
    //       } else {
    //         console.error("Failed to save screenshot on server.");
    //       }
    //     })
    //     .catch(error => {
    //       console.error("Error while saving screenshot:", error);
    //     });
    //     const randomDuration = Math.floor(Math.random() * 5000) + 1000; // Random duration between 1 and 10 seconds
    //   clearInterval(screenshotInterval); // Clear the current interval
    //   screenshotInterval = setInterval(takeScreenshot, randomDuration);
    //   });
    // };
    
    // takeScreenshot();

  //   const cleanup = () => {
  //     // Exit fullscreen mode when the component unmounts
  //     exitFullscreen();
  //     // Clean up event listeners
  //     document.removeEventListener("visibilitychange", handleVisibilityChange);
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //     // Clear the screenshot interval
  //       clearInterval(screenshotInterval);
  //   };

  //   return cleanup;
  // }, []);

  // const exitFullscreen = () => {
  //   if (document.webkitExitFullscreen) {
  //     // Safari
  //     document.webkitExitFullscreen();
  //   } else if (document.msExitFullscreen) {
  //     // IE11
  //     document.msExitFullscreen();
  //   }
  // };

  // useEffect(() => {
  //   // Retrieve the user's image from local storage
  //   const imageSrc = localStorage.getItem("userImage");
  //   console.log("User Image:", imageSrc); // Log the image source
  //   setUserImage(imageSrc);
  // }, []);

  // const startRecording = async () => {
  //   try {
  //     const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
  //     const recorder = new RecordRTC(stream, {
  //       type: 'video',
  //       mimeType: 'video/webm',
  //     });
  //     recorder.startRecording();
  //     setRecorderInstance(recorder);
  //     console.log("no error");
  //   } catch (error) {
  //     console.error('Error starting recording:', error);
  //   }
  // };
  
  // const stopRecording = () => {
  //   try {
  //     if (recorderInstance) {
  //       recorderInstance.stopRecording(() => {
  //         const blob = recorderInstance.getBlob();
  //         const videoURL = window.URL.createObjectURL(blob);
  //         setRecordedVideoURL(videoURL);
  //       });
  //     }
  //   } catch (error) {
  //     console.error('Error stopping recording:', error);
  //   }
  // };

  // useEffect(() => {
  //   // Start recording when the component renders on the questions route
  //   startRecording();
  // }, []);

  //   ..............

  return (
    <>
      <Toaster />
      <div className="px-[6%] space-y-5 py-2">
        <div className=" flex justify-between items-center border p-3  rounded-lg">
          <Link to="/modules" className="flex items-center space-x-3">
            <FaArrowLeft />
            <p className="font-semibold">Go Back to {data?.module} Module</p>
          </Link>

          <div className="flex items-center space-x-3">
            <FaLessThan
              className={`h-8 w-8 text-xs rounded-full bg-slate-300 p-2  ${
                index == 1 ? "cursor-not-allowed opacity-50" : "cursor-pointer"
              }`}
              onClick={() => (index > 1 ? Previousquestion() : "")}
            />
            <FaGreaterThan
              className={`h-8 w-8 text-xs rounded-full bg-slate-300 p-2  ${
                index == Length
                  ? "cursor-not-allowed opacity-50"
                  : "cursor-pointer"
              }`}
              onClick={() => (index < Length ? Nextquestion() : "")}
            />
          </div>
        </div>

        {/* <div>
          <p>Time Remaining: {timeString}</p>
        </div>
        {userImage && (
          <div className="flex justify-center">
            <img
              src={userImage}
              alt="User"
              className="w-32 h-32 rounded-full"
            />
          </div>
        )} */}

        <div className="flex justify-between h-[77vh] ">
          <div className="w-[60%] rounded-xl border h-full shadow-xl">
            <div className="border-b-[2px] p-3 font-semibold">
              {data?.module}
            </div>
            <div className="p-3 text-lg text-gray-700">
              {data?.question?.question}
            </div>
          </div>

          <div className="w-[35%] rounded-xl border min-h-full shadow-xl overflow-y-auto">
            <div className="border-b-[2px] p-3 font-semibold">Options</div>
            <div className="flex flex-col p-5 gap-y-5">
              {data?.question?.options &&
                Object.entries(data?.question?.options).map(([key, value]) => {
                  return (
                    <>
                      <label
                        onClick={() =>
                          !data?.isSubmitted ? setSelected(key?.toString()) : ""
                        }
                        htmlFor={key?.toString()}
                        className={`${
                          Selected == key?.toString() ||
                          data?.submittedAnswer == key?.toString()
                            ? "border-[#1DBF73]"
                            : ""
                        } flex p-3 border rounded-lg space-x-2 cursor-pointer`}
                      >
                        {data?.isSubmitted ? (
                          <input
                            name="option"
                            id={key?.toString()}
                            type="radio"
                            checked={data?.submittedAnswer == key?.toString()}
                            className="accent-[#1DBF73]"
                          />
                        ) : (
                          <input
                            name="option"
                            id={key?.toString()}
                            type="radio"
                            checked={Selected == key?.toString()}
                            className="accent-[#1DBF73]"
                          />
                        )}
                        <p>{value}</p>
                      </label>
                    </>
                  );
                })}

              <div className="flex justify-end space-x-2">
                <button
                  className={`py-2 px-4 rounded-xl bg-[#1DBF73] text-white ${
                    data?.isSubmitted ? "cursor-not-allowed opacity-50" : ""
                  }`}
                  onClick={() => (!data?.isSubmitted ? handleSubmit() : "")}
                >
                  Save
                </button>
                {Length == params.get("index") ? (
                  <button
                    className={`py-2 px-4 rounded-xl bg-[#1DBF73] text-white `}
                    onClick={handleClick}
                  >
                    Finish
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        {show ? (
          <div className="w-full h-screen fixed top-0 left-0 bg-[#b4cca1] opacity-80">
            <Spinner className="" />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
