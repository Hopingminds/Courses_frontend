import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { BASE_URL } from "../../../../Api/api";
import toast, { Toaster } from "react-hot-toast";

const DeviceCheckPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [search, setserch] = useSearchParams();
  const [Proctoringdata, setProctoringdata] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({
    1: 0,
    2: 0,
    3: 0,
  });

  const [show, setshow] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [cameraError, setCameraError] = useState("");
  const [microphoneError, setMicrophoneError] = useState("");
  const streamRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const [micworking, setmicworking] = useState(false);
  const [cameraworking, setcameraworking] = useState(false);
  const startCamera = async () => {
    try {
      const cameraStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = cameraStream;
        videoRef.current.play();
      }
      streamRef.current = cameraStream;
      setcameraworking(true);
    } catch (err) {
      console.error("Error accessing camera:", err);
      setCameraError("Could not access camera. Please check permissions.");
      toast.error("Could not access camera. Please check permissions");
      if (err.name === "NotAllowedError" || err.name === "SecurityError") {
        toast.error("Camera access denied. Please allow camera access.");
      }
    }
  };

  const startMicrophone = async () => {
    try {
      const audioStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      audioContextRef.current = new (window.AudioContext ||
        window.webkitAudioContext)();
      analyserRef.current = audioContextRef.current.createAnalyser();
      const source =
        audioContextRef.current.createMediaStreamSource(audioStream);
      source.connect(analyserRef.current);
      analyserRef.current.fftSize = 256;

      visualizeMicrophone();

      streamRef.current = audioStream;
      setmicworking(true);
    } catch (err) {
      console.error("Error accessing microphone:", err);
      setMicrophoneError(
        "Could not access microphone. Please check permissions."
      );
      toast.error("Could not access microphone. Please check permissions");
      if (err.name === "NotAllowedError" || err.name === "SecurityError") {
        toast.error(
          "Microphone access denied. Please allow microphone access."
        );
      }
    }
  };

  const visualizeMicrophone = () => {
    const canvas = canvasRef.current;
    const canvasCtx = canvas.getContext("2d");
    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      requestAnimationFrame(draw);

      analyserRef.current.getByteFrequencyData(dataArray);

      canvasCtx.fillStyle = "rgba(0, 0, 0, 0.5)";
      canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / bufferLength) * 2.5;
      let barHeight;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        canvasCtx.fillStyle = `rgb(${barHeight + 100},50,50)`;
        canvasCtx.fillRect(
          x,
          canvas.height - barHeight / 2,
          barWidth,
          barHeight / 2
        );

        x += barWidth + 1;
      }
    };

    draw();
  };

  async function handleContinue() {
    let token = localStorage.getItem("COURSES_USER_TOKEN");
    try {
      const data = await fetch(BASE_URL + "/startmoduleassessment", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          moduleAssessmentid: search.get("moduleAssessmentid"),
        }),
      });
      const response = await data.json();
      if (response.success) {
        window.location.replace(
          `/question?moduleAssessmentid=${search.get(
            "moduleAssessmentid"
          )}&index=1&t=${search.get("t")}`
        );
      } else {
        toast.error(response.message);
      }
    } catch (error) {}
  }
  useEffect(() => {
    async function Fetchdata() {
      try {
        let token = localStorage.getItem("COURSES_USER_TOKEN");
        setshow(true);
        let url =
          BASE_URL +
          "/getusermoduleassessment/" +
          search.get("moduleAssessmentid");
        const data = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const response = await data.json();
        setProctoringdata(response?.data?.ProctoringFor);
        setshow(false);
        await startCamera();
        await startMicrophone();
      } catch (error) {
        console.log(error);
      }
    }
    Fetchdata();
  }, []);

  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const totalOptions = 3;
  const percentage = (selectedOptions[currentStep] / totalOptions) * 100;

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="p-4 space-y-4">
            <div className="flex items-center p-4 border rounded-lg shadow-md">
              <div className="flex-shrink-0 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 10h6m4 0h4m-8 6h4m-6 0h2m-6-6h2m8 6h2m-6-6h4m0 0V6m0 4h-4m4 0h4m-4 0v6m0 0h4"
                  />
                </svg>
              </div>
              <p className="flex-1">Microphone</p>
              {!micworking ? (
                <button onClick={() => startMicrophone()}>Verify</button>
              ) : (
                <button>Verified</button>
              )}
            </div>
            <div className="flex items-center p-4 border rounded-lg shadow-md">
              <div className="flex-shrink-0 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 10h6m4 0h4m-8 6h4m-6 0h2m-6-6h2m8 6h2m-6-6h4m0 0V6m0 4h-4m4 0h4m-4 0v6m0 0h4"
                  />
                </svg>
              </div>
              <p className="flex-1">Camera</p>
              {!cameraworking ? (
                <button onClick={startCamera}>Verify</button>
              ) : (
                <button>Verified</button>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Toaster />

      <div className="max-w-full h-full mx-auto p-4 md:p-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-row md:flex-col  xsm:flex-col sm:flex-col ">
          {/* First Part - 40% (Fixed) */}
          <div className="md:w-full w-full p-6 bg-gray-100 flex flex-col justify-center items-center gap-5 ">
            {/* { !cameraworking ? <div className="w-[400px] h-[300px] border-2 shadow-lg flex justify-center items-center">
            Camera
         </div> :  ''} */}
            {/* {  !micworking ?   <div className="w-[400px] h-[300px] border-2 shadow-lg flex justify-center items-center">
            Microphone
         </div> :''
        } */}
            <video
              ref={videoRef}
              autoPlay
              style={{ width: "100%", maxWidth: "400px", marginTop: "20px" }}
            />
            <canvas
              ref={canvasRef}
              width="400"
              style={{ marginTop: "20px" }}
            ></canvas>
          </div>

          {/* Second Part - 60% (Dynamic) */}
          <div className="md:w-full w-full p-6 bg-white relative">
            {/* Step Content */}
            <div className="py-4">{renderStepContent()}</div>
            {micworking && cameraworking ? (
              <button
                className="bg-green-500 text-white rounded p-2 mx-auto"
                onClick={handleContinue}
              >
                Continue test
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DeviceCheckPage;
