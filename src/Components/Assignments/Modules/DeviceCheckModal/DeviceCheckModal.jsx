import React, { useState } from "react";
import { TfiControlForward, TfiControlBackward } from "react-icons/tfi";

const DeviceCheckModal = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({
    1: 0, // Number of selected options for step 1
    2: 0, // Number of selected options for step 2
    3: 0, // Number of selected options for step 3
  });

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

  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const totalOptions = 3; // Total number of options per step
  const percentage = (selectedOptions[currentStep] / totalOptions) * 100;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
            <div className="p-4 space-y-4">
              {[...Array(3).keys()].map((i) => (
                <div key={i} className="flex items-center p-4 border rounded-lg shadow-md">
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
                  <p className="flex-1">Option {i + 1}</p>
                  <input
                    type="radio"
                    id={`option-${i + 1}`}
                    name="webcam-option"
                    checked={selectedOptions[1] === i + 1}
                    onChange={() => handleRadioChange(1, i + 1)}
                    className="form-radio h-6 w-6 text-green-600 bg-gray-200 checked:bg-green-600 checked:border-transparent focus:outline-none"
                  />
                </div>
              ))}
        
              <div className="flex items-center border rounded-xl shadow-lg bg-gray-200 justify-between py-4 px-3 mt-4">
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
              </div>
            </div>
          );
      case 2:
        return (
          <div className="p-4 space-y-4">
            {[...Array(3).keys()].map((i) => (
              <div key={i} className="flex items-center p-4 border rounded-lg shadow-md">
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
                <p className="flex-1">Option {i + 1}</p>
                <input
                  type="radio"
                  id={`option-${i + 1}`}
                  name="webcam-option"
                  checked={selectedOptions[2] === i + 1}
                  onChange={() => handleRadioChange(2, i + 1)}
                  className="form-radio h-6 w-6 text-green-600 bg-gray-200 checked:bg-green-600 checked:border-transparent focus:outline-none"
                />
              </div>
              
            ))}
          </div>
        );
      case 3:
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
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div
        id="static-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed inset-0 z-50 flex items-center justify-center w-full p-4 md:p-0"
      >
        <div className="relative bg-white rounded-lg shadow-lg max-w-7xl w-full h-[70vh] overflow-hidden flex">
          {/* First Part - 40% (Fixed) */}
          <div className="w-2/5 p-6 bg-gray-100">
            <p className="text-gray-600 mt-2">First part</p>
            {/* Any other static content for the first part */}
          </div>

          {/* Second Part - 60% (Dynamic) */}
          <div className="w-3/5 p-6 bg-white relative">
            {/* Fixed progress bars at the top */}
            <div className="top-0 left-0 w-full flex justify-center p-2 z-50 shadow-lg">
              <div className="w-2/5">
                <p className="text-lg text-gray-700 mb-2">System</p>
                <div className="h-2 bg-gray-300 rounded w-[200px]">
                  <div
                    className="bg-blue-500 h-2 rounded"
                    style={{ width: "40%" }} // Adjust width as needed
                  ></div>
                </div>
              </div>
              <div className="w-2/5">
                <p className="text-lg text-gray-700 mb-2">WebCam</p>
                <div className="h-2 bg-gray-300 rounded w-[200px]">
                  <div
                    className="bg-green-500 h-2 rounded"
                    style={{ width: "30%" }} // Adjust width as needed
                  ></div>
                </div>
              </div>
            </div>

            {/* Circular Progress Bar */}
            <div className="flex items-center justify-center py-4">
              <div className="relative w-32 h-32 flex flex-col items-center">
                <svg
                  className="w-full h-full -rotate-90"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background Circle */}
                  <circle
                    cx="18"
                    cy="18"
                    r={radius}
                    fill="none"
                    className="stroke-current text-gray-200 dark:text-neutral-700"
                    strokeWidth="2"
                  ></circle>
                  {/* Progress Circle */}
                  <circle
                    cx="18"
                    cy="18"
                    r={radius}
                    fill="none"
                    className="stroke-current text-blue-600 dark:text-blue-500"
                    strokeWidth="2"
                    strokeDasharray={`${circumference}`}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                  ></circle>
                </svg>

                {/* Percentage Text */}
                <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <h2>PASSED</h2>
                  <span className="text-center text-2xl font-bold text-blue-600 dark:text-blue-500 flex justify-center ">
                    {selectedOptions[currentStep]}/{totalOptions}
                  </span>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <div
              className="absolute top-4 right-4 text-gray-600 cursor-pointer text-2xl"
              onClick={onClose}
            >
              &times;
            </div>

            {/* Step Content */}
            <div className="py-4">{renderStepContent()}</div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-between px-6">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceCheckModal;
