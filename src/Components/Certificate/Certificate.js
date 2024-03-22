import React from "react";
import Img1 from "../../Assests/Images/certificate.png";

const Certificate = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center bg-[#F0FFF7] gap-10 px-[5%] py-16 xsm:py-6 xsm:gap-4">
        <div className="w-[65%] h-[60vh] xsm:h-[18vh]">
          <img src={Img1} className="w-full h-full object-fit" />
        </div>
        <div className="flex flex-col space-y-3 w-[70%] xsm:gap-2">
          <p className="text-[42px] text-[#000000] font-pop font-extrabold xsm:text-[8px]">
            {" "}
            <span className="text-[#1DBF73]"> Certification </span> By The
            N.S.D.C
          </p>
          <p className="text-[#000000] text-[18px] font-nu text-justify leading-8 tracking-wider xsm:text-[8px] xsm:leading-none">
            NSDC Certification is a prestigious recognition for students who
            have completed accredited skill-based training programs. <span className="text-[#000000] text-[20px] font-nu xsm:hidden"> It
            validates their expertise, demonstrating their dedication to
            practical skills. This certification provides a competitive edge in
            the job market, showcasing proficiency and adherence to industry
            standards. </span> NSDC certifications are widely accepted, unlocking
            rewarding career opportunities and personal growth.
          </p>
        </div>
      </div>
    </>
  );
};

export default Certificate;
