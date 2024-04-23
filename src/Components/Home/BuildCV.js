import React from "react";
import { Link } from "react-router-dom";
import "./BuildCV.css";
import BuilderBg from "../../Assests/Images/builcv-bg.png";

const BuildCV = () => {
  return (
    <div
      style={{ backgroundImage: `url(${BuilderBg})` }}
      className="w-full flex flex-col gap-16 justify-center items-center text-white font-pop font-semibold py-[4%] mt-20 md:gap-12 xsm:gap-6 xsm:py-[5%]"
    >
      <div className="flex flex-col gap-8 justify-center items-center w-[70%] md:gap-6 xsm:w-[80%] xsm:gap-4">
        <p className="text-[36px] text-center md:text-[30px] md:leading-tight xsm:text-[14px] xsm:leading-tighter">
          Create your professional Resume with our designs
        </p>
        <p className="text-[20px] text-center md:text-[14px] md:leading-tight xsm:text-[8px]">
          You can pick one of our handcrafted resume templates.You can start building your resume in less than 5 minutes, using predefined sections approved by recruiters worldwide. You can also customize it to your own needs and personality and hit 'Download'.
        </p>
      </div>
      <Link to={"/cv-builder"} className="flex justify-center items-center">
        <button className="button-resume font-pop shadow-xl">
          <span>Build Your Resume</span>
        </button>
      </Link>
    </div>
  );
};

export default BuildCV;
