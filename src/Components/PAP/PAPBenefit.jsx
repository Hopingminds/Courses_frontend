import React, { useState } from "react";
import "./pap.css";
import curve from "../../Assets/Images/half.png";
import { ReactComponent as FPlanning } from "../../Assets/Icons/financialPlanning.svg";
import { ReactComponent as Guide } from "../../Assets/Icons/guide.svg";
import { ReactComponent as FRisk } from "../../Assets/Icons/financialRisk.svg";
import { ReactComponent as QualityEdu } from "../../Assets/Icons/qualityEducation.svg";

const PAPBenefit = () => {
  const [content, setcontent] = useState("I understand, ma'am, that you are in a non-technical field, but our courses are going to cater to both technical and non-technical fields because both are equally important")
  return (
    <div className="pap_curve_bg  h-[110vh] w-full grid ">
      <div className="flex h-[90vh] justify-around mt-[15vh] place-items-center  ">
        <div className=" h-[80vh] py-[10vh] relative ">
          <img
            src={curve}
            alt="..."
            className="h-[100%] w-[100%] object-contain"
          />
          <div className="rounded-full h-[45%] w-[60%] top-[27%] left-[7%] absolute bg-[#615f5f] flex justify-center items-center">
            <div className="rounded-full h-[80%] w-[80%] absolute bg-[#D9D9D9] flex justify-center items-center text-center text-[34px] font-medium px-10 shadow-lg shadow-[#000]">Benefits of PAP</div>
          </div>
          <div onClick={()=>setcontent("Securing your future is our promise. With our 100% Placement Guarantee, embark on your journey knowing we're committed to your success every step of the way.")}
          onMouseEnter={() => setcontent("Securing your future is our promise. With our 100% Placement Guarantee, embark on your journey knowing we're committed to your success every step of the way.")} className="flex gap-[1rem]  cursor-pointer max-w-[15vw] h-20 border rounded-[3rem] p-2 pr-4 place-items-center absolute top-[5%] right-[0%] bg-black">
            <span className="bg-[#D9D9D9] p-[10px] rounded-full grid place-items-center h-fit w-fit">
              {" "}
              <FRisk className="h-[40px] w-[40px]" />
            </span>
            <p className="text-white text-[14px]">100% Placement Guarantee</p>
          </div>
          <div onClick={()=>setcontent('Our comprehensive support system ensures your success. Gain access to resources, mentorship, and networking opportunities to secure your desired placement effortlessly')}
          onMouseEnter={()=>setcontent('Our comprehensive support system ensures your success. Gain access to resources, mentorship, and networking opportunities to secure your desired placement effortlessly')} className="flex gap-[1rem]  cursor-pointer max-w-[15vw] h-20 border rounded-[3rem] p-2 pr-4 place-items-center absolute top-[25%] right-[-25%] bg-black">
            <span className="bg-[#D9D9D9] p-[10px] rounded-full grid place-items-center h-fit w-fit">
              {" "}
              <QualityEdu className="h-[40px] w-[40px]" />
            </span>
            <p className="text-white text-[14px]">
            Placement Assistance
            </p>
          </div>
          <div onClick={()=>setcontent("Flexible financing options tailored to your needs. Pay After Placement ensures you can pursue your goals without financial stress. Empower your journey with our adaptable payment solutions")}
          onMouseEnter={()=>setcontent("Flexible financing options tailored to your needs. Pay After Placement ensures you can pursue your goals without financial stress. Empower your journey with our adaptable payment solutions")} className="flex gap-[1rem]  cursor-pointer max-w-[15vw] h-20 border rounded-[3rem] p-2 pr-4 place-items-center absolute top-[45%] right-[-40%] bg-black">
            <span className="bg-[#D9D9D9] p-[10px] rounded-full grid place-items-center h-fit w-fit">
              {" "}
              <Guide className="h-[40px] w-[40px]" />
            </span>
            <p className="text-white text-[14px]">
            Financial Flexibility
            </p>
          </div>
          <div onClick={()=>setcontent("Ensuring student success is our priority. Our program incorporates comprehensive risk mitigation strategies, safeguarding students' investments and paving the way for a secure educational journey")}
          onMouseEnter={()=>setcontent("Ensuring student success is our priority. Our program incorporates comprehensive risk mitigation strategies, safeguarding students' investments and paving the way for a secure educational journey")} className="flex gap-[1rem]  cursor-pointer max-w-[15vw] h-20 border rounded-[3rem] p-2 pr-4 place-items-center absolute top-[65%] right-[-25%] bg-black">
            <span className="bg-[#D9D9D9] p-[10px] rounded-full grid place-items-center h-fit w-fit">
              {" "}
              <FPlanning className="h-[40px] w-[40px]" />
            </span>
            <p className="text-white text-[14px]">Risk Mitigation for Students</p>
          </div>
          <div onClick={()=>setcontent('Empowering students with the mindset of lifelong learning. Our program fosters continuous growth, equipping learners with skills to thrive in an ever-evolving world.')}
          onMouseEnter={()=>setcontent('Empowering students with the mindset of lifelong learning. Our program fosters continuous growth, equipping learners with skills to thrive in an ever-evolving world.')} className="flex gap-[1rem]  cursor-pointer max-w-[15vw] h-20 border rounded-[3rem] p-2 pr-4 place-items-center absolute top-[85%] right-[-5%] bg-black">
            <span className="bg-[#D9D9D9] p-[10px] rounded-full grid place-items-center h-fit w-fit">
              {" "}
              <FPlanning className="h-[40px] w-[40px]" />
            </span>
            <p className="text-white text-[14px]">
            Encourages life long learning
            </p>
          </div>
        </div>
        <div  className="border grid justify-self-start rounded-2xl">
          <div className="h-[40vh] aspect-square p-5 text-white grid place-items-center text-balance">
            <p>
             {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PAPBenefit;
