import React, { useState } from "react";
import "./pap.css";
import curve from "../../Assets/Images/half.png";
import { ReactComponent as FPlanning } from "../../Assets/Icons/financialPlanning.svg";
import { ReactComponent as Guide } from "../../Assets/Icons/guide.svg";
import { ReactComponent as FRisk } from "../../Assets/Icons/financialRisk.svg";
import { ReactComponent as QualityEdu } from "../../Assets/Icons/qualityEducation.svg";
import { ReactComponent as FLearning } from "../../Assets/Icons/learning.svg";

const PAPBenefit = () => {
  const [activeSection, setActiveSection] = useState("100% Placement Guarantee");

  const handleSectionClick = (sectionName) => {
    setActiveSection(sectionName);
  };

  return (
    <div className="pap_curve_bg  h-[110vh]  w-full grid xsm:h-[15%] md:h-[60%] xsm:hidden">
      <div className="flex h-[90vh] justify-around mt-[15vh] place-items-center   xsm:h-[60%] xsm:justify-center xsm:gap-1 xsm:pr-4 md:h-[70%] md:justify-between md:pr-20 md:pl-4">
        <div className=" h-[80vh] py-[10vh] relative xsm:h-[45vh] md:h-[60vh]">
          <img
            src={curve}
            alt="..."
            className="h-[100%] w-[100%] object-contain xsm:w-[88%] xsm:h-[79%]"
          />
          <div className="rounded-full h-[45%] w-[60%] top-[27%] left-[7%] absolute bg-[#615f5f] flex justify-center items-center xsm:h-[100px] xsm:w-[100px] xsm:top-[29%] xsm:left-[-6%] md:w-[65%] md:left-[6%]">
            <div className="rounded-full h-[80%] w-[80%] absolute bg-[#D9D9D9] flex justify-center items-center text-center text-[34px] font-medium px-10 shadow-lg shadow-[#000] xsm:text-[14px] xsm:w-[30%] md:text-[22px]">
              Benefits of PAP
            </div>
          </div>
          <div
            onClick={() => handleSectionClick("100% Placement Guarantee")}
            onMouseEnter={() => handleSectionClick("100% Placement Guarantee")}
            className={`flex gap-[1rem]  cursor-pointer max-w-[15vw] h-20 border rounded-[3rem] p-2 pr-4 place-items-center absolute top-[5%] right-[0%]  xsm:h-10 xsm:max-w-[26vw] xsm:gap-1 xsm:p-1 xsm:right-[-5%] xsm:top-[12%] md:h-14 md:gap-2 md:top-[6%] md:max-w-[18vw] ${activeSection === "100% Placement Guarantee" ? "bg-[#615F5F]" : "bg-black"}`}
          >
            <span
              className={`bg-[#D9D9D9] p-[10px] rounded-full grid place-items-center h-fit w-fit `}
            >
              {" "}
              <FRisk className="h-[40px] w-[40px] xsm:h-[13px] xsm:w-[13px] md:h-[26px] md:w-[26px]" />
            </span>
            <p className="text-white text-[14px] xsm:text-[8px] md:text-[10px]">
              100% Placement Guarantee
            </p>
          </div>
          <div
            onClick={() => handleSectionClick("Career Assistance")}
            onMouseEnter={() => handleSectionClick("Career Assistance")}
            className={`flex gap-[1rem]  cursor-pointer max-w-[15vw] h-20 border rounded-[3rem] p-2 pr-4 place-items-center absolute top-[25%] right-[-25%]  xsm:h-10 xsm:max-w-[26vw] xsm:gap-1 xsm:p-1 xsm:right-[-31%] md:h-14 md:gap-2 md:max-w-[18vw] ${activeSection === "Career Assistance" ? "bg-[#615F5F]" : "bg-black"}`}
          >
            <span className="bg-[#D9D9D9] p-[10px] rounded-full grid place-items-center h-fit w-fit">
              {" "}
              <QualityEdu className="h-[40px] w-[40px] xsm:h-[13px] xsm:w-[13px] md:h-[26px] md:w-[26px]" />
            </span>
            <p className="text-white text-[14px] xsm:text-[8px] md:text-[10px]">
            Career Assistance
            </p>
          </div>
          <div
            onClick={() => handleSectionClick("Financial Flexibility")}
            onMouseEnter={() => handleSectionClick("Financial Flexibility")}
            className={`flex gap-[1rem]  cursor-pointer max-w-[15vw] h-20 border rounded-[3rem] p-2 pr-4 place-items-center absolute top-[45%] right-[-40%]  xsm:h-10 xsm:max-w-[26vw] xsm:gap-1 xsm:p-1 xsm:right-[-49%] xsm:top-[39%] md:h-14 md:gap-2 md:max-w-[18vw] ${activeSection === "Financial Flexibility" ? "bg-[#615F5F]" : "bg-black"}`}
          >
            <span className="bg-[#D9D9D9] p-[10px] rounded-full grid place-items-center h-fit w-fit">
              {" "}
              <Guide className="h-[40px] w-[40px] xsm:h-[13px] xsm:w-[13px] md:h-[26px] md:w-[26px]" />
            </span>
            <p className="text-white text-[14px] xsm:text-[8px] md:text-[10px]">
              Financial Flexibility
            </p>
          </div>
          <div
            onClick={() => handleSectionClick("Risk Mitigation for Students")}
            onMouseEnter={() => handleSectionClick("Risk Mitigation for Students")}
            className={`flex gap-[1rem]  cursor-pointer max-w-[15vw] h-20 border rounded-[3rem] p-2 pr-4 place-items-center absolute top-[65%] right-[-25%]  xsm:h-10 xsm:max-w-[26vw] xsm:gap-1 xsm:p-1 xsm:right-[-33%] xsm:top-[52%] md:h-14 md:gap-2 md:max-w-[18vw] ${activeSection === "Risk Mitigation for Students" ? "bg-[#615F5F]" : "bg-black"}`}
          >
            <span className="bg-[#D9D9D9] p-[10px] rounded-full grid place-items-center h-fit w-fit">
              {" "}
              <FPlanning className="h-[40px] w-[40px] xsm:h-[13px] xsm:w-[13px] md:h-[26px] md:w-[26px]" />
            </span>
            <p className="text-white text-[14px] xsm:text-[8px] md:text-[10px]">
              Risk Mitigation for Students
            </p>
          </div>
          <div
            onClick={() => handleSectionClick("Encourages life long learning")}
            onMouseEnter={() => handleSectionClick("Encourages life long learning")}
            className={`flex gap-[1rem]  cursor-pointer max-w-[15vw] h-20 border rounded-[3rem] p-2 pr-4 place-items-center absolute top-[85%] right-[-5%]  xsm:h-10 xsm:max-w-[26vw] xsm:gap-1 xsm:p-1 xsm:top-[65%] xsm:right-[-8%] md:h-14 md:gap-2 md:top-[82%] md:max-w-[18vw] ${activeSection === "Encourages life long learning" ? "bg-[#615F5F]" : "bg-black"}`}
          >
            <span className="bg-[#D9D9D9] p-[10px] rounded-full grid place-items-center h-fit w-fit">
              {" "}
              <FLearning className="h-[40px] w-[40px] xsm:h-[13px] xsm:w-[13px] md:h-[26px] md:w-[26px]" />
            </span>
            <p className="text-white text-[14px] xsm:text-[8px] md:text-[10px]">
              Encourages life long learning
            </p>
          </div>
        </div>
        <div className="border grid justify-self-start rounded-2xl xsm:hidden">
          <div className="h-[260px] aspect-square p-5  text-white grid place-items-center text-balance xsm:h-[150px] xsm:text-[8px] md:text-[14px] md:h-[30vh]">
            <p>{activeSection === "100% Placement Guarantee"
              ? "Securing your future is our promise. With our 100% Placement Guarantee, you can embark on your journey knowing we are committed to your success every step of the way."
              : activeSection === "Career Assistance"
              ? "Our extensive support network is designed to guarantee your success. Benefit from access to resources, mentorship, and networking opportunities that will help you achieve your desired placement with ease."
              : activeSection === "Financial Flexibility"
              ? "Flexible financing options are tailored to your needs. Our Pay After Placement program ensures that you can pursue your goals without financial stress. Empower your journey with our adaptable payment solutions."
              : activeSection === "Risk Mitigation for Students"
              ? "Our focus is on student success. We employ detailed risk management strategies to protect students' investments and ensure a secure educational experience."
              : activeSection === "Encourages life long learning"
              ? "Our program is dedicated to nurturing a lifelong learning mindset in students. It promotes continuous growth and equips learners with the skills needed to excel in a constantly changing world."
              : "" /* Add content for other sections here */
            }</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PAPBenefit;
