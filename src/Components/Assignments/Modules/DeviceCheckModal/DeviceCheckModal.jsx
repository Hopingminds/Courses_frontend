import React, { useEffect, useRef, useState } from "react";
import { TfiControlForward, TfiControlBackward } from "react-icons/tfi";
import { useSearchParams } from "react-router-dom";
import { BASE_URL } from "../../../../Api/api";

const DeviceCheckPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [search,setserch]=useSearchParams()
  const [Proctoringdata, setProctoringdata] = useState([])
  const [selectedOptions, setSelectedOptions] = useState({
    1: 0, 
    2: 0,
    3: 0,
  });

  const [show, setshow] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [cameraError, setCameraError] = useState('');
  const [microphoneError, setMicrophoneError] = useState('');
  const streamRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const [micworking, setmicworking] = useState(false)
  const [cameraworking, setcameraworking] = useState(false)

  const startCamera = async () => {
    try {
      const cameraStream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = cameraStream;
      }
      streamRef.current = cameraStream;
      setcameraworking(true)
    } catch (err) {
      console.error("Error accessing camera:", err);
      setCameraError("Could not access camera. Please check permissions.");
      if (err.name === 'NotAllowedError' || err.name === 'SecurityError') {
        alert("Camera access denied. Please allow camera access.");
      }
    }
  };

  const startMicrophone = async () => {
    try {
      const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      analyserRef.current = audioContextRef.current.createAnalyser();
      const source = audioContextRef.current.createMediaStreamSource(audioStream);
      source.connect(analyserRef.current);
      analyserRef.current.fftSize = 256;

      visualizeMicrophone();

      streamRef.current = audioStream;
      setmicworking(true)
    } catch (err) {
      console.error("Error accessing microphone:", err);
      setMicrophoneError("Could not access microphone. Please check permissions.");
      if (err.name === 'NotAllowedError' || err.name === 'SecurityError') {
        alert("Microphone access denied. Please allow microphone access.");
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

      canvasCtx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / bufferLength) * 2.5;
      let barHeight;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        canvasCtx.fillStyle = `rgb(${barHeight + 100},50,50)`;
        canvasCtx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);

        x += barWidth + 1;
      }
    };

    draw();
  };

  const stopMediaTracks = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
  };


  const enterFullScreen = () => {
    if (document.fullscreenEnabled) {
      const element = document.documentElement; // or any specific element
      if (element.requestFullscreen) {
        element.requestFullscreen().catch((err) => {
          console.error("Error attempting to enable full-screen mode:", err.message);
        });
      } else {
        console.warn("Fullscreen API is not supported on this browser.");
      }
    } else {
      console.warn("Fullscreen mode is not allowed.");
    }
  };
  useEffect(() => {
    async function Fetchdata() {
      try {
        let token = localStorage.getItem("COURSES_USER_TOKEN");
        setshow(true);
        let url = BASE_URL + "/getusermoduleassessment/"+search.get('module_id');
        const data = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const response = await data.json();
        setProctoringdata(response?.data?.ProctoringFor)
        setshow(false)
        // setshow(false)
      } catch (error) {
        console.log(error);
      }
    }
    Fetchdata();
  }, []);
  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const handleRadioChange = (step, value) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [step]: value,
    }));
  };
function handleVerify(key){
  if(key==='mic'){
    startMicrophone()
  }
  else if(key=='webcam'){
    startCamera()
  }
}
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const totalOptions = 3;
  const percentage = (selectedOptions[currentStep] / totalOptions) * 100;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

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
               {!micworking ? <button onClick={()=>startMicrophone()}>Verify</button> :  <button >Verified</button>}
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
                {!cameraworking ? <button onClick={startCamera}>Verify</button> : <button >Verified</button>}
                {/* <input
                  type="radio"
                  id={`option-${i + 1}`}
                  name="webcam-option"
                  checked={selectedOptions[1] === i + 1}
                  onChange={() => handleRadioChange(1, i + 1)}
                  className="form-radio h-6 w-6 text-green-600 bg-gray-200 checked:bg-green-600 checked:border-transparent focus:outline-none"
                /> */}
              </div>



            {/* <div className="flex items-center border rounded-xl shadow-lg bg-gray-200 justify-between py-4 px-3 mt-4">
              <div className="flex flex-col">
                <p className="font-semibold">Permission Request</p>
                <p className="text-[12px]">
                  Provide access to the webcam since it is mandatory to take this test.
                </p>
              </div>
              <button
                type="button"
                id="select-webcam"
                name="webcam-option"
                className="rounded-lg h-10 w-[30%] text-white bg-green-600 focus:outline-none"
              >
                Share Webcam
              </button>
            </div> */}
          </div>
        );
      // case 2:
      //   return (
      //     <div className="p-4 space-y-4">
      //       {[...Array(3).keys()].map((i) => (
      //         <div key={i} className="flex items-center p-4 border rounded-lg shadow-md">
      //           <div className="flex-shrink-0 mr-4">
      //             <svg
      //               xmlns="http://www.w3.org/2000/svg"
      //               className="w-6 h-6 text-gray-600"
      //               fill="none"
      //               viewBox="0 0 24 24"
      //               stroke="currentColor"
      //             >
      //               <path
      //                 strokeLinecap="round"
      //                 strokeLinejoin="round"
      //                 strokeWidth="2"
      //                 d="M6 10h6m4 0h4m-8 6h4m-6 0h2m-6-6h2m8 6h2m-6-6h4m0 0V6m0 4h-4m4 0h4m-4 0v6m0 0h4"
      //               />
      //             </svg>
      //           </div>
      //           <p className="flex-1">Option {i + 1}</p>
      //           <input
      //             type="radio"
      //             id={`option-${i + 1}`}
      //             name="webcam-option"
      //             checked={selectedOptions[2] === i + 1}
      //             onChange={() => handleRadioChange(2, i + 1)}
      //             className="form-radio h-6 w-6 text-green-600 bg-gray-200 checked:bg-green-600 checked:border-transparent focus:outline-none"
      //           />
      //         </div>
      //       ))}
      //     </div>
      //   );
      // case 3:
        return (
          <div className="p-4">
            <p>Step 3 Content</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-full h-full mx-auto p-4 md:p-8 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-row md:flex-col  xsm:flex-col sm:flex-col ">
        {/* First Part - 40% (Fixed) */}
        <div className="md:w-full w-full p-6 bg-gray-100 flex flex-col justify-center items-center gap-5">
         {/* <div className="w-[400px] h-[300px] border flex justify-center items-center">
            Camera
         </div>
         <div className="w-[400px] h-[300px] border flex justify-center items-center">
            Microphone
         </div> */}
                 <video ref={videoRef} autoPlay style={{ width: '100%', maxWidth: '400px', marginTop: '20px' }} />
                 <canvas ref={canvasRef} width="800" height="100" style={{ marginTop: '20px', border: '1px solid black' }}></canvas>

        </div>

        {/* Second Part - 60% (Dynamic) */}
        <div className="md:w-full w-full p-6 bg-white relative">
          {/* Fixed progress bars at the top */}
          {/* <div className="w-full flex flex-col md:flex-row justify-center p-2 z-50 shadow-lg">
            <div className="md:w-2/5 w-full mb-4 md:mb-0">
              <p className="text-lg text-gray-700 mb-2">System</p>
              <div className="h-2 bg-gray-300 rounded">
                <div
                  className="bg-blue-500 h-2 rounded"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </div>
            <div className="md:w-2/5 w-full">
              <p className="text-lg text-gray-700 mb-2">WebCam</p>
              <div className="h-2 bg-gray-300 rounded">
                <div
                  className="bg-green-500 h-2 rounded"
                  style={{ width: "30%" }}
                ></div>
              </div>
            </div>
          </div> */}

          {/* Circular Progress Bar */}
          <div className="flex items-center justify-center py-4">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex flex-col items-center">
           

              {/* Percentage Text */}
              {/* <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <h2 className="text-xs sm:text-base">PASSED</h2>
                <span className="text-center text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-500 flex justify-center">
                  {selectedOptions[currentStep]}/{totalOptions}
                </span>
              </div> */}
            </div>
          </div>

          {/* Step Content */}
          <div className="py-4">{renderStepContent()}</div>
         {(micworking && cameraworking )? <button className="bg-green-500 text-white rounded p-2 mx-auto">Continue test</button> : ''}
          {/* Navigation Buttons */}
          {/* <div className="absolute bottom-4 left-0 right-0 flex justify-between px-6">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              onClick={handlePrevious}
              disabled={currentStep === 1}
            >
              <TfiControlBackward />
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              onClick={handleNext}
              disabled={currentStep === 3}
            >
              <TfiControlForward />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DeviceCheckPage;
