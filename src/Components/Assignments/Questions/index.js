import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { FaArrowLeft, FaGreaterThan, FaLessThan } from "react-icons/fa";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";
import { useNavigate, useSearchParams } from "react-router-dom";
import { BASE_URL } from "../../../Api/api";
import Spinner from "../../Spinner";
import toast, { Toaster } from "react-hot-toast";
import Modal from "react-modal";
import { ImCross } from "react-icons/im";
export default function Question() {
  const [enablefullscreen, setenablefullscreen] = useState(false);
  const [Selected, setSelected] = useState();
  const [data, setdata] = useState([]);
  const [show, setshow] = useState(false);
  const [params, setparams] = useSearchParams();
  const [index, setindex] = useState(1);
  const [audioAlert, setAudioAlert] = useState(false);
  const [tabwarning, settabwarning] = useState(0);
  let [peoplewarning, setpeoplewarning] = useState(3);
  let navigate = useNavigate();
  const [Length, setLength] = useState();
  const [camerablocked, setcamerablocked] = useState();
  let token = localStorage.getItem("COURSES_USER_TOKEN");
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const dataArrayRef = useRef(null);
  const sourceRef = useRef(null);
  const audioIntervalRef = useRef(null);
  const [micblocked, setmicblocked] = useState();

  function enterFullScreen() {
    if (document.fullscreenEnabled) {
      const element = document.documentElement; // or any specific element
      if (element.requestFullscreen) {
        element
          .requestFullscreen()
          .then(() => {
            console.log("Entered full-screen mode successfully.");
            setenablefullscreen(true);
          })
          .catch((err) => {
            console.error(
              "Error attempting to enable full-screen mode:",
              err.message
            );
          });
      } else {
        console.warn("Fullscreen API is not supported on this browser.");
      }
    } else {
      console.warn("Fullscreen mode is not allowed.");
    }
  }

  useLayoutEffect(() => {
    enterFullScreen();

    // const handleFullScreenChange = () => {
    //   if (!document.fullscreenElement) {
    //     // If the user exits full-screen mode, re-enter it
    //     enterFullScreen();
    //   }
    // };

    // document.addEventListener('fullscreenchange', handleFullScreenChange);
    // document.addEventListener('webkitfullscreenchange', handleFullScreenChange); // Chrome, Safari, and Opera
    // document.addEventListener('mozfullscreenchange', handleFullScreenChange); // Firefox
    // document.addEventListener('MSFullscreenChange', handleFullScreenChange); // IE/Edge

    // return () => {
    //   document.removeEventListener('fullscreenchange', handleFullScreenChange);
    //   document.removeEventListener('webkitfullscreenchange', handleFullScreenChange);
    //   document.removeEventListener('mozfullscreenchange', handleFullScreenChange);
    //   document.removeEventListener('MSFullscreenChange', handleFullScreenChange);
    // };
  }, []);
  async function Fetchdata() {
    try {
      let url = `${BASE_URL}/getmodulequestions?module_id=${params.get(
        "module_id"
      )}&index=${params.get("index")}`;
      setshow(true);
      const data = await fetch(url, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const response = await data.json();
      if (response.success) {
        setshow(false);
        setdata(response.data);
        setLength(response.length);
      } else {
        localStorage.removeItem("lastminute");
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
      let url = `${BASE_URL}/submittestanswer`;
      setshow(true);
      const data1 = await fetch(url, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          questionID: data.question._id,
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
    } catch (error) {
      console.log(error);
    }
  };

  function Nextquestion() {
    if (index <= Length) {
      Fetchdata();
      setSelected("");
      setindex(index + 1);
      navigate(
        `/questions?module_id=${params.get("module_id")}&index=${
          index + 1
        }&t=${params.get("t")}`
      );
    }
  }

  function Previousquestion() {
    if (index >= 1) {
      Fetchdata();
      setindex(index - 1);
      navigate(
        `/questions?module_id=${params.get("module_id")}&index=${
          index - 1
        }&t=${params.get("t")}`
      );
    }
  }

  async function handleClick(status, remarks) {
    try {
      let url = `${BASE_URL}/submitmodule`;
      const data = await fetch(url, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          moduleID: params.get("module_id"),
          status: status,
        }),
      });
      const response = await data.json();
      if (response.success) {
        localStorage.removeItem("lastminute");
        if (status) {
          toast.error("Suspended!");
          window.location.replace("/suspended");
        } else {
          toast.success("Submitted Successfully");
          window.location.replace("/submitted");
        }
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handlePrev() {
    if (localStorage.getItem("history")) {
      let history = localStorage.getItem("history");
      localStorage.removeItem("history");
      window.location.replace(history);
    } else {
      window.location.replace("/modules");
    }
  }

  const [audio] = useState(new Audio("/danger.mp3"));
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [escapePressed, setEscapePressed] = useState(false);
  const [personCount, setPersonCount] = useState(0);
  const [cameraActive, setcameraActive] = useState(false);
  const contentRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [warning, setwarning] = useState("");
  const [phoneDetected, setPhoneDetected] = useState(false);
  const [timer, setTimer] = useState(() => {
    const storedTimer = localStorage.getItem("lastminute");
    return storedTimer ? parseInt(storedTimer) : parseInt(params.get("t"));
  });
  const maxVolumeRef = useRef(0);
  const allowedwarnings = 3;
  let tempstate = true;
  const startTimer = () => {
    const timerInterval = setInterval(() => {
      localStorage.setItem("lastminute", timer - 1);
      setTimer((prevTimer) => prevTimer - 1); // Decrease timer by 1 second
    }, 60000); // Update timer every second

    // Clean up the interval on unmount or timer reaching 0
    return () => clearInterval(timerInterval);
  };

  useEffect(() => {
    // console.log("hello"+timer);
    if (timer <= 0) {
      openModal("Time's up");
      localStorage.removeItem("lastminute");
      handleClick(true, "Time's up");
    }
  }, [timer]);

  useEffect(() => {
    if (tempstate) {
      tempstate = false;
      //  console.log("hello");
      startTimer();
    }
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Don't change the tab";
        if (peoplewarning > 0) {
          openModal("You are not allowed to change the tab.");
          // enterFullScreen();
        }
        setpeoplewarning(peoplewarning - 1);
        audio
          .play()
          .catch((error) => console.error("Error playing audio:", error));
      } else {
        document.title = "Online Test";
        audio.pause();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [audio, peoplewarning]);

  useEffect(() => {
    const loadModelAndDetect = async () => {
      const model = await cocoSsd.load();
      setInterval(() => detectFrame(videoRef.current, model), 100);
    };

    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        videoRef.current.srcObject = stream;
        videoRef.current
          .play()
          .catch((err) => console.error("Error playing video:", err));
        setcameraActive(true);
        loadModelAndDetect();
        setcamerablocked(false);
      } catch (err) {
        // console.error('Error accessing camera:', err);
        if (err.name === "NotAllowedError" || err.name === "NotFoundError") {
          setcamerablocked(true);
          openModal(
            "You can't block the camera.Give access to camera manually"
          );
        }
      }
    };

    const detectFrame = async (video, model) => {
      if (video && video.readyState === 4) {
        const predictions = await model.detect(video);
        drawBoundingBoxes(predictions);
        checkForPhone(predictions);
        countPersons(predictions);
      }
    };

    const drawBoundingBoxes = (predictions) => {
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      predictions.forEach((prediction) => {
        if (prediction.class === "person") {
          const [x, y, width, height] = prediction.bbox;
          ctx.strokeStyle = "red";
          ctx.lineWidth = 2;
          ctx.strokeRect(x, y, width, height);
          ctx.fillStyle = "red";
          ctx.fillText(
            `${prediction.class} (${Math.round(prediction.score * 100)}%)`,
            x,
            y > 10 ? y - 5 : y + 10
          );
        }
      });
    };

    const countPersons = (predictions) => {
      const count = predictions.filter(
        (prediction) => prediction.class === "person"
      ).length;
      setPersonCount(count);
    };
    const checkForPhone = (predictions) => {
      const phoneDetected = predictions.some(
        (prediction) => prediction.class === "cell phone"
      );
      setPhoneDetected(phoneDetected);
    };

    startCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  useEffect(() => {
    if (personCount > 1) {
      if (peoplewarning >= 0 && cameraActive) {
        openModal(
          `Warning!! ${personCount} Person Detected in your camera frame.`
        );
        setpeoplewarning((prev) => prev - 1);
      }
    } else if (personCount === 0) {
      if (peoplewarning >= 0 && cameraActive) {
        openModal(
          `Warning!! Your face should be clearly visible infront of camera.`
        );
        setpeoplewarning((prev) => prev - 1);
      }
    }

    // enterFullScreen();
  }, [personCount]);

  useEffect(() => {
    if (peoplewarning < 0 && cameraActive && !camerablocked && !micblocked) {
      handleClick(
        true,
        "Cheating attempt detected during the online test. Disciplinary action will follow."
      );
    }
  }, [peoplewarning]);

  const handleAudioMonitoring = async () => {
    let temp = true;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        audioContextRef.current = new (window.AudioContext ||
          window.webkitAudioContext)();
        analyserRef.current = audioContextRef.current.createAnalyser();
        analyserRef.current.fftSize = 256;
        sourceRef.current =
          audioContextRef.current.createMediaStreamSource(stream);
        sourceRef.current.connect(analyserRef.current);
        dataArrayRef.current = new Uint8Array(
          analyserRef.current.frequencyBinCount
        );

        const detectVolume = () => {
          analyserRef.current.getByteFrequencyData(dataArrayRef.current);
          const volume = dataArrayRef.current[0];

          // console.log("Current volume:", volume);

          if (volume > 100 && temp) {
            openModal("You are not allowed to speak during the test.");
            temp = false;
            // console.log(peoplewarning-1);

            setpeoplewarning((prev) => prev - 1);

            // Stop the audio stream immediately
            stream.getTracks().forEach((track) => track.stop());
            clearInterval(audioIntervalRef.current);

            // Reset the volume to 0 instantly
            dataArrayRef.current[0] = 0;

            // Restart audio monitoring after 2 seconds
            setTimeout(() => {
              handleAudioMonitoring();
            }, 2000);
          }
        };

        audioIntervalRef.current = setInterval(detectVolume, 1000);
        setmicblocked(false);
      } catch (err) {
        if (err.name === "NotAllowedError" || err.name === "NotFoundError") {
          // setcamerablocked(true)
          setmicblocked(true);
          openModal(
            "You can't block the microphone.Give access to microphone manually"
          );
        }
      }
    }
  };

  useEffect(() => {
    handleAudioMonitoring();
    return () => clearInterval(audioIntervalRef.current);
  }, []);

  useEffect(() => {
    if (phoneDetected) {
      openModal("Phones are not allowed during test");
      setpeoplewarning((prev) => prev - 1);
    }
  }, [phoneDetected]);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(data) {
    setIsOpen(true);
    setwarning(data);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
    enterFullScreen();
  }
  useEffect(() => {
    const handleFullScreenChange = (e) => {
      if (!document.fullscreenElement) {
        enterFullScreen();
        setpeoplewarning((prev) => prev - 1);
        openModal("You cant't exist full screen");
      }
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Warning"
        style={{
          content: {
            width: "500px",
            margin: "auto",
            padding: "20px",
            height: "100px",
            borderRadius: "10px",
            backgroundColor: "#fff",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <div className="flex justify-between">
          <div>{warning}</div>
          <button onClick={closeModal}>
            <ImCross />
          </button>
        </div>
      </Modal>
      <div>
        <Toaster
          toastOptions={{
            duration: 500,
          }}
        />
        {camerablocked ? (
          <div className="flex justify-center w-full h-screen items-center font-semibold font-pop">
            If you want to continue the test then first turn on the camera.{" "}
          </div>
        ) : micblocked ? (
          <div className="flex justify-center w-full h-screen items-center font-semibold font-pop">
            If you want to continue the test then first turn on the microphone.{" "}
          </div>
        ) : (
          <div className="px-[6%] space-y-5 py-2 bg-white" ref={contentRef}>
            <div className="fixed bottom-0 left-0 font-pop">
              <div className="relative">
                <video
                  ref={videoRef}
                  width="200"
                  height="180"
                  className="rounded-xl"
                  style={{ display: "block" }}
                />
                <canvas
                  ref={canvasRef}
                  width="200"
                  height="180"
                  className="absolute top-0"
                />
              </div>
            </div>
            {!enablefullscreen ? (
              <div className="h-screen w-full flex justify-center items-center">
                <button
                  className="bg-[#1DBF73] text-white rounded p-2"
                  onClick={enterFullScreen}
                >
                  Enable full screeen to continue test
                </button>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center border p-3 rounded-lg font-pop">
                  <div
                    onClick={handlePrev}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <FaArrowLeft />
                    <p className="font-semibold">
                      Go Back to {data?.module} Module
                    </p>
                  </div>
                  <div className=" bg-white p-2 rounded-lg shadow-md">
                    Time Remaining: {timer} mins
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaLessThan
                      className={`h-8 w-8 text-xs rounded-full bg-slate-300 p-2 ${
                        index === 1
                          ? "cursor-not-allowed opacity-50"
                          : "cursor-pointer"
                      }`}
                      onClick={() => (index > 1 ? Previousquestion() : "")}
                    />
                    <FaGreaterThan
                      className={`h-8 w-8 text-xs rounded-full bg-slate-300 p-2 ${
                        index === Length
                          ? "cursor-not-allowed opacity-50"
                          : "cursor-pointer"
                      }`}
                      onClick={() => (index < Length ? Nextquestion() : "")}
                    />
                  </div>
                </div>
                <div className="flex justify-between h-[77vh] xsm:flex-col xsm:gap-5 font-pop">
                  <div className="w-[60%] rounded-xl border h-full shadow-xl xsm:w-full">
                    <div className="border-b-[2px] p-3 font-semibold">
                      {data?.module}
                    </div>
                    <div className="p-3 text-lg text-gray-700">
                      Q:{params.get("index")}
                      {data?.question?.question}
                    </div>
                  </div>
                  <div className="w-[35%] rounded-xl border min-h-full shadow-xl overflow-y-auto xsm:w-full xsm:min-h-[50vh] xsm:h-fit">
                    <div className="border-b-[2px] p-3 font-semibold">
                      Options
                    </div>
                    <div className="flex flex-col p-5 gap-y-5">
                      {data?.question?.options &&
                        Object.entries(data.question.options).map(
                          ([key, value]) => (
                            <label
                              key={key}
                              onClick={() =>
                                !data?.isSubmitted
                                  ? setSelected(key.toString())
                                  : ""
                              }
                              htmlFor={key.toString()}
                              className={`${
                                Selected === key.toString() ||
                                data?.submittedAnswer === key.toString()
                                  ? "border-[#1DBF73]"
                                  : ""
                              } flex p-3 border rounded-lg space-x-2 cursor-pointer`}
                            >
                              <input
                                name="option"
                                id={key.toString()}
                                type="radio"
                                checked={
                                  data?.isSubmitted
                                    ? data.submittedAnswer === key.toString()
                                    : Selected === key.toString()
                                }
                                className="accent-[#1DBF73]"
                                readOnly
                              />
                              <p>{value}</p>
                            </label>
                          )
                        )}
                      <div className="flex justify-end space-x-2">
                        <button
                          className={`py-2 px-4 rounded-xl bg-[#1DBF73] text-white ${
                            data?.isSubmitted
                              ? "cursor-not-allowed opacity-50"
                              : ""
                          }`}
                          onClick={() =>
                            !data?.isSubmitted ? handleSubmit() : ""
                          }
                        >
                          Save
                        </button>
                        {Length === parseInt(params.get("index")) && (
                          <button
                            className="py-2 px-4 rounded-xl bg-[#1DBF73] text-white"
                            onClick={() => handleClick(false, "")}
                          >
                            Finish
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {show && (
              <div className="w-full h-screen fixed top-0 left-0 bg-[#b4cca1] opacity-80">
                <Spinner />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
