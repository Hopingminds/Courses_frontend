import React from "react";
import { FaSortDown } from "react-icons/fa";

const FreelancingPage = () => {
  return (
    <div className="py-10 flex flex-col items-center justify-center text-center">
      <div className="flex flex-col gap-7 items-center max-w-screen-lg mx-auto px-4">
        <p className="text-4xl sm:text-4xl md:text-[60px] xsm:w-full font-bold font-pop">
          Freelancing Opportunities for Graduates
        </p>

        <p className="text-base sm:text-lg md:text-xl xsm:w-full xl:text-xl font-pop px-10">
          At Hoping Minds, we believe in empowering our students with real-world
          opportunities. Once you complete your course, you can unlock a wide
          range of freelancing jobs tailored to your skills and interests.
        </p>
        <p className="text-base sm:text-lg md:text-xl xsm:w-full xl:text-xl px-10 font-pop">
          Use our eligibility checker tool below to see if you qualify for these
          exciting opportunities and take the first step towards your
          freelancing career.
        </p>
      </div>

      <div className="mt-8 flex sm:flex-col xsm:flex-col xl:flex-row lg:flex-row md:flex-col 2xl:flex-row gap-4 justify-center items-center w-full sm:w-[40vw] max-w-screen-lg px-4 py-10">
        {/* Input Dropdown */}
        <div className="relative w-full xl:w-[30vw]">
          <select className="appearance-none border-2 border-green-600 h-[6vh] rounded-md p-2 w-full xsm:h-[5vh]">
            <option value="" disabled selected className="text-green-600 font-pop text-lg">
            Select Your Course Completion
            </option>
            <option value="course1">Course 1</option>
            <option value="course2">Course 2</option>
            <option value="course3">Course 3</option>
          </select>
          {/* Dropdown Icon */}
          <FaSortDown className="absolute top-1/3 right-2 transform -translate-y-1/2 pointer-events-none h-[5vh] w-[2vw] text-[#1DBF73] cursor-pointer" />
        </div>

        {/* Check Eligibility Button */}
        <button className="bg-[#1DBF73] h-[6vh] text-white py-2 px-4 rounded-md w-full xl:w-[15vw] font-pop text-lg">
          Check Eligibility
        </button>
      </div>
    </div>
  );
};

export default FreelancingPage;
