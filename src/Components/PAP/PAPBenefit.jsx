import React from "react";
import "./pap.css";
import curve from "../../Assets/Images/half.png";
import { ReactComponent as FPlanning } from "../../Assets/Icons/financialPlanning.svg";
import { ReactComponent as Guide } from "../../Assets/Icons/guide.svg";
import { ReactComponent as FRisk } from "../../Assets/Icons/financialRisk.svg";
import { ReactComponent as QualityEdu } from "../../Assets/Icons/qualityEducation.svg";

const PAPBenefit = () => {
  return (
    <div className="pap_curve_bg border border-red-600 h-[110vh] w-full grid ">
      <div className="grid grid-cols-[70%_30%] h-[90vh] mt-[15vh] place-items-center">
        <div className=" h-[80vh] py-[10vh] relative">
          <img
            src={curve}
            alt="..."
            className="h-[100%] w-[100%] object-contain"
          />
          <div className="border-[30px] border-[#615f5f] rounded-full absolute top-[50%] translate-y-[-50%] left-[0%] bg-[#D9D9D9] h-[40vh] aspect-square p-[1rem] grid place-items-center">
            <p className="text-[25px] text-center"> Benefits of PAP</p>
          </div>
          <div className="flex gap-[1rem] max-w-[15vw] border rounded-[3rem] p-2 px-4 place-items-center absolute top-[5%] right-[0%] bg-black">
            <span className="bg-[#D9D9D9] p-[10px] rounded-full grid place-items-center h-fit w-fit">
              {" "}
              <FRisk className="h-[20px] w-[20px]" />
            </span>
            <p className="text-white text-[14px]">Reduced Financial Risk</p>
          </div>
          <div className="flex gap-[1rem] max-w-[15vw] border rounded-[3rem] p-2 px-4 place-items-center absolute top-[25%] right-[-25%] bg-black">
            <span className="bg-[#D9D9D9] p-[10px] rounded-full grid place-items-center h-fit w-fit">
              {" "}
              <QualityEdu className="h-[20px] w-[20px]" />
            </span>
            <p className="text-white text-[14px]">
              Access to quality education
            </p>
          </div>
          <div className="flex gap-[1rem] max-w-[15vw] border rounded-[3rem] p-2 px-4 place-items-center absolute top-[45%] right-[-40%] bg-black">
            <span className="bg-[#D9D9D9] p-[10px] rounded-full grid place-items-center h-fit w-fit">
              {" "}
              <Guide className="h-[20px] w-[20px]" />
            </span>
            <p className="text-white text-[14px]">
              Personalised Career Guidance
            </p>
          </div>
          <div className="flex gap-[1rem] max-w-[15vw] border rounded-[3rem] p-2 px-4 place-items-center absolute top-[65%] right-[-25%] bg-black">
            <span className="bg-[#D9D9D9] p-[10px] rounded-full grid place-items-center h-fit w-fit">
              {" "}
              <FPlanning className="h-[20px] w-[20px]" />
            </span>
            <p className="text-white text-[14px]">Motivation & Commitment</p>
          </div>
          <div className="flex gap-[1rem] max-w-[15vw] border rounded-[3rem] p-2 px-4 place-items-center absolute top-[85%] right-[-5%] bg-black">
            <span className="bg-[#D9D9D9] p-[10px] rounded-full grid place-items-center h-fit w-fit">
              {" "}
              <FPlanning className="h-[20px] w-[20px]" />
            </span>
            <p className="text-white text-[14px]">
              Financial Planning & Stability
            </p>
          </div>
        </div>
        <div className="border grid justify-self-start rounded-xl">
          <div className="h-[40vh] aspect-square p-5 text-white grid place-items-center text-balance">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident pariatur cum consectetur eum mollitia tempore inventore
              reprehenderit obcaecati corporis maiores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PAPBenefit;
