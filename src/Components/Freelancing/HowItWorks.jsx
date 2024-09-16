import React, { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";

const HowItWorks = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const content = {
    1: {
      heading: "Steps To Explore Freelancing Opportunities",
      text: "Freelancing allows you to work on diverse projects with flexibility. At Hoping Minds, we connect you to opportunities across various fields, helping you build experience, grow your portfolio, and earn income. Explore our platform to find projects that match your skills and goals.",
    },
    2: {
      heading: "Completing A Course",
      text: "To start your freelancing journey, it’s essential to gain the right skills. Enroll in one of our tailored courses that provide practical knowledge, hands-on experience, and industry-recognized certifications. These courses will equip you with the tools to succeed and stand out in a competitive freelancing market.",
    },
    3: {
      heading: "Check Eligibility",
      text: "Before applying for freelance projects, it’s important to ensure you meet the necessary requirements. Review the project details, verify your certifications, and update your portfolio to reflect your latest skills and experience. This step guarantees that you're  prepared to showcase your expertise to potential clients.",
    },
    4: {
      heading: "Apply for Opportunities",
      text: "Once you're eligible, browse through a range of freelancing opportunities available on our platform. Craft a personalized proposal for each project, emphasizing your strengths and past experiences. Attach your portfolio and certifications to make a strong case for why you're the best fit for the project.",
    },
  };

  const handleClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col items-center mt-[10vh] py-10">
      {/* Wrapper for both buttons and content */}
      <div className="relative border-2 border-gray-300 rounded-lg w-full max-w-[90vw] md:max-w-[70vw] lg:max-w-[50vw] bg-[#0F2027] text-white p-4 py-[10vh]">
        {/* Options row */}
        <div className="absolute top-[-3.5rem] left-1/2 transform -translate-x-1/2 flex justify-between w-full px-5 md:px-10">
          {/* Option 1 */}
          <button
            className={`relative p-2  ${
              selectedOption === 1 ? "bg-green-600 text-white" : "bg-green-500"
            } rounded-full h-[110px] w-[110px] xsm:h-[70px] xsm:w-[70px] md:h-[90px] md:w-[90px] flex items-center justify-center transition-all duration-300 ease-in-out`}
            onClick={() => handleClick(1)}
          >
            <div
              className={`absolute transition-all duration-500 transform ${
                selectedOption === 1
                  ? "translate-x-0 opacity-100 scale-110"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <FaGraduationCap className="text-[60px] xsm:text-[30px]" />
            </div>
            {selectedOption !== 1 && (
              <span className="absolute text-3xl">1</span>
            )}
          </button>

          {/* Option 2 */}
          <button
            className={`relative p-2  ${
              selectedOption === 2 ? "bg-green-600 text-white" : "bg-green-500"
            } rounded-full h-[110px] w-[110px] xsm:h-[70px] xsm:w-[70px] md:h-[90px] md:w-[90px] flex items-center justify-center transition-all duration-300 ease-in-out`}
            onClick={() => handleClick(2)}
          >
            <div
              className={`absolute transition-all duration-500 transform ${
                selectedOption === 2
                  ? "translate-x-0 opacity-100 scale-110"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <img src="/icon-3.png" alt="Check Circle" />
            </div>
            {selectedOption !== 2 && (
              <span className="absolute text-3xl">2</span>
            )}
          </button>

          {/* Option 3 */}
          <button
            className={`relative p-2  ${
              selectedOption === 3 ? "bg-green-600 text-white" : "bg-green-500"
            } rounded-full h-[110px] w-[110px] xsm:h-[70px] xsm:w-[70px] md:h-[90px] md:w-[90px] flex items-center justify-center transition-all duration-300 ease-in-out`}
            onClick={() => handleClick(3)}
          >
            <div
              className={`absolute transition-all duration-500 transform ${
                selectedOption === 3
                  ? "translate-x-0 opacity-100 scale-110"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <img src="/icon-2.png" alt="Book Reader" />
            </div>
            {selectedOption !== 3 && (
              <span className="absolute text-3xl">3</span>
            )}
          </button>

          {/* Option 4 */}
          <button
            className={`relative p-2  ${
              selectedOption === 4 ? "bg-green-600 text-white" : "bg-green-500"
            } rounded-full h-[110px] w-[110px] xsm:h-[70px] xsm:w-[70px] md:h-[90px] md:w-[90px] flex items-center justify-center transition-all duration-300 ease-in-out`}
            onClick={() => handleClick(4)}
          >
            <div
              className={`absolute transition-all duration-500 transform ${
                selectedOption === 4
                  ? "translate-x-0 opacity-100 scale-110"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <img src="/Icon1.png" alt="Check" />
            </div>
            {selectedOption !== 4 && (
              <span className="absolute text-3xl">4</span>
            )}
          </button>
        </div>

        {/* Content box with sliding from left to right */}
        <div
          className={`py-auto font-pop transition-transform duration-500 transform ${
            selectedOption
              ? "-translate-x-0 opacity-100"
              : "-translate-x-20 opacity-100"
          }`}
        >
          <h2 className="text-2xl font-semibold mb-4">
            {content[selectedOption].heading}
          </h2>
          <p>{content[selectedOption].text}</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
