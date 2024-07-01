import React from "react";
import { Link } from "react-router-dom";
import "./BuildCV.css";
import BuilderBg from "../../Assests/Images/builcv-bg.png";

const BuildCV = () => {
  return (
    <div
      style={{ backgroundImage: `url(${BuilderBg})` }}
      className="w-full flex flex-col gap-16 justify-center items-center text-white font-pop  py-[4%] mt-20 md:gap-12 sm:gap-10 xsm:gap-6 xsm:py-[5%]"
    >
      <div className="flex flex-col gap-8 justify-center items-center w-[70%] md:gap-6 sm:gap-5 xsm:w-[80%] xsm:gap-4">
        <p className="font-semibold text-[36px] text-center md:text-[30px] md:leading-tight xsm:text-[18px] xsm:leading-tighter sm:text-[18px] ">
          Create your professional Resume with our designs
        </p>
        <p className="text-[20px] text-center md:text-[14px] md:leading-tight xsm:text-[12px] sm:text-[12px]">
          You can pick one of our handcrafted resume templates.You can start building your resume in less than 5 minutes, using predefined sections approved by recruiters worldwide. You can also customize it to your own needs and personality and hit 'Download'.
        </p>
      </div>
      <Link to={"/cv-builder"} className="flex justify-center items-center">
        <button className="button-resume font-pop shadow-xl xsm:text-[12px]">
          <span>Build Your Resume</span>
        </button>
      </Link>
    </div>
  );
};

export default BuildCV;
