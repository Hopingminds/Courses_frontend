import { useEffect, useState, useRef } from "react";
import { FaArrowLeft, FaGreaterThan, FaLessThan } from "react-icons/fa";
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs';
import { useNavigate, useSearchParams } from "react-router-dom";
import { BASE_URL } from "../../../Api/api";
import Spinner from "../../Spinner";
import toast, { Toaster } from "react-hot-toast";
import Restriction from "../../Restrictions";

export default function Question() {
  const [Selected, setSelected] = useState();
  const [data, setdata] = useState([]);
  const [show, setshow] = useState(false);
  const [params, setparams] = useSearchParams();
  const [index, setindex] = useState(1);
  
  const [tabwarning, settabwarning] = useState(0);
  let [peoplewarning, setpeoplewarning] = useState(4);
  let navigate = useNavigate();
  const [Length, setLength] = useState();
  let token = localStorage.getItem("COURSES_USER_TOKEN");

  async function Fetchdata() {
    try {
      let url = `${BASE_URL}/getmodulequestions?module_id=${params.get("module_id")}&index=${params.get("index")}`;
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
        navigate(`/questions?module_id=${params.get("module_id")}&index=${index + 1}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  function Nextquestion() {
    if (index <= Length) {
      Fetchdata();
      setindex(index + 1);
      navigate(`/questions?module_id=${params.get("module_id")}&index=${index + 1}`);
    }
  }

  function Previousquestion() {
    if (index >= 1) {
      Fetchdata();
      setindex(index - 1);
      navigate(`/questions?module_id=${params.get("module_id")}&index=${index - 1}`);
    }
  }

  async function handleClick() {
    try {
      let url = `${BASE_URL}/submitmodule`;
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
        toast.success("Submitted Successfully");
        window.location.replace('/submitted');
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handlePrev() {
    if (localStorage.getItem('history')) {
      let history = localStorage.getItem('history');
      localStorage.removeItem('history');
      navigate(history);
    } else {
      navigate('/modules');
    }
  }

  const [audio] = useState(new Audio('/danger.mp3'));
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [escapePressed, setEscapePressed] = useState(false);
  const [personCount, setPersonCount] = useState(0);
  const contentRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const allowedwarnings = 3;

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Don't change the tab";
        if (peoplewarning > 0) {
          setpeoplewarning(peoplewarning - 1);
          alert(`You are not allowed to change the tab.`);
          enterFullScreen();
        }
        audio.play().catch(error => console.error('Error playing audio:', error));
      } else {
        document.title = 'Online Test';
        audio.pause();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [audio, peoplewarning]);

  const enterFullScreen = () => {
    const content = document.documentElement;
    if (content.requestFullscreen) {
      content.requestFullscreen().then(() => {}).catch(err => console.error(err));
    } else if (content.mozRequestFullScreen) {
      content.mozRequestFullScreen().then(() => {}).catch(err => console.error(err));
    } else if (content.webkitRequestFullscreen) {
      content.webkitRequestFullscreen().then(() => {}).catch(err => console.error(err));
    } else if (content.msRequestFullscreen) {
      content.msRequestFullscreen().then(() => {}).catch(err => console.error(err));
    }
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      const isFullScreenNow = !!(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
      if (!isFullScreenNow && escapePressed) {
        alert('You have pressed the Escape key to exit full screen mode.');
        enterFullScreen();
        setEscapePressed(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);
    document.addEventListener('mozfullscreenchange', handleFullScreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullScreenChange);
    document.addEventListener('msfullscreenchange', handleFullScreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullScreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullScreenChange);
      document.removeEventListener('msfullscreenchange', handleFullScreenChange);
    };
  }, []);

  useEffect(() => {
    const detectDevTools = () => {
      const devtools = /./;
      devtools.toString = function() {
        this.opened = true;
      };
      if (devtools.opened) {
        alert('Developer tools are open. Taking screenshots is not allowed.');
      }
    };

    window.addEventListener('devtoolschange', detectDevTools);
    return () => {
      window.removeEventListener('devtoolschange', detectDevTools);
    };
  }, []);

  useEffect(() => {
    const loadModelAndDetect = async () => {
      const model = await cocoSsd.load();
      setInterval(() => detectFrame(videoRef.current, model), 100);
    };

    const startCamera = () => {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        videoRef.current.srcObject = stream;
        videoRef.current.play().catch(err => console.error('Error playing video:', err));
        loadModelAndDetect();
      }).catch(err => console.error('Error accessing camera:', err));
    };

    const detectFrame = async (video, model) => {
      if (video && video.readyState === 4) {
        const predictions = await model.detect(video);
        drawBoundingBoxes(predictions);
        countPersons(predictions);
      }
    };

    const drawBoundingBoxes = (predictions) => {
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      predictions.forEach(prediction => {
        if (prediction.class === 'person') {
          const [x, y, width, height] = prediction.bbox;
          ctx.strokeStyle = 'red';
          ctx.lineWidth = 2;
          ctx.strokeRect(x, y, width, height);
          ctx.fillStyle = 'red';
          ctx.fillText(
            `${prediction.class} (${Math.round(prediction.score * 100)}%)`,
            x,
            y > 10 ? y - 5 : y + 10
          );
        }
      });
    };

    const countPersons = (predictions) => {
      const count = predictions.filter(prediction => prediction.class === 'person').length;
      setPersonCount(count);
    };

    startCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  useEffect(() => {
    if (personCount > 1) {
      setpeoplewarning(peoplewarning-1);
      enterFullScreen();
    } else if (personCount === 0) {
      if(peoplewarning>=0){
        alert(`${personCount} Person Detected in your camera frame. Only ${peoplewarning-1} warnings left!!`);

      }      
      setpeoplewarning(peoplewarning-1);
      enterFullScreen();
    }
  }, [personCount]);

  useEffect(() => {
    if (peoplewarning <= 0 ) {
      handleClick();
    }
  }, [peoplewarning]);

  useEffect(() => {
    enterFullScreen();
  }, [window.location.pathname]);

  return (
    <>
      <Toaster />
      <div className="px-[6%] space-y-5 py-2 bg-white" ref={contentRef}>
        <div className='fixed bottom-0 left-0'>
          <div className='relative'>
            <video ref={videoRef} width="200" height="180" className='rounded-xl' style={{ display: 'block' }} />
            <canvas ref={canvasRef} width="200" height="180" className='absolute top-0' />
          </div>
        </div>
        <div className="flex justify-between items-center border p-3 rounded-lg">
          <div onClick={handlePrev} className="flex items-center space-x-3 cursor-pointer">
            <FaArrowLeft />
            <p className="font-semibold">Go Back to {data?.module} Module</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaLessThan
              className={`h-8 w-8 text-xs rounded-full bg-slate-300 p-2 ${index === 1 ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
              onClick={() => (index > 1 ? Previousquestion() : "")}
            />
            <FaGreaterThan
              className={`h-8 w-8 text-xs rounded-full bg-slate-300 p-2 ${index === Length ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
              onClick={() => (index < Length ? Nextquestion() : "")}
            />
          </div>
        </div>
        <div className="flex justify-between h-[77vh] xsm:flex-col xsm:gap-5">
          <div className="w-[60%] rounded-xl border h-full shadow-xl xsm:w-full">
            <div className="border-b-[2px] p-3 font-semibold">{data?.module}</div>
            <div className="p-3 text-lg text-gray-700">{data?.question?.question}</div>
          </div>
          <div className="w-[35%] rounded-xl border min-h-full shadow-xl overflow-y-auto xsm:w-full xsm:min-h-[50vh] xsm:h-fit">
            <div className="border-b-[2px] p-3 font-semibold">Options</div>
            <div className="flex flex-col p-5 gap-y-5">
              {data?.question?.options && Object.entries(data.question.options).map(([key, value]) => (
                <label
                  key={key}
                  onClick={() => !data?.isSubmitted ? setSelected(key.toString()) : ""}
                  htmlFor={key.toString()}
                  className={`${Selected === key.toString() || data?.submittedAnswer === key.toString() ? "border-[#1DBF73]" : ""} flex p-3 border rounded-lg space-x-2 cursor-pointer`}
                >
                  <input
                    name="option"
                    id={key.toString()}
                    type="radio"
                    checked={data?.isSubmitted ? data.submittedAnswer === key.toString() : Selected === key.toString()}
                    className="accent-[#1DBF73]"
                    readOnly
                  />
                  <p>{value}</p>
                </label>
              ))}
              <div className="flex justify-end space-x-2">
                <button
                  className={`py-2 px-4 rounded-xl bg-[#1DBF73] text-white ${data?.isSubmitted ? "cursor-not-allowed opacity-50" : ""}`}
                  onClick={() => !data?.isSubmitted ? handleSubmit() : ""}
                >
                  Save
                </button>
                {Length === parseInt(params.get("index")) && (
                  <button className="py-2 px-4 rounded-xl bg-[#1DBF73] text-white" onClick={handleClick}>
                    Finish
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        {show && (
          <div className="w-full h-screen fixed top-0 left-0 bg-[#b4cca1] opacity-80">
            <Spinner />
          </div>
        )}
      </div>
    </>
  );
}