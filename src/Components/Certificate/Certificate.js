import React from "react";
import Img1 from "../../Assests/Images/certificate.png";

const Certificate = () => {
  return (
    <>
      <div className="flex flex-row justify-center gap-20 items-center bg-[#F0FFF7] px-28 py-16">
        <div className="w-[820px] h-[560px]">
          <img src={Img1} className="w-full h-full object-fit" />
        </div>
        <div className="flex flex-col gap-8 w-[50%]">
          <p className="text-[44px] text-[#000000] font-poppins font-extrabold">
            {" "}
            <span className="text-[#1DBF73]"> Certification </span> By The
            N.S.D.C
          </p>
          <p className="text-[#000000] text-[24px] font-Nunito Sans text-justify leading-10 tracking-wider">
            NSDC Certification is a prestigious recognition for students who
            have completed accredited skill-based training programs. It
            validates their expertise, demonstrating their dedication to
            practical skills. This certification provides a competitive edge in
            the job market, showcasing proficiency and adherence to industry
            standards. NSDC certifications are widely accepted, unlocking
            rewarding career opportunities and personal growth.
          </p>
        </div>
      </div>
    </>
  );
};

export default Certificate;
